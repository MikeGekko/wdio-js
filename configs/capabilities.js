export const capabilities_firefox = [
    {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['--headless', '--width=1920', '--height=1080'],
        },
    },
];

export const capabilities_chrome = [
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--window-size=1920,1080'],
        },
    },
];
