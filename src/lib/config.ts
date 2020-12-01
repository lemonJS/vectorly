import getConfig from 'next/config';

interface Config {
  apiHost: string;
}

const { publicRuntimeConfig } = getConfig();

export const config: Config = publicRuntimeConfig;