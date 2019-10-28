module.exports = {
  title: "lhp's notes",
  base: "/notes/",
  themeConfig: {
    sidebar: [{
        title: 'Docker',
        children: [
          '/docker/install',
          '/docker/self-services'
        ]
      },
      {
        title: 'Git',
        children: [
          '/git/git-server',
          'git/tag'
        ]
      },
      {
        title: 'Web 前端',
        children: [
          '/front-end/npm',
          'front-end/layer',
          'front-end/gulp-imagemin.md'
        ]
      },
      {
        title: 'Laravel',
        children: [
          '/laravel/event',
          '/laravel/tinker',
          '/laravel/packages'
        ]
      },
      {
        title: 'Linux',
        children: [
          '/linux/ab',
          '/linux/common-config',
          '/linux/compress',
          '/linux/file-transfer',
          '/linux/gnome-shell',
          '/linux/nodejs-install',
          '/linux/php-install',
          '/linux/ss',
          '/linux/ssh',
          '/linux/supervisor',
          '/linux/ubuntu-setup',
          '/linux/vim'
        ]
      },
      {
        title: 'Other',
        children: [
          '/license/',
          '/restful/introduction'
        ]
      }
    ]
  }
}