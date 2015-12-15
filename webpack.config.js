/**
 * Created by gpl on 15/11/30.
 */
module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};