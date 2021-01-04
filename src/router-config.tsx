import Home from './pages/Home';
import Lists from './pages/Lists';
import Words from './pages/Words';

const routes = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        path: "/lists",
        component: Lists,
    },
    {
        path: "/list/:listName",
        component: Words,
    }
];

export default routes;