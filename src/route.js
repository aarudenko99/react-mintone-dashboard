import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const ResetPassword1 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword1'));
const ChangePassword = React.lazy(() => import('./Demo/Authentication/ChangePassword'));
const TabsAuth = React.lazy(() => import('./Demo/Authentication/TabsAuth'));
const Error403 = React.lazy(() => import('./Demo/Maintenance/Error403'));
const Error404 = React.lazy(() => import('./Demo/Maintenance/Error404'));
const Error405 = React.lazy(() => import('./Demo/Maintenance/Error405'));
const Error500 = React.lazy(() => import('./Demo/Maintenance/Error500'));
const OfflineUI = React.lazy(() => import('./Demo/Maintenance/OfflineUI'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/reset-password-1', exact: true, name: 'Reset Password 1', component: ResetPassword1 },
    { path: '/auth/change-password', exact: true, name: 'Change Password', component: ChangePassword },
    { path: '/auth/tabs-auth', exact: true, name: 'Tabs Authentication', component: TabsAuth },
    { path: '/maintenance/error-403', exact: true, name: 'Error 403', component: Error403 },
    { path: '/maintenance/error-404', exact: true, name: 'Error 403', component: Error404 },
    { path: '/maintenance/error-405', exact: true, name: 'Error 403', component: Error405 },
    { path: '/maintenance/error-500', exact: true, name: 'Error 403', component: Error500 },
    { path: '/maintenance/offline-ui', exact: true, name: 'Offline UI', component: OfflineUI },
];

export default route;