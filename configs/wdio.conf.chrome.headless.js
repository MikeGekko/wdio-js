import {capabilities_chrome} from './capabilities.js';
import {config as base} from './wdio.conf.js';

export const config = {
    ...base,
    capabilities: capabilities_chrome,
};
