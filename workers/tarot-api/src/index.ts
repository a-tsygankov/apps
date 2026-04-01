import type { Env } from './env.js';
import { handleReading } from './handlers/reading.js';
import { handleFollowUp } from './handlers/followup.js';
import { handleTts } from './handlers/tts.js';
import { handleSession } from './handlers/session.js';
import { handleEvent } from './handlers/event.js';
import { handleVersion } from './handlers/version.js';
import { R2UserRepository } from './repositories/user-repository.js';
import { R2GameRepository } from './repositories/game-repository.js';
import { R2AnalyticsRepository } from './repositories/analytics-repository.js';
import { IndexWriter } from './services/index-writer.js';

/**
 * Tarot API — Cloudflare Worker entry point.
 * Routes requests to handlers with CORS support.
 */
export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return corsResponse(env, new Response(null, { status: 204 }));
        }

        const url = new URL(request.url);
        const path = url.pathname;

        // Origin check
        if (!isAllowedOrigin(request, env)) {
            return new Response('Forbidden', { status: 403 });
        }

        // Compose dependencies
        const users = new R2UserRepository(env.R2);
        const games = new R2GameRepository(env.R2);
        const analytics = new R2AnalyticsRepository(env.R2);
        const indexWriter = new IndexWriter(env.R2);
        const deps = { users, games, analytics, indexWriter };

        let response: Response;

        try {
            // Route matching
            if (path === '/api/reading' && request.method === 'POST') {
                response = await handleReading(request, env, deps);
            } else if (path === '/api/followup' && request.method === 'POST') {
                response = await handleFollowUp(request, env, deps);
            } else if (path === '/api/tts' && request.method === 'POST') {
                response = await handleTts(request, env);
            } else if (path === '/api/session' && request.method === 'POST') {
                response = await handleSession(request, env, deps);
            } else if (path === '/api/event' && request.method === 'POST') {
                response = await handleEvent(request, env);
            } else if (path === '/api/meta/version' && request.method === 'GET') {
                response = await handleVersion(request, env);
            } else if (path === '/api/health' && request.method === 'GET') {
                response = Response.json({ status: 'ok' });
            } else {
                response = Response.json(
                    { error: 'Not found', path },
                    { status: 404 },
                );
            }
        } catch (err) {
            console.error('Unhandled error:', err);
            response = Response.json(
                { error: 'Internal server error' },
                { status: 500 },
            );
        }

        return corsResponse(env, response);
    },
} satisfies ExportedHandler<Env>;

// ── CORS helpers ────────────────────────────────────────────────────

function corsResponse(env: Env, response: Response): Response {
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', env.ALLOWED_ORIGINS);
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Access-Control-Max-Age', '86400');

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
    });
}

function isAllowedOrigin(request: Request, env: Env): boolean {
    const url = new URL(request.url);
    if (url.pathname === '/api/health' || url.pathname === '/api/meta/version') {
        return true;
    }

    const origin = request.headers.get('Origin');
    if (!origin) return true; // Non-browser requests

    const allowed = env.ALLOWED_ORIGINS.split(',').map(s => s.trim());
    return allowed.includes(origin);
}
