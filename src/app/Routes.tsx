import { IAppPath } from './siam.types';
import {Home, Maintenance, Events, Series, Team} from './views';
import RecruitmentResult from './views/RecruitmentResult';

export const AppRoutes:IAppPath[] = [
    {path: '/', component: <Home/> },
    {path: '/events', component: <Events/> },
    {path: '/series', component: <Series/>},
    {path: '/team', component: <Team/>},
    {path: '/results', component: <RecruitmentResult/>}
];

export const MaintenanceRoutes:IAppPath[] = [
    { path: '/', component: <Maintenance/> }
];
