/**
 * Speakora User Session & Data Isolation Utility
 * Ensures that all user-specific data is stored with a unique prefix.
 */
const SpeakoraSession = {
    /**
     * Get the current user ID
     */
    getUserId: function () {
        return localStorage.getItem("userId") || localStorage.getItem("currentUser") || "anonymous";
    },

    /**
     * Get a prefixed key for localStorage
     */
    getPrefix: function () {
        return this.getUserId() + "_";
    },

    /**
     * Get data from localStorage with user isolation
     */
    get: function (key) {
        // Some keys are global
        const globalKeys = ["userId", "currentUser", "loggedIn", "name", "email", "subscription", "language", "languages", "pendingDeletion", "deletionRequestTime"];
        if (globalKeys.includes(key)) {
            return localStorage.getItem(key);
        }
        return localStorage.getItem(this.getPrefix() + key);
    },

    /**
     * Set data in localStorage with user isolation
     */
    set: function (key, value) {
        const globalKeys = ["userId", "currentUser", "loggedIn", "name", "email", "subscription", "language", "languages", "pendingDeletion", "deletionRequestTime"];
        if (globalKeys.includes(key)) {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(this.getPrefix() + key, value);
        }
    },

    /**
     * Helper for legacy compatibility (JSON data)
     */
    getJSON: function (key, defaultValue = null) {
        const val = this.get(key);
        if (val === null) return defaultValue;
        try {
            return JSON.parse(val);
        } catch (e) {
            return defaultValue;
        }
    },

    setJSON: function (key, value) {
        this.set(key, JSON.stringify(value));
    }
};

// Auto-export to global scope
window.SpeakoraSession = SpeakoraSession;
