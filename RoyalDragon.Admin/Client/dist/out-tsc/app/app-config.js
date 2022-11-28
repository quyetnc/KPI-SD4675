/**
 * Default App Config
 *
 * ? TIP:
 *
 * Change app config based on your preferences.
 * You can also change them on each component basis. i.e `app/main/pages/authentication/auth-login-v1/auth-login-v1.component.ts`
 *
 * ! IMPORTANT: If the enableLocalStorage option is true then make sure you clear the browser local storage(https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete).
 *  ! Otherwise, it will not take the below config changes and use stored config from local storage.
 *
 */
// prettier-ignore
export const coreConfig = {
    app: {
        appName: 'RoyalDragonIT',
        appTitle: 'RoyalDragonIT - Angular 14+ Bootstrap Admin Template',
        appLogoImage: '/assets/images/logo/logo.svg',
        appLanguage: 'en', // App Default Language (en, fr, de, pt etc..)
    },
    layout: {
        skin: 'default',
        type: 'vertical',
        animation: 'fadeIn',
        menu: {
            hidden: false,
            collapsed: false, // Boolean: true, false
        },
        // ? For horizontal menu, navbar type will work for navMenu type
        navbar: {
            hidden: false,
            type: 'floating-nav',
            background: 'navbar-light',
            customBackgroundColor: true,
            backgroundColor: '' // BS color i.e bg-primary, bg-success
        },
        footer: {
            hidden: false,
            type: 'footer-static',
            background: 'footer-light',
            customBackgroundColor: false,
            backgroundColor: '' // BS color i.e bg-primary, bg-success
        },
        enableLocalStorage: true,
        customizer: true,
        scrollTop: true,
        buyNow: true // Boolean: true, false (Set false in real project, For demo purpose only)
    }
};
//# sourceMappingURL=app-config.js.map