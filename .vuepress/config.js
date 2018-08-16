module.exports = {
    title: 'Clément BERARD - Doc&Tips',
    themeConfig: {
        // displayAllHeaders: true, // Default: false
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Source Code', link: 'https://github.com/clement-berard/documentation-wiki'},
            {text: 'MyWebsite', link: 'https://clementberard.com'},
            {text: 'Github', link: 'https://github.com/clement-berard'},
            {text: 'NPM', link: 'https://www.npmjs.com/~clement-berard'},
            {text: 'Docker', link: 'https://hub.docker.com/u/keload/'},
            {text: 'LinkedIn', link: 'https://www.linkedin.com/in/cl%C3%A9ment-berard/'},
        ],
        sidebarDepth: 0,
        sidebar: {
            '/it/': [
                ['/', '< Back to Home'],
                {
                    title: 'Dev',
                    collapsable: false,
                    children: [
                        ['git/', 'Git'],
                        ['dbs/', 'Databases'],
                    ]
                },
                {
                    title: 'NodeJs',
                    collapsable: false,
                    children: [
                        ['nodejs/tools', 'Tools']
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
                ['/', '< Back to Home'],

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
            ]
        }
    }
}
