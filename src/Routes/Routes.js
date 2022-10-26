import { createBrowserRouter } from "react-router-dom";
import CourseContainer from "../layouts/CourseContainer";
import Main from '../layouts/Main';
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";

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
                    return fetch('http://localhost:5000/courses');
                },
                element: <CourseContainer></CourseContainer>,
                children: [
                    {
                        path: '/courses',
                        loader: () => {
                            return fetch('http://localhost:5000/courses');
                        },
                        element: <Courses></Courses>
                    },
                    {
                        path: '/courses/:id',
                        loader: ({ params }) => {
                            return fetch(`http://localhost:5000/courses/${params.id}`)
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
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])