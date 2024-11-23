import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Get initial dark mode preference from system or localStorage
const getInitialDarkMode = () => {
    if (!browser) return false;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Create the dark mode store
export const darkMode = writable<boolean>(getInitialDarkMode());

// Update dark mode class and localStorage
export const toggleDarkMode = () => {
    darkMode.update(isDark => {
        const newValue = !isDark;
        if (browser) {
            localStorage.setItem('theme', newValue ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', newValue);
        }
        return newValue;
    });
};

// Initialize dark mode on client side
if (browser) {
    darkMode.subscribe(isDark => {
        document.documentElement.classList.toggle('dark', isDark);
    });
}
