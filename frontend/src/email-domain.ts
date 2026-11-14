// Optional institute email domain shown on the auth pages, e.g. VITE_ALLOWED_EMAIL_DOMAIN=college.edu.
// Must match ALLOWED_EMAIL_DOMAIN on the backend, which is what actually enforces it.
export const EMAIL_DOMAIN = (import.meta.env.VITE_ALLOWED_EMAIL_DOMAIN || '').trim().replace(/^@/, '')
