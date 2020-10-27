import React from 'react';
import { Select, Label } from './SelectField.styles';

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  disabled?: boolean;
  required?: boolean;
  hasAll?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  disabled,
  required,
  hasAll,
  onChange,
}) => {
  const fieldId = `id_${name}`;

  return (
    <Label htmlFor={fieldId}>
      {label}
      <Select
        id={fieldId}
        name={name}
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          Select a formation
        </option>

        {hasAll && <option value="">Todos</option>}

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    </Label>
  );
};

export default SelectField;
