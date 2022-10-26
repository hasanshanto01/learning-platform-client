import { createBrowserRouter } from "react-router-dom";
import CourseContainer from "../layouts/CourseContainer";
import Main from '../layouts/Main';
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => {
                    return fetch('https://learning-platform-server-side-delta.vercel.app/courses');
                },
                element: <CourseContainer></CourseContainer>,
                children: [
                    {
                        path: '/courses',
                        loader: () => {
                            return fetch('https://learning-platform-server-side-delta.vercel.app/courses');
                        },
                        element: <Courses></Courses>
                    },
                    {
                        path: '/courses/:id',
                        loader: ({ params }) => {
                            return fetch(`https://learning-platform-server-side-delta.vercel.app/courses/${params.id}`)
                        },
                        element: <CourseDetails></CourseDetails>
                    }
                ]
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])