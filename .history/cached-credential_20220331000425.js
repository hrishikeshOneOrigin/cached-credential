'use strict';

const logger = require('../../utils/logger');

class CachedCredential {
  constructor(store) {
    this.store = store;
  }

  isExpired(name) {
    if (!this.store[name].expiry) return false;

    return this.store[name].expiry && this.store[name].expireAt < Date.now();
  }

  async get(name) {
    if (this.store[name].credential && !this.isExpired(name)) {
      logger.info('loading credential for ' + name + ' [CACHED]');

      return this.store[name].credential;
    }

    this.store[name].credential = await this.store[name].source.call(this, this.store.event);
    this.store[name].expireAt = Date.now() + this.store[name].expiry * 1000;

    logger.info('loading credential for ' + name);

    return this.store[name].credential;
  }
}

module.exports = CachedCredential;
