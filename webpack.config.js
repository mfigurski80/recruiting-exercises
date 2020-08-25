const path = require('path');

module.exports = {
    entry: './src/InventoryAllocater.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: 'shipments.js',
        path: path.resolve(__dirname, 'dist'),
    },
};