const BACK_TO_HOME_TEXT = 'Home';

module.exports = {
    title: 'Clément BERARD - Documentation',
    serviceWorker: true,
    themeConfig: {
        repo: "clement-berard/documentation-wiki",
        repoLabel: "Repo",
        lastUpdated: "Last Updated",
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Website', link: 'https://clementberard.com'},
            {text: 'Github', link: 'https://github.com/clement-berard'},
            {text: 'NPM', link: 'https://www.npmjs.com/~clement-berard'},
            {text: 'Docker', link: 'https://hub.docker.com/u/keload/'},
            {text: 'LinkedIn', link: 'https://www.linkedin.com/in/cl%C3%A9ment-berard/'},
        ],
        sidebarDepth: 0,
        sidebar: {
            
            '/it/': [
                ['/', BACK_TO_HOME_TEXT],
                {
                    title: 'Development',
                    collapsable: false,
                    children: [
                        ['git/', 'Git'],
                        ['dbs/', 'Databases'],
                        ['nodejs/tools', 'NodeJs']
                    ]
                },
                {
                    title: 'SysAdmin',
                    collapsable: false,
                    children: [
                        ['sysadmin/ssh', 'SSH'],
                        ['sysadmin/docker', 'Docker'],
                        ['sysadmin/server_web/', 'Web Server'],
                        ['sysadmin/misc', 'Misc'],
                    ]
                },
                {
                    title: 'Mobile',
                    collapsable: false,
                    children: [
                        ['dev/mobile/pwa', 'PWA'],
                        ['dev/mobile/styleguide', 'Styleguide']
                    ]
                },
                {
                    title: 'Resources',
                    collapsable: false,
                    children: [
                        ['resources/web-resources.md', 'Statics Websites'],
                        ['resources/site-template', 'Templating']
                    ]
                },
            ],

            '/domotique/': [
                ['/', BACK_TO_HOME_TEXT],

            ],
            '/': [
                ['/', 'Home'],
                {
                    title: 'Categories',
                    collapsable: false,
                    children: [
                        ['/it/', 'Informatique'],
                        ['/domotique/', 'Domotique'],
                    ]
                }
            ],
        }
    }
}
