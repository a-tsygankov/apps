import { createAppServices } from './app/composition-root.js';

/**
 * Application entry point.
 * Creates all services via DI and initializes the app.
 */
async function init() {
    const services = createAppServices();

    // Log session start
    services.apiService.logSessionAsync();

    // Check version compatibility
    const compat = await services.compatibilityService.checkAsync();
    if (compat.status === 'incompatible') {
        console.warn('Client incompatible:', compat.message);
        // TODO: Show maintenance/update UI
    } else if (compat.status === 'update_available') {
        console.info('Update available:', compat.message);
        // TODO: Show update banner
    }

    console.log('Tarot Oracle initialized', {
        version: services.config.version,
        uid: services.userContext.uid,
        session: services.userContext.sessionId,
        sttAvailable: services.sttService.isAvailable(),
        ttsAvailable: services.ttsService.isAvailable(),
    });

    // TODO: Mount UI components
}

init().catch(console.error);
