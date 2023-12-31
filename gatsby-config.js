/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:'/projects/huddle/',
  siteMetadata: {
    title: `Huddle`,
    description: `Frontend Mentor Huddle challenge solution`,
    image: `/favicon.png`,
    siteUrl: `https://www.brianthomas-develops.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,600`,
          `Open Sans\:400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-sass`
  ],
}
