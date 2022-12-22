const path = require('path');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 3000;

module.exports = env => {
    const devEnv = env.dev ? 'dev' : 'prod';

    return {
        entry: path.join(__dirname, './index.js'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'index.bundle.js',
        },
        resolve: {
            alias: {
                'assets': path.resolve(__dirname, './src/assets/'),
                'components': path.resolve(__dirname, './src/components/'),
                'pages': path.resolve(__dirname, './src/pages/'),
                'services': path.resolve(__dirname, './src/services/'),
            },
            extensions: ['*', '.jsx', '.js'],
        },
        devServer: {
            host: 'localhost',
            port: port,
            historyApiFallback: true,
            open: true,
            static: {
                directory: path.join(__dirname, './build'),
                watch: true
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    include: /assets/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/',
                                publicPath: 'assets/'
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new Dotenv({
                path: `./.env.${devEnv}`
            }),
            new BundleAnalyzerPlugin(),
        ]
    }
}
