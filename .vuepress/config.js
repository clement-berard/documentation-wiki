const BACK_TO_HOME_TEXT = 'Home';
const plugins = require('./config/plugins');
const markdown = require('./config/markdown');

module.exports = {
    title: 'Doc. BERARD',
    serviceWorker: true,
    markdown,
    plugins,
    themeConfig: {
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
        sidebar: [
            {
                title: 'Development',
                collapsable: false,
                children: [
                    ['it/git/', 'Git'],
                    ['it/dbs/', 'Databases'],
                    ['it/nodejs/tools', 'NodeJs']
                ]
            },
            {
                title: 'SysAdmin',
                collapsable: false,
                children: [
                    ['it/sysadmin/server', 'Server'],
                ]
            },
            {
                title: 'Domotique',
                collapsable: false,
                children: [
                    ['/domotique/', 'Domotique'],
                ]
            },
            {
                title: 'Mobile',
                collapsable: false,
                children: [
                    ['it/dev/mobile/pwa', 'PWA'],
                    ['it/dev/mobile/styleguide', 'Styleguide']
                ]
            },
            {
                title: 'Resources',
                collapsable: false,
                children: [
                    ['it/resources/web-resources.md', 'Statics Websites'],
                    ['it/resources/site-template', 'Templating']
                ]
            },
            {
                title: 'Tools',
                collapsable: false,
                children: [
                    ['it/tools/tools-main.md', 'All tools']
                ]
            },
        ]
    }
}
