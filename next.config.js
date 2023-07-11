/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config, { defaultLoaders }) => {
        // config.module.rules.push({
        //     test: /tailwind-pages\.css$/i,
        //     use: ['style-loader', 'css-loader', 'postcss-loader'],
        // });

        return config;
    },

}

module.exports = nextConfig
