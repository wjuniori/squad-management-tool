import React from 'react';
import { Label, Input, RadioButtonWrapper } from './RadioButtonField.styles';

interface RadioButtonFieldProps {
  value: number;
  name: string;
  labels: string[];
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonField: React.FC<RadioButtonFieldProps> = ({
  value,
  name,
  labels,
  disabled,
  required,
  onChange,
}) => {
  return (
    <RadioButtonWrapper>
      {labels.map((label: string, index: number) => {
        const fieldId = `id_${label}`;

        return (
          <Label key={fieldId} htmlFor={fieldId}>
            <Input
              type="radio"
              id={fieldId}
              name={name}
              disabled={disabled}
              required={required}
              value={index}
              checked={value === index}
              onChange={onChange}
            />
            {label}
          </Label>
        );
      })}
    </RadioButtonWrapper>
  );
};

export default RadioButtonField;
