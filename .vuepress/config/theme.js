const themeConfig = sidebar => ({
    repo: "clement-berard/documentation-wiki",
    repoLabel: "Repo",
    lastUpdated: "Last Updated",
    nav: [
        {text: 'Home', link: '/'},
        {text: 'Website', link: 'https://berard.dev'},
        {text: 'Github', link: 'https://github.com/clement-berard'},
        {text: 'NPM', link: 'https://www.npmjs.com/~clement-berard'},
        {text: 'Docker', link: 'https://hub.docker.com/u/keload/'},
        {text: 'LinkedIn', link: 'https://www.linkedin.com/in/cl%C3%A9ment-berard/'},
    ],
    sidebarDepth: 0,
    sidebar
});

module.exports = {
    themeConfig
};
