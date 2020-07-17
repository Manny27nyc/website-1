const {backToHome} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel', 'spacerMD'],
      icon: 'img/node-operators.svg',
      iconDark: 'img/node-operators-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
    },
    id: 'node/overview',
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex', 'normalWeight'],
    },
    href: '/docs/node/overview',
    label: 'Overview',
    type: 'link',
  },
];

module.exports = Sidebar;