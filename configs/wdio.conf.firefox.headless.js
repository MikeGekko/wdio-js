import {capabilities_firefox} from './capabilities.js';
import {config as base} from './wdio.conf.js';

export const config = {
    ...base,
    capabilities: [...capabilities_firefox],
};
