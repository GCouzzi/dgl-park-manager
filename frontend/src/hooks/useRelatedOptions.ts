import { useEffect, useMemo, useState } from 'react';
import { api } from '../api/client';
import type { EntityRecord } from '../api/types';
import type { FieldConfig, OptionSource } from '../config/resourceConfigs';

type RelatedOptions = Record<string, EntityRecord[]>;

function getUniqueSources(fields: FieldConfig[]) {
  const sources = new Map<string, OptionSource>();

  fields.forEach((field) => {
    if (field.optionSource) {
      sources.set(field.optionSource.key, field.optionSource);
    }
  });

  return Array.from(sources.values());
}

export function useRelatedOptions(fields: FieldConfig[]) {
  const [options, setOptions] = useState<RelatedOptions>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sources = useMemo(() => getUniqueSources(fields), [fields]);

  useEffect(() => {
    if (sources.length === 0) return;

    let mounted = true;
    setLoading(true);
    setError(null);

    Promise.all(
      sources.map(async (source) => {
        const data = await api.get<EntityRecord[]>(source.endpoint);
        return [source.key, data] as const;
      }),
    )
      .then((entries) => {
        if (!mounted) return;
        setOptions(Object.fromEntries(entries));
      })
      .catch((err: unknown) => {
        if (!mounted) return;
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados relacionados.');
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [sources]);

  return { options, loading, error };
}
