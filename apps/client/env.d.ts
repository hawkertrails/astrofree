// Define your variables here
interface Env {
  BASE_URL: string;
  ENVIRONMENT: string;
  // Add any other vars from your wrangler.json or .dev.vars
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
