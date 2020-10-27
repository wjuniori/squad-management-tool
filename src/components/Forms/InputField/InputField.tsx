import React from 'react';
import { Label, Input } from './InputField.styles';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  type,
  placeholder,
  disabled,
  required,
  onChange,
}) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';

  return (
    <Label htmlFor={fieldId}>
      {label}
      <Input
        as={isTextarea ? 'textarea' : 'input'}
        type={type}
        id={fieldId}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default InputField;
