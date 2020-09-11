// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://www.tangp.top:1337",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["blog", "tag"],
        singleTypes: ["gencer"],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
  ],
  permalinks: {
    trailingSlash: false,
  },
  templates: {
    StrapiBlog: [
      {
        path: "/blog/:id",
        component: "./src/templates/blog.vue",
      },
    ],
    StrapiTag: [
      {
        path: "/tag/:id",
        component: "./src/templates/tag.vue",
      },
    ],
  },
};
