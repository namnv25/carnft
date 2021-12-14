export default [
  {
    path: '/',
    component: '@/layouts/MainLayout',
    title: 'index.title',

    routes: [
      // MyAccount Layout
      {
        path: '/account/inventory/:id',
        component: '@/pages/Account/Inventory/InventoryDetail',
        title: 'menu.inventory-detail',
      },
      {
        path: '/account/deposit',
        component: '@/pages/Account/Wallets/Transfer',
        title: 'account.wallets.wallet.deposit',
      },
      {
        path: '/account/withdraw',
        component: '@/pages/Account/Wallets/Transfer',
        title: 'account.wallets.wallet.withdraw',
      },
      {
        path: '/account',
        component: '@/layouts/MainLayout/MyAccountSider',
        title: 'menu.account',
        routes: [
          {
            path: '/account',
            component: '@/pages/Account/Wallets',
            title: 'menu.account',
          },
          {
            path: '/account/activity',
            component: '@/pages/Account/Activity',
            title: 'menu.activity',
          },
          {
            path: '/account/referrals',
            component: '@/pages/Account/Referrals',
            title: 'menu.referrals',
          },
          {
            path: '/account/inventory',
            component: '@/pages/Account/Inventory',
            title: 'menu.inventory',
          },
        ],
      },
      // No Sider LayOut
      {
        path: '/mystery-package/:id',
        component: '@/pages/Market/MysteryPackage/MysteryPackageDetail',
        title: 'menu.inventory-detail',
      },
      {
        path: '/marketplace/:id',
        component: '@/pages/Market/MarketPlace/MarketPlaceDetail',
        title: 'menu.inventory-detail',
      },
      // Sider Layout
      {
        path: '/',
        component: '@/layouts/MainLayout/SiderLayout',
        title: 'index.title',
        routes: [
          {
            path: '/',
            component: '@/pages/Market/Dashboard',
            title: 'menu.dashboard',
          },
          {
            path: '/marketplace',
            component: '@/pages/Market/Marketplace',
            title: 'menu.marketplace',
          },
          {
            path: '/mystery-package',
            component: '@/pages/Market/MysteryPackage',
            title: 'menu.mystery-package',
          },
          {
            path: '/ranks',
            component: '@/pages/Market/Ranks',
            title: 'menu.ranks',
          },
        ],
      },

      // {
      //   path: '/',
      //   component: '@/layouts/MainLayout/SiderLayout',
      //   title: 'index.title',
      //   routes: [
      //     {
      //       path: '/',
      //       component: '@/pages/Market/Dashboard',
      //       title: 'menu.dashboard',
      //     },
      //     {
      //       path: '/marketplace',
      //       component: '@/pages/Market/Marketplace',
      //       title: 'menu.marketplace',
      //     },
      //     {
      //       path: '/ranks',
      //       component: '@/pages/Market/Ranks',
      //       title: 'menu.ranks',
      //     },
      //     {
      //       path: '/mystery-package',
      //       component: '@/pages/Market/MysteryPackage',
      //       title: 'menu.mystery-package',
      //     },
      //   ],
      // },
      // {
      //   path: '/',
      //   component: '@/layouts/MainLayout/SiderLayout',
      //   title: 'index.title',
      //   routes: [
      //     {
      //       path: '/',
      //       component: '@/pages/Market/Dashboard',
      //       title: 'menu.dashboard',
      //     },
      //     {
      //       path: '/marketplace',
      //       component: '@/pages/Market/Marketplace',
      //       title: 'menu.marketplace',
      //     },
      //     {
      //       path: '/ranks',
      //       component: '@/pages/Market/Ranks',
      //       title: 'menu.ranks',
      //     },
      //     {
      //       path: '/mystery-package',
      //       component: '@/pages/Market/MysteryPackage',
      //       title: 'menu.mystery-package',
      //     },
      //     {
      //       path: '/mystery-package/:id',
      //       component: '@/pages/Market/MysteryPackage/MysteryPackageDetail',
      //       title: 'menu.mystery-package-detail',
      //     },
      //   ],
      // },

      // {
      //   path: '/mystery_package',
      //   component: '@/pages/Market/MysteryPackage',
      //   title: 'index.title',
      // },
      // {
      //   path: '/profile/:id',
      //   component: '@/pages/Market/Profile',
      //   title: 'index.title',
      // },
      // {
      //   path: '/ranks',
      //   component: '@/pages/Market/Profile',
      //   title: 'index.title',
      // },
      // {
      //   path: '/account',
      //   component: '@/layouts/MyAccountSider',
      //   routes: [
      //     {
      //       path: '/',
      //       component: '@/pages/Account/Wallet',
      //       title: 'index.title',
      //     },
      //     {
      //       path: '/activity',
      //       component: '@/pages/Account/Activity',
      //       title: 'index.title',
      //     },
      //     {
      //       path: '/referrals',
      //       component: '@/pages/Account/Refferals',
      //       title: 'index.title',
      //     },
      //     {
      //       path: '/inventory',
      //       component: '@/pages/Account/Inventory',
      //       title: 'index.title',
      //     },
      //   ],
      // },
    ],
  },
];
