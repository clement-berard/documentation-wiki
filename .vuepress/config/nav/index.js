const SysAdminChildren =  [
    {
        title: 'Server',
        collapsable: true,
        sidebarDepth: 0,
        open: false,
        children: [
            {
                title: 'SSH',
                path: 'it/sysadmin/ssh',
            },
            {
                title: 'Docker',
                path: 'it/sysadmin/docker',
            },
            {
                title: 'Linux',
                path: 'it/sysadmin/linux/',
            },
            {
                title: 'Misc',
                path: 'it/sysadmin/misc',
            },
            {
                title: 'Softwares',
                path: 'it/sysadmin/software',
            },
            {
                title: 'Proxmox',
                path: 'it/sysadmin/proxmox/',
            },
        ]
    },
];

module.exports = [
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
        title: 'Sysadmin',
        collapsable: false,
        children: SysAdminChildren
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
        path: 'it/tools/tools-main.md'
    },
]
