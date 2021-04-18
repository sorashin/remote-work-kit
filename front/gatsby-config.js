module.exports = {
    siteMetadata: {
        title: `LODGE Remote Work Kit`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `product`,
                path: `${__dirname}/content/product`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}