// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  UserList,
  Woods,
} from './';

export default {
  path: 'web-kyp',
  name: 'Web kyp',
  childRoutes: [
    { path: 'user-list', name: 'User list', component: UserList, isIndex: true },
    { path: 'woods', name: 'Woods', component: Woods, isIndex: true },
  ],
};
