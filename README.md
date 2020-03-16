# hot-hash-webpack-plugin

A webpack plugin for hot update of h5 files in hybrid development. It can help generate a hash value for each file, which is used to compare the native client and server files to determine whether to update the client's local file.

## Getting Started

To begin, you'll need to install `hot-hash-webpack-plugin`:

```console
$ npm install hot-hash-webpack-plugin --save-dev
```

Then add the plugin to your `webpack` config. For example:

**webpack.config.js**

```js
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');

module.exports = {
  plugins: [
    new HotHashWebpackPlugin({
        version: '1.0.0'
    }),
  ],
};
```

## Output

```json
{
    "lastBuildTDate": "2020-3-10 14:23:31",
    "fileInfoList": [{
        "path": "assets/js/vendors~overview-business-trend-city.a692ad2a.js",
        "hash": "ab45b6f3e42a0ab1372e8a3c894a567a799af4579f954d867eefd986033f7755",
        "size": 9849
    }, {
        "path": "overview.html",
        "hash": "0ab5596da3d195fc0fdbe2d1645bf749784bfe1f5ac255a6f5a57ec5db76a66a",
        "size": 663
    }, {
        "path": "satisfaction.html",
        "hash": "b3cd69167674eb77bc424466dc99bc422011353ca8da0a04f1c3c07168260e4f",
        "size": 798
    }],
    "version": "1.0.0"
}
```

## Options

The plugin's signature:

**webpack.config.js**

```js
module.exports = {
  plugins: [new HotHashWebpackPlugin(options)],
};
```

### Patterns

|               Name                |        Type         |                     Default                     | Description                                                                                           |
| :-------------------------------: | :-----------------: | :---------------------------------------------: | :---------------------------------------------------------------------------------------------------- |
|          version          |     `{String}`      |                   `''`                   |  version id    |

## License

[MIT](./LICENSE)
