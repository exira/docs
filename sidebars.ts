import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    'README',
    {
      type: 'category',
      collapsed: false,
      label: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case 'nl':
            return 'Registreren';
          default:
            return 'Register';
        }
      })(),
      items: [
        'register/check-availability',
        'register/order-domainname',
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case 'nl':
            return 'Beheren';
          default:
            return 'Manage';
        }
      })(),
      items: [
        {
          type: 'category',
          label: (() => {
            switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
              case 'nl':
                return '🛠 Records beheren';
              default:
                return '🛠 Manage records';
            }
          })(),
          link: {
            type: 'doc',
            id: 'manage/manage-records',
          },
          items: [
            'manage/records/add-records',
            'manage/records/update-records',
            'manage/records/delete-records',
          ]
        },
        'manage/view-history',
      ],
    },
  ],
};

export default sidebars;
