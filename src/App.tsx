import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MessageBoard from './MessageBoard'
import AllPosts from './AllPosts'
import PostView from './PostView'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import {Welcome, welcomeLoader} from './Welcome'
import NavBar from './NavBar'
import { SupabaseUserInfo, useSession } from './use-session'
import { createContext } from 'react'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "",
      element: <MessageBoard />,
      children: [
        {
          path: ":pageNumber",
          element: <AllPosts />,
        },
        {
          path: "post/:postId",
          element: <PostView />,
        },
      ],
    },
    {
      path: "welcome",
      element: <Welcome />,
      loader: welcomeLoader,
    },
  ],



  },
])

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router} />;
}

export default App

export const UserContext = createContext<SupabaseUserInfo>({
  session: null,
  profile: null,

})

function Layout() {
  const supabaseUserInfo = useSession();
  return (
  <>
    <UserContext.Provider value={supabaseUserInfo}>
      <NavBar />
      <Outlet />
    </UserContext.Provider>
  </>
  );
}

