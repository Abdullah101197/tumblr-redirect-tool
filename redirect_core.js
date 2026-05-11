/**
 * CORE REDIRECT LOGIC
 * This file will be encrypted and executed via eval().
 */
(function() {
    // The mapping object will be dynamically injected here
    const urlMap = __URL_MAP_PLACEHOLDER__;
    
    function getPostId() {
        const path = window.location.pathname;
        // Supports: /post/123456, /id/123456, and mobile variants
        const match = path.match(/(?:post|id)\/(\d+)/);
        return match ? match[1] : null;
    }

    function doRedirect() {
        const postId = getPostId();
        
        if (postId && urlMap[postId]) {
            // Use replace to prevent back-button loops
            // Slight delay to allow some page context to load (more human-like)
            setTimeout(function() {
                window.location.replace(urlMap[postId]);
            }, 50);
        } else {
            // FALLBACK: Remove any blockers
            const blocker = document.getElementById('tm-ly-blocker') || document.getElementById('tm-blocker');
            if (blocker) blocker.remove();
        }
    }

    // Execute immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', doRedirect);
    } else {
        doRedirect();
    }
})();

