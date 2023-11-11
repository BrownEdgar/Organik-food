import Layouts from './components/Layouts/Layouts'
import Limon from './pages/Limon-section-features/Limon'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Limon />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
