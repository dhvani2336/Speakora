/**
 * Speakora Activity Logger
 * Records user actions and provides helpers for Recent Activity display.
 */

window.SpeakoraActivity = {
    /**
     * Log a new activity
     * @param {string} type - 'lesson', 'test', 'material', 'achievement'
     * @param {string} text - HTML/Text description of the activity
     * @param {number|null} score - Optional score achieved
     * @param {string} color - Hex color for the activity dot
     */
    log: function (type, text, score = null, color = '#4f46e5') {
        const userId = localStorage.getItem("userId") || localStorage.getItem("currentUser") || "anonymous";
        const logsKey = userId + "_activityLogs";
        let logs = JSON.parse(localStorage.getItem(logsKey) || "[]");

        const newActivity = {
            type: type,
            text: text,
            score: score,
            color: color,
            date: new Date().toISOString()
        };

        logs.unshift(newActivity); // Add to beginning

        // Keep a reasonable number of recent activities (e.g., 50)
        if (logs.length > 50) logs = logs.slice(0, 50);

        localStorage.setItem(logsKey, JSON.stringify(logs));
        console.log(`[SpeakoraActivity] Logged: ${type} - ${text.replace(/<[^>]*>/g, '')}`);
    },

    /**
     * Get all logged activities
     */
    getLogs: function () {
        const userId = localStorage.getItem("userId") || localStorage.getItem("currentUser") || "anonymous";
        const logsKey = userId + "_activityLogs";
        return JSON.parse(localStorage.getItem(logsKey) || "[]");
    },

    /**
     * Helper to format relative time
     */
    timeAgo: function (dateStr) {
        try {
            const date = new Date(dateStr);
            const now = new Date();
            const diffInSeconds = Math.floor((now - date) / 1000);

            if (diffInSeconds < 60) return 'Just now';

            const diffInMinutes = Math.floor(diffInSeconds / 60);
            if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

            const diffInHours = Math.floor(diffInMinutes / 60);
            if (diffInHours < 24) return `${diffInHours}h ago`;

            const diffInDays = Math.floor(diffInHours / 24);
            if (diffInDays < 7) return `${diffInDays}d ago`;

            return date.toLocaleDateString();
        } catch (e) {
            return 'Recently';
        }
    }
};
