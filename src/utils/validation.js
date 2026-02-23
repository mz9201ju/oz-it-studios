const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

export function validateContactForm(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Required";
  if (!form.email.trim()) errors.email = "Required";
  else if (!isValidEmail(form.email)) errors.email = "Invalid email";
  if (!form.message.trim()) errors.message = "Required";

  return errors;
}
