export const validateEmail = (email: string): string | null =>
  /\S+@\S+\.\S+/.test(email) ? null : 'Invalid email format';

export const validatePassword = (password: string): string | null =>
  password.length >= 6 ? null : 'Password must be at least 6 characters';

export const validateName = (name: string): string | null =>
  name.trim().length > 0 ? null : 'Name is required';

export const validatePhoneNumber = (phone: string): string | null =>
  /^\d{10}$/.test(phone) ? null : 'Phone number must be 10 digits';

