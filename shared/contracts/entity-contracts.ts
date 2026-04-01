/**
 * R2 entity document contracts.
 * Every document carries type and schemaVersion for runtime validation.
 */

export interface BaseDocument {
    type: string;
    schemaVersion: string;
}

// ── User ─────────────────────────────────────────────────────────────

export interface UserDocument extends BaseDocument {
    type: 'user';
    uid: string;
    firstSeenAt: string;
    lastSeenAt: string;
    name: string | null;
    gender: string | null;
    birthdate: string | null;
    traits: Record<string, string>;
    stats: {
        totalReadings: number;
        totalFollowUps: number;
    };
    preferences: {
        language: string;
        tone: string;
    };
    locations: {
        lastCountry: string | null;
        lastCity: string | null;
    };
    etagVersion: number;
}

// ── Session ──────────────────────────────────────────────────────────

export interface SessionDocument extends BaseDocument {
    type: 'session';
    sessionId: string;
    uid: string;
    createdAt: string;
    country: string | null;
    city: string | null;
    timezone: string | null;
    device: string | null;
    userAgent: string | null;
    appVersion: string;
    screenWidth: number | null;
    screenHeight: number | null;
}

// ── Game ─────────────────────────────────────────────────────────────

export interface GameDocument extends BaseDocument {
    type: 'game';
    gameId: string;
    uid: string;
    sessionId: string;
    createdAt: string;
    spreadType: number;
    cards: Array<{
        position: string;
        name: string;
        reversed: boolean;
    }>;
    question: string | null;
    topic: string | null;
    language: string;
    tone: string;
    reading: Record<string, unknown>;
    readingDigest: string | null;
    turnCount: number;
}

// ── Turn ─────────────────────────────────────────────────────────────

export interface TurnDocument extends BaseDocument {
    type: 'turn';
    gameId: string;
    uid: string;
    turnNumber: number;
    createdAt: string;
    turnType: 'reading' | 'followup';
    question: string | null;
    questionDigest: string | null;
    answerText: string;
    answerDigest: string;
    userContextDelta: Record<string, unknown> | null;
    aiProvider: string;
    aiModel: string;
    responseTimeMs: number;
    tokenBudgetUsed: number;
    success: boolean;
    errorMessage: string | null;
}

// ── Incident ─────────────────────────────────────────────────────────

export interface IncidentDocument extends BaseDocument {
    type: 'incident';
    incidentId: string;
    createdAt: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    incidentType: string;
    uid: string | null;
    summary: string;
    evidenceKey: string;
}

// ── Schema ───────────────────────────────────────────────────────────

export interface ActiveSchemaDocument {
    schemaVersion: string;
    compatibilityApiMin: string;
    compatibilityApiMax: string;
    activatedAt: string;
    sourceSchemaVersion: string | null;
    status: 'active' | 'migrating' | 'rollback';
}

// ── Analytics ────────────────────────────────────────────────────────

export interface DailySummary {
    date: string;
    sessions: number;
    uniqueUsers: number;
    readings: number;
    followUps: number;
    topLanguages: Array<{ language: string; count: number }>;
}

export interface DailySummaryDelta {
    sessions?: number;
    uniqueUsers?: number;
    readings?: number;
    followUps?: number;
    language?: string;
}
