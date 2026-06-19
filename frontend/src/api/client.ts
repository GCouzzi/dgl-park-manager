const DEFAULT_API_URL = 'https://dgl-park-manager.onrender.com';

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL?.trim() || DEFAULT_API_URL
).replace(/\/$/, '');

export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

function buildUrl(path: string, query?: Record<string, string | number | boolean | undefined | null>) {
  const url = new URL(`${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`);

  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

function extractMessage(payload: unknown, fallback: string) {
  if (!payload) return fallback;

  if (typeof payload === 'string') return payload;

  if (typeof payload === 'object' && 'message' in payload) {
    const message = (payload as { message: unknown }).message;

    if (Array.isArray(message)) {
      return message.join('\n');
    }

    if (typeof message === 'string') {
      return message;
    }
  }

  return fallback;
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  query?: Record<string, string | number | boolean | undefined | null>,
): Promise<T> {
  const response = await fetch(buildUrl(path, query), {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  });

  const text = await response.text();
  let payload: unknown = null;

  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }

  if (!response.ok) {
    throw new ApiError(
      extractMessage(payload, `Erro HTTP ${response.status}`),
      response.status,
      payload,
    );
  }

  return payload as T;
}

export const api = {
  get<T>(path: string, query?: Record<string, string | number | boolean | undefined | null>) {
    return request<T>(path, { method: 'GET' }, query);
  },

  post<T>(path: string, body: unknown) {
    return request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  put<T>(path: string, body: unknown) {
    return request<T>(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  delete<T>(path: string) {
    return request<T>(path, { method: 'DELETE' });
  },
};
