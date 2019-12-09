/**
 * Example config
 * filename can be:
 * "config.js" (common config) or "config.[mode].js" (mode config)
 * Common config will be merged with current mode config
 */
const config = {
  /**
   * Server basic options
   */
  server: {
    host: 'localhost',
    port: 3030,
    // Array of Allowed domains for cors (e.g. domain.com)
    origins: [],
    // API base url: http://localhost:3030/api/v1
    base: '/api/v1',
  },
  /**
   * Database basic options
   */
  database: {
    db_host: 'localhost',
    db_port: 27017,
    db_name: '',
    db_user: '',
    db_pass: '',
    db_auth: 'admin',
  },
  /**
   * API basic options
   */
   api: {
    response: {
      error: {
        // Props inside the error response body object to be disabled
        disable: [/* 'status', 'stack' */]
      },
      success: {
        // Props inside the success response body object to be disabled
        disable: [/* 'status', 'code' */]
      }
    }
  },
};

module.exports = config;
