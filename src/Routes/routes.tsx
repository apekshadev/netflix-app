import Browse from "../pages/Auth/Browse";
import TvShows from "../pages/Auth/TvShows";
import WatchMovie from "../pages/Auth/WatchMovie";
import Login from "../pages/UnAuth/Login";
import Search from "../pages/Auth/Search";

export const routes = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/watch/:id',
        element: <WatchMovie />
    },
    {
        path: '/tv-shows',
        element: <TvShows />
    }
]