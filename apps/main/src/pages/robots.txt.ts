import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const env = locals.runtime?.env;
  const isUat = env?.ENVIRONMENT === 'uat';

  const body = isUat ? 'User-agent: *\nDisallow: /' : 'User-agent: *\nAllow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
