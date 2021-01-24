const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

class HotHashWebpackPlugin {
    constructor(options) {
        this.version = options && options.version;
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tapAsync('HotHashWebpackPlugin', (compilation, callback) => {
            const outputPath = compiler.options.output.path;
            const buildJsonFile = path.resolve(outputPath, 'filesinfo.json');
            const fileInfoList = [];
            const assets = compilation.getAssets();
            assets.forEach(asset => {
                const filepath = path.resolve(outputPath, asset.name);
                const content = fs.readFileSync(filepath);
                const hash = crypto.createHash('sha256');
                hash.update(content);
                const hashContent = hash.digest('hex');
                fileInfoList.push({
                    path: asset.name,
                    hash: hashContent,
                    size: content.length
                });
            });
            const json = {
                lastBuildTDate: new Date().toLocaleString(),
                fileInfoList,
                version: this.version
            };
            const text = JSON.stringify(json);
            compiler.outputFileSystem.writeFile(buildJsonFile, text, callback);
        });
    }
}

module.exports = HotHashWebpackPlugin;
