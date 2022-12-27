# cached-credential

cached-credential is a module for NodeJS/ExpressJS written in pure Javascript.
This module can be used to cache credentials so retrieval is faster.

## Installation

```
npm i @oneorigin/cached-credential
```

## Usage

```javascript
const CachedCredential = require('@oneorigin/cached-credential');

const credential = new CachedCredential({
  secretCredentailName: {
    expiry: secretExpiry,
    source: helper.getToken
  }
});

credential.get('secretCredentialName');

credential.isExpired('secretCredentialName');
```

## Description

- **expiry** : Expiration time of the credentials in seconds.
- **source** : A helper function that fetches the credentials from the source location.
- **get()** : Get the credentials from the source location if expired or from cache if not expired.
- **isExpired()** : Return a boolean indicating if the credentials are expired or not.
