import { Resend } from 'resend';

/**
 * Create a Resend client using the API key from the request context (Astro.locals.runtime.env).
 * Use in server-side code (API routes, form actions) where you have access to the runtime env.
 */
export function getResend(apiKey: string): Resend {
  return new Resend(apiKey);
}
