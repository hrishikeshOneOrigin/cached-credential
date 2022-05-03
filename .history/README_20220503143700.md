# cached-credentials

Cached Credentials is a module for NodeJS/ExpressJS written in pure Javascript.
Module can be used to cache credentials so the REST API calls can get faster.

## Installation

```
npm i cached-credentials
```

## Usage

```javascript
const CachedCredential = require("cached-credential");

const credential = new CachedCredential({
  secretCredentailName: {
    expiry: secretExpiry,
    source: helper.getToken,
  },
});

credential.get("secretCredentailName");

credential.isExpired("secretCredentailName");
```

## Description

expiry: Expiration time of the credentials in seconds.
source: A helper function that fetches the credentials from the source location.
get(): Get the credentials from the source location if expired or from cache if not expired.
isExpired: Return a boolean indicating whether the credentials are expired or not.
