import Layouts from './components/Layouts/Layouts'
import Home from './pages/Home/Home'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
