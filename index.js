'use strict';

class CachedCredential {
  constructor(store) {
    this.store = store;
  }

  isExpired(name) {
    return this.store[name].expiry === 0 || (this.store[name].expiry && this.store[name].expireAt < Date.now());
  }

  setEvent(event) {
    this.store.event = event;
  }

  async preload(name) {
    this.store[name].credential = await this.store[name].source.call(this, this.store.event);
  }

  async get(name) {
    if (this.store[name].credential && !this.isExpired(name)) return this.store[name].credential;

    this.store[name].credential = await this.store[name].source.call(this, this.store.event);
    this.store[name].expireAt = Date.now() + this.store[name].expiry * 1000;

    return this.store[name].credential;
  }
}

module.exports = CachedCredential;
