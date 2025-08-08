// src/types/index.ts
export type FieldType = 'text' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';

export type ValidationRule = {
  type: 'notEmpty' | 'minLength' | 'maxLength' | 'email' | 'password';
  value?: number | string;
};

export type Field = {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  defaultValue?: string | number | boolean | null;
  validations: ValidationRule[];
  options?: string[];
  isDerived?: boolean;
  parentFields?: string[];
  formula?: string;
};

export type FormConfig = {
  id: string;
  name: string;
  createdAt: string;
  fields: Field[];
};

export type FormsState = {
  currentForm: {
    name: string;
    fields: Field[];
  };
  savedForms: FormConfig[];
};