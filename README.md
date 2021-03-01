[![npm](https://img.shields.io/npm/v/rollup-plugin-project-digest?style=for-the-badge)](https://www.npmjs.com/package/rollup-plugin-project-digest)

# Rollup Plugin Project Digest

> Rollup plugin to generate a file with digest of all project assets.

## Install

```sh
npm install --save-dev rollup-plugin-project-digest
```

## Usage

In your rollup configuration:

```javascript
import projectDigest from 'rollup-plugin-project-digest';

export default {
    // ...
    plugins: [
        projectDigest('dist/digest', {
            algorithm: 'md5'
        })
    ]
}
```

This will produce file "digest" in your output directory with digest, based on all project assets:

```
dc829bf0d79e690c59cee708b527e6b7
```

# Configuration

- `algorithm` - Hash algorithm used to generate digest. You can use all algorithms, compatible
  with [crypto.createHash](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options). Examples
  are 'sha256' (default), 'sha512', etc.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/djaler/rollup-plugin-project-digest.

## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
