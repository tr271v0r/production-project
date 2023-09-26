import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
           isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            //"css-loader",
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        //Если не включает .module, то обрабатывается как обычный css файл
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        //Настройка конечных имен файлов стилей: в dev не будет хешироваться
                        localIdentName: isDev 
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    //Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    
    return [
       typescriptLoader,
       cssLoaders
    ]
}