import { emailRegex } from 'utils/regex';

// Login
export type LoginFormData = {
  email: string;
  password: string;
};

export const loginFormSchema = {
  email: {
    required: { value: true, message: 'Email is required' },
    pattern: { value: emailRegex, message: 'Please enter a valid email' },
  },
  password: {
    required: 'Password is required',
  },
};

// Sign up
export type SignUpFormData = LoginFormData & {
  confirmPassword: string;
};

export const baseSignUpFormSchema = loginFormSchema;
