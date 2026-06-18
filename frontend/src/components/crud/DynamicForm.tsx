import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import type { EntityRecord } from '../../api/types';
import type { FieldConfig, FormValues } from '../../config/resourceConfigs';

type RelatedOptions = Record<string, EntityRecord[]>;

interface DynamicFormProps {
  fields: FieldConfig[];
  values: FormValues;
  relatedOptions: RelatedOptions;
  mode: 'create' | 'edit';
  submitLabel: string;
  submitting: boolean;
  onChange: (name: string, value: string | number | boolean) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onReset?: () => void;
  extraActions?: ReactNode;
}

function getInputValue(value: string | number | boolean | undefined) {
  if (value === undefined || value === null) return '';
  return String(value);
}

export default function DynamicForm({
  fields,
  values,
  relatedOptions,
  mode,
  submitLabel,
  submitting,
  onChange,
  onSubmit,
  onReset,
  extraActions,
}: DynamicFormProps) {
  function handleInputChange(field: FieldConfig) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      if (field.type === 'checkbox') {
        onChange(field.name, (event.target as HTMLInputElement).checked);
        return;
      }

      onChange(field.name, event.target.value);
    };
  }

  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <div className="row g-3">
        {fields.map((field) => {
          const fieldId = `${mode}-${field.name}`;
          const disabled = mode === 'edit' && field.readOnlyOnEdit;

          if (field.type === 'checkbox') {
            return (
              <div className="col-12" key={field.name}>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={fieldId}
                    checked={Boolean(values[field.name])}
                    disabled={disabled || submitting}
                    onChange={handleInputChange(field)}
                  />
                  <label className="form-check-label" htmlFor={fieldId}>{field.label}</label>
                </div>
                {field.helperText && <div className="form-text">{field.helperText}</div>}
              </div>
            );
          }

          if (field.type === 'select') {
            const staticOptions = field.options ?? [];
            const dynamicOptions = field.optionSource ? relatedOptions[field.optionSource.key] ?? [] : [];

            return (
              <div className="form-floating col-12" key={field.name}>
                <select
                  className="form-select"
                  id={fieldId}
                  value={getInputValue(values[field.name])}
                  required={field.required}
                  disabled={disabled || submitting}
                  onChange={handleInputChange(field)}
                >
                  <option value="">Selecione</option>
                  {staticOptions.map((option) => (
                    <option key={String(option.value)} value={String(option.value)}>
                      {option.label}
                    </option>
                  ))}
                  {field.optionSource && dynamicOptions.map((option) => (
                    <option key={option.id} value={String(field.optionSource?.getValue(option) ?? '')}>
                      {field.optionSource?.getLabel(option)}
                    </option>
                  ))}
                </select>
                <label htmlFor={fieldId}>{field.label}</label>
                {field.helperText && <div className="form-text">{field.helperText}</div>}
              </div>
            );
          }

          if (field.type === 'textarea') {
            return (
              <div className="form-floating col-12" key={field.name}>
                <textarea
                  className="form-control"
                  id={fieldId}
                  placeholder={field.placeholder ?? field.label}
                  value={getInputValue(values[field.name])}
                  required={field.required}
                  maxLength={field.maxLength}
                  disabled={disabled || submitting}
                  onChange={handleInputChange(field)}
                  style={{ minHeight: 120 }}
                />
                <label htmlFor={fieldId}>{field.label}</label>
                {field.helperText && <div className="form-text">{field.helperText}</div>}
              </div>
            );
          }

          return (
            <div className="form-floating col-12" key={field.name}>
              <input
                type={field.type}
                className="form-control"
                id={fieldId}
                placeholder={field.placeholder ?? field.label}
                value={getInputValue(values[field.name])}
                required={field.required}
                min={field.min}
                max={field.max}
                step={field.step}
                maxLength={field.maxLength}
                disabled={disabled || submitting}
                onChange={handleInputChange(field)}
              />
              <label htmlFor={fieldId}>{field.label}</label>
              {field.helperText && <div className="form-text">{field.helperText}</div>}
            </div>
          );
        })}

        <div className="col-12 d-flex flex-column flex-md-row gap-2">
          <button type="submit" className="btn btn-success flex-fill" disabled={submitting}>
            {submitting ? (
              <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
            ) : (
              <i className="bi bi-save me-2" />
            )}
            {submitLabel}
          </button>

          <button type="reset" className="btn btn-warning flex-fill" disabled={submitting}>
            <i className="bi bi-x-circle me-2" />
            Limpar
          </button>

          {extraActions}
        </div>
      </div>
    </form>
  );
}
