export default {
    items: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'group',
            icon: 'feather icon-monitor',
            children: [
                {
                    id: 'server',
                    title: 'Server',
                    type: 'item',
                    url: '/dashboard/server',
                    icon: 'feather icon-server',
                },
                {
                    id: 'project',
                    title: 'Project',
                    type: 'collapse',
                    icon: 'feather icon-gitlab',
                    children: [
                        {
                            id: 'statistics',
                            title: 'Statistics',
                            type: 'item',
                            url: '/dashboard/project/statistics'
                        },
                        {
                            id: 'details',
                            title: 'Details',
                            type: 'item',
                            url: '/dashboard/project/details'
                        },
                        {
                            id: 'task-manager',
                            title: 'Task Manager',
                            type: 'item',
                            url: '/dashboard/project/task-manager'
                        },
                        {
                            id: 'members',
                            title: 'Members',
                            type: 'item',
                            url: '/dashboard/project/members'
                        }
                    ]
                },
                {
                    id: 'shop',
                    title: 'Shop',
                    type: 'item',
                    url: '/dashboard/shop',
                    icon: 'feather icon-shopping-cart',
                },
                {
                    id: 'analytics',
                    title: 'Analytics',
                    type: 'item',
                    url: '/dashboard/analytics',
                    icon: 'feather icon-activity'
                }
            ]
        },
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'layout',
                    title: 'Page Layouts',
                    type: 'collapse',
                    icon: 'feather icon-layout',
                    children: [
                        {
                            id: 'vertical',
                            title: 'Vertical',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'v-static',
                                    title: 'Static',
                                    type: 'item',
                                    url: '/layout/static',
                                    target: true,
                                },
                                {
                                    id: 'v-fixed',
                                    title: 'Fixed',
                                    type: 'item',
                                    url: '/layout/fixed',
                                    target: true,
                                },
                                {
                                    id: 'v-nav-fixed',
                                    title: 'Navbar Fixed',
                                    type: 'item',
                                    url: '/layout/nav-fixed',
                                    target: true,
                                },
                                {
                                    id: 'v-collapse-menu',
                                    title: 'Collapse Menu',
                                    type: 'item',
                                    url: '/layout/collapse-menu',
                                    target: true,
                                },
                                {
                                    id: 'dark-layout',
                                    title: 'Dark Menu',
                                    type: 'item',
                                    url: '/layout/dark',
                                    target: true,
                                    badge: {
                                        title: 'Hot',
                                        type: 'badge-danger'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'horizontal',
                            title: 'Horizontal',
                            type: 'item',
                            url: '/layout/horizontal',
                            target: true
                        }
                    ]
                },
                {
                    id: 'widget',
                    title: 'Widget',
                    type: 'collapse',
                    icon: 'feather icon-layers',
                    badge: {
                        title: '100+',
                        type: 'badge-success'
                    },
                    children: [
                        {
                            id: 'wdgt-statistic',
                            title: 'Statistic',
                            type: 'item',
                            url: '/widget/wdgt-statistic'
                        },
                        {
                            id: 'wdgt-data',
                            title: 'Data',
                            type: 'item',
                            url: '/widget/wdgt-data'
                        },
                        {
                            id: 'wdgt-chart',
                            title: 'Chart',
                            type: 'item',
                            url: '/widget/wdgt-chart'
                        }
                    ]
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    badge: {
                        title: 'New',
                        type: 'badge-warning'
                    },
                    children: [
                        {
                            id: 'user-profile',
                            title: 'Profile',
                            type: 'item',
                            url: '/users/user-profile',
                            breadcrumbs: false
                        },
                        {
                            id: 'user-cards',
                            title: 'User Card',
                            type: 'item',
                            url: '/users/user-cards'
                        },
                        {
                            id: 'user-list',
                            title: 'User List',
                            type: 'item',
                            url: '/users/user-list'
                        }
                    ]
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'UI ELEMENT',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'Basic',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'alert',
                            title: 'Alert',
                            type: 'item',
                            url: '/basic/alert'
                        },
                        {
                            id: 'button',
                            title: 'Button',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/basic/badges'
                        },
                        {
                            id: 'breadcrumb-pagination',
                            title: 'Breadcrumb & Pagination',
                            type: 'item',
                            url: '/basic/breadcrumb-paging'
                        },
                        {
                            id: 'cards',
                            title: 'Cards',
                            type: 'item',
                            url: '/basic/cards'
                        },
                        {
                            id: 'collapse',
                            title: 'Collapse',
                            type: 'item',
                            url: '/basic/collapse'
                        },
                        {
                            id: 'carousel',
                            title: 'Carousel',
                            type: 'item',
                            url: '/basic/carousel'
                        },
                        {
                            id: 'grid-system',
                            title: 'Grid System',
                            type: 'item',
                            url: '/basic/grid-system'
                        },
                        {
                            id: 'progress',
                            title: 'Progress',
                            type: 'item',
                            url: '/basic/progress'
                        },
                        {
                            id: 'modal',
                            title: 'Modal',
                            type: 'item',
                            url: '/basic/modal'
                        },
                        {
                            id: 'spinner',
                            title: 'Spinner',
                            type: 'item',
                            url: '/basic/spinner',
                            badge: {
                                title: 'New',
                                type: 'badge-danger'
                            },
                        },
                        {
                            id: 'tabs-pills',
                            title: 'Tabs & Pills',
                            type: 'item',
                            url: '/basic/tabs-pills'
                        },
                        {
                            id: 'typography',
                            title: 'Typography',
                            type: 'item',
                            url: '/basic/typography'
                        },
                        {
                            id: 'tooltip-popovers',
                            title: 'Tooltip & Popovers',
                            type: 'item',
                            url: '/basic/tooltip-popovers'
                        },
                        {
                            id: 'other',
                            title: 'Other',
                            type: 'item',
                            url: '/basic/other'
                        }
                    ]
                },
                {
                    id: 'advance',
                    title: 'Advance',
                    type: 'collapse',
                    icon: 'feather icon-gitlab',
                    children: [
                        {
                            id: 'sweet-alert',
                            title: 'Sweet Alert',
                            type: 'item',
                            url: '/advance/alert'
                        },
                        {
                            id: 'datepicker',
                            title: 'Datepicker',
                            type: 'item',
                            url: '/advance/datepicker'
                        },/*
                        {
                            id: 'task-board',
                            title: 'Task Board',
                            type: 'item',
                            url: '/advance/task-board'
                        },*/
                        {
                            id: 'light-box',
                            title: 'Light Box',
                            type: 'item',
                            url: '/advance/light-box'
                        },
                        {
                            id: 'adv-modal',
                            title: 'Modal',
                            type: 'item',
                            url: '/advance/modal'
                        },
                        {
                            id: 'notification',
                            title: 'Notification',
                            type: 'item',
                            url: '/advance/notification'
                        },
                        {
                          id: 'nestable',
                          title: 'Nestable',
                          type: 'item',
                          url: '/advance/nestable'
                        },
                        {
                          id: 'p-notify',
                          title: 'P-Notify',
                          type: 'item',
                          url: '/advance/p-notify'
                        },
                        {
                            id: 'rating',
                            title: 'Rating',
                            type: 'item',
                            url: '/advance/rating'
                        },
                        {
                          id: 'range-slider',
                          title: 'Range Slider',
                          type: 'item',
                          url: '/advance/range-slider'
                        },
                        {
                          id: 'slider',
                          title: 'Slider',
                          type: 'item',
                          url: '/advance/slider'
                        },
                        {
                          id: 'syntax highlighter',
                          title: 'Syntax Highlighter',
                          type: 'item',
                          url: '/advance/syntax-highlighter'
                        },
                        {
                          id: 'tour',
                          title: 'Tour',
                          type: 'item',
                          url: '/advance/tour'
                        },
                        {
                          id: 'tree-view',
                          title: 'Tree View',
                          type: 'item',
                          url: '/advance/tree-view'
                        }
                    ]
                },
                /*{
                  id: 'extra',
                  title: 'Extra',
                  type: 'collapse',
                  icon: 'feather icon-package',
                  children: [
                    {
                      id: 'session-timeout',
                      title: 'Session Timeout',
                      type: 'item',
                      url: '/extra/session-timeout'
                    },
                    {
                      id: 'session-idle-timeout',
                      title: 'Session Idle Timeout',
                      type: 'item',
                      url: '/extra/session-idle-timeout'
                    },
                    {
                      id: 'offline',
                      title: 'Offline',
                      type: 'item',
                      url: '/extra/offline'
                    }
                  ]
                },*/
                /*{
                  id: 'animations',
                  title: 'Animations',
                  type: 'item',
                  icon: 'feather icon-aperture',
                  url: '/animations',
                  classes: 'nav-item'
                },*/
                /*{
                  id: 'icons',
                  title: 'Icons',
                  type: 'collapse',
                  icon: 'feather icon-feather',
                  children: [
                    {
                      id: 'feather',
                      title: 'Feather',
                      type: 'item',
                      url: '/icons/feather',
                      badge: {
                        title: 'NEW',
                        type: 'badge-danger'
                      }
                    },
                    {
                      id: 'font-awesome-5',
                      title: 'Font-Awesome 5',
                      type: 'item',
                      url: '/icons/font-awesome-5',
                      badge: {
                        title: '1000+',
                        type: 'badge-primary'
                      }
                    },
                    {
                      id: 'flag',
                      title: 'Flag',
                      type: 'item',
                      url: '/icons/flag'
                    },
                    {
                      id: 'material',
                      title: 'Material',
                      type: 'item',
                      url: '/icons/material'
                    },
                    {
                      id: 'simple-line',
                      title: 'Simple Line',
                      type: 'item',
                      url: '/icons/simple-line'
                    },
                    {
                      id: 'themify',
                      title: 'Themify',
                      type: 'item',
                      url: '/icons/themify'
                    }
                  ]
                }*/
            ]
        },
        {
            id: 'ui-forms',
            title: 'Forms',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'forms',
                    title: 'Forms',
                    type: 'collapse',
                    icon: 'feather icon-file-text',
                    children: [
                        {
                            id: 'form-basic',
                            title: 'Form Elements',
                            type: 'item',
                            url: '/forms/form-basic'
                        },
                        {
                            id: 'form-advance',
                            title: 'Form Advance',
                            type: 'item',
                            url: '/forms/form-advance'
                        },
                        {
                            id: 'form-validation',
                            title: 'Form Validation',
                            type: 'item',
                            url: '/forms/form-validation'
                        },
                        {
                            id: 'form-masking',
                            title: 'Form Masking',
                            type: 'item',
                            url: '/forms/form-masking'
                        },
                        {
                            id: 'form-wizard',
                            title: 'Form Wizard',
                            type: 'item',
                            url: '/forms/form-wizard'
                        },
                        {
                            id: 'form-picker',
                            title: 'Form Picker',
                            type: 'item',
                            url: '/forms/form-picker'
                        },
                        {
                            id: 'form-select',
                            title: 'Form Select',
                            type: 'item',
                            url: '/forms/form-select'
                        }
                    ]
                }
            ]
        },
        {
            id: 'table',
            title: 'Table',
            type: 'group',
            icon: 'icon-table',
            children: [
                {
                    id: 'tables',
                    title: 'Table',
                    type: 'collapse',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'bootstrap',
                            title: 'Bootstrap Table',
                            type: 'item',
                            url: '/tables/bootstrap'
                        },
                        {
                            id: 'data-table',
                            title: 'Data Tables',
                            type: 'item',
                            url: '/tables/datatable'
                        }
                    ]
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'Chart & Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Charts',
                    type: 'collapse',
                    icon: 'feather icon-pie-chart',
                    children: [
                        {
                          id: 'apex-chart',
                          title: 'Apex Chart',
                          type: 'item',
                          url: '/charts/apex-chart'
                        },
                        {
                            id: 'chart-js',
                            title: 'Chart JS',
                            type: 'item',
                            url: '/charts/chart-js'
                        },
                        {
                            id: 'high-chart',
                            title: 'High Chart',
                            type: 'item',
                            url: '/charts/high-chart'
                        },
                        {
                            id: 're-chart',
                            title: 'Re-Chart',
                            type: 'item',
                            url: '/charts/re-chart'
                        },
                        {
                            id: 'peity',
                            title: 'Peity',
                            type: 'item',
                            url: '/charts/peity'
                        }
                    ]
                },
                {
                    id: 'maps',
                    title: 'Maps',
                    type: 'collapse',
                    icon: 'feather icon-map',
                    children: [
                        {
                            id: 'google',
                            title: 'Google',
                            type: 'item',
                            url: '/maps/google-map'
                        },
                        {
                          id: 'vector',
                          title: 'Vector',
                          type: 'item',
                          url: '/maps/vector'
                        }
                    ]
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-1',
                            title: 'Reset Password',
                            type: 'item',
                            url: '/auth/reset-password-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'change-password',
                            title: 'Change Password',
                            type: 'item',
                            url: '/auth/change-password',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'tabs-auth',
                            title: 'Tabs Authentication',
                            type: 'item',
                            url: '/auth/tabs-auth',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'maintenance',
                    title: 'Maintenance',
                    type: 'collapse',
                    icon: 'feather icon-sliders',
                    children: [
                        {
                            id: 'error-403',
                            title: 'Error 403',
                            type: 'item',
                            url: '/maintenance/error-403',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'error-404',
                            title: 'Error 404',
                            type: 'item',
                            url: '/maintenance/error-404',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'error-405',
                            title: 'Error 405',
                            type: 'item',
                            url: '/maintenance/error-405',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'error-500',
                            title: 'Error 500',
                            type: 'item',
                            url: '/maintenance/error-500',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'offline-ui',
                            title: 'Offline UI',
                            type: 'item',
                            url: '/maintenance/offline-ui',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'app',
            title: 'App',
            type: 'group',
            icon: 'icon-app',
            children: [
                {
                    id: 'task',
                    title: 'Task',
                    type: 'collapse',
                    icon: 'feather icon-clipboard',
                    children: [
                        {
                            id: 'task-list',
                            title: 'Task List',
                            type: 'item',
                            url: '/task/task-list'
                        },
                        {
                            id: 'task-board',
                            title: 'Task Board',
                            type: 'item',
                            url: '/task/task-board'
                        },
                        {
                            id: 'task-detail',
                            title: 'Task Detail',
                            type: 'item',
                            url: '/task/task-detail'
                        }
                    ]
                },
                {
                    id: 'to-dos',
                    title: 'Todo',
                    type: 'collapse',
                    icon: 'feather icon-check-square',
                    children: [
                        {
                            id: 'todo',
                            title: 'Todo',
                            type: 'item',
                            url: '/todo/todo-basic'
                        },
                        {
                          id: 'notes',
                          title: 'Notes',
                          type: 'item',
                          url: '/todo/todo-notes'
                        }
                    ]
                },
                {
                    id: 'gallery',
                    title: 'Gallery',
                    type: 'collapse',
                    icon: 'feather icon-image',
                    children: [
                        {
                            id: 'grid',
                            title: 'Grid',
                            type: 'item',
                            url: '/gallery/gallery-grid'
                        },
                        {
                            id: 'masonry',
                            title: 'Masonry',
                            type: 'item',
                            url: '/gallery/gallery-masonry'
                        }
                    ]
                }
            ]
        },
        {
            id: 'extension',
            title: 'Extension',
            type: 'group',
            icon: 'icon-extension',
            children: [
                {
                    id: 'editor',
                    title: 'Editor',
                    type: 'collapse',
                    icon: 'feather icon-file-plus',
                    children: [
                        {
                          id: 'ck-editor',
                          title: 'CK-Editor',
                          type: 'collapse',
                          children: [
                            {
                              id: 'ck-classic',
                              title: 'Classic Editor',
                              type: 'item',
                              url: '/editor/ck-editor/ck-classic'
                            },
                            {
                              id: 'ck-balloon',
                              title: 'Balloon Editor',
                              type: 'item',
                              url: '/editor/ck-editor/ck-balloon'
                            },
                            {
                              id: 'ck-inline',
                              title: 'Inline Editor',
                              type: 'item',
                              url: '/editor/ck-editor/ck-inline'
                            },
                            {
                              id: 'ck-document',
                              title: 'Document Editor',
                              type: 'item',
                              url: '/editor/ck-editor/ck-document'
                            }
                          ]
                        },
                        {
                            id: 'rich-editor',
                            title: 'Rich Editor',
                            type: 'item',
                            url: '/editor/rich-editor'
                        },
                        {
                            id: 'jodit-wysiwyg',
                            title: 'Jodit WYSIWYG',
                            type: 'item',
                            url: '/editor/jodit-wysiwyg'
                        }
                    ]
                },
                {
                    id: 'invoice',
                    title: 'Invoice',
                    type: 'collapse',
                    icon: 'feather icon-file-minus',
                    children: [
                        {
                            id: 'invoice-basic',
                            title: 'Invoice Basic',
                            type: 'item',
                            url: '/invoice/invoice-basic'
                        },
                        {
                            id: 'invoice-summary',
                            title: 'Invoice Summary',
                            type: 'item',
                            url: '/invoice/invoice-summary'
                        },
                        {
                            id: 'invoice-list',
                            title: 'Invoice List',
                            type: 'item',
                            url: '/invoice/invoice-list'
                        }
                    ]
                },
                {
                    id: 'full-calendar',
                    title: 'Full Calendar',
                    type: 'item',
                    url: '/full-calendar',
                    classes: 'nav-item',
                    icon: 'feather icon-calendar'
                },
                {
                    id: 'file-upload',
                    title: 'File Upload',
                    type: 'item',
                    url: '/file-upload',
                    classes: 'nav-item',
                    icon: 'feather icon-upload-cloud'
                },
                {
                    id: 'image-cropper',
                    title: 'Image Cropper',
                    type: 'item',
                    url: '/image-cropper',
                    classes: 'nav-item',
                    icon: 'feather icon-image'
                }
            ]
        },
        {
            id: 'support',
            title: 'Support',
            type: 'group',
            icon: 'icon-support',
            children: [
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                },
                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                }
            ]
        }
    ]
}