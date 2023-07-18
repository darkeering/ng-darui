/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: "full",
  title: "ng-darui",
  description: "",
  docsDir: "docs",
  siteProjectName: 'site',
  navs: [
    null,
    {
      title: "Components",
      path: "components",
      lib: "ng-darui",
      locales: {},
    },
  ],
  libs: [
    {
      name: "ng-darui",
      abbrName: "dar",
      rootDir: "projects/ng-darui",
      include: [""],
      apiMode: 'automatic',
      categories: [
        {
          id: "general",
          title: "通用",
          locales: {
            "en-us": {
              title: "General",
            },
          },
        },
      ],
    },
  ],
};