import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Layuots.scss'

export default function Layouts() {
  return (
    <div>
      <Navbar />
      <Outlet />

      <footer>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis consectetur voluptatem maiores sunt necessitatibus? Eum, doloremque voluptas. Omnis aspernatur at optio quo fuga, repudiandae porro? Quasi quaerat molestias quo. Laudantium?</p>
      </footer>
    </div>
  )
}
