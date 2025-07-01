export const LOCALSTORAGE = {
    LANG: 'LANG',
    MODE: 'MODE',
}

export const MODEs = {
    DARK: 'dark',
    LIGHT: 'light',
} as const;

export const LANGs = {
    ENGLISH: 'en',
    MYANMAR: 'mm',
} as const;

export const ROUTEs = {
    HOME: '/',
    ABOUT: '/about',
    PROJECTS: '/projects',
    CONTACT: '/contact'
}

export const DEFAULT_MODE = MODEs.DARK;
export const DEFAULT_LANG = LANGs.ENGLISH;