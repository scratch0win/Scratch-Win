// Cloudflare Worker entry point. Configure a static assets binding named ASSETS.
export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Static asset binding ASSETS is not configured.", { status: 500 });
    }
    return env.ASSETS.fetch(request);
  }
};
