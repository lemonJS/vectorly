'use strict';

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => ({
  publicRuntimeConfig: {
    apiHostUrl: `https://api.vectorly.app/api/${phase === PHASE_DEVELOPMENT_SERVER ? 'dev' : 'live'}`
  }
});
