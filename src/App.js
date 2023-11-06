import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Search from "./components/Search";
import CourseListing from "./components/CourseListing";
import CourseDetail from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";

function App() {

   const router = createBrowserRouter([
    {path:"/", element:<Search />, children:[
      {path:"",element:<CourseListing />},
    ]},
    {path:"/courseDetail",children:[
      {path:":id",element:<CourseDetail />}
    ]},
    { path: "/studentDashboard", element: <StudentDashboard /> }
   ])

  return (
    <>
  <RouterProvider router={router} />
    </>
  );
}

export default App;
