import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    'README',
    {
      type: 'category',
      collapsed: false,
      label: 'Register',
      items: [
        'register/check-availability',
        'register/order-domainname',
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Manage',
      items: [
        {
          type: 'category',
          label: '🛠 Manage records',
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
