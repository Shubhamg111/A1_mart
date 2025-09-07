import { createRoot } from 'react-dom/client'
import './assets/style.css'
import Myrouter from './Myrouter'
import Swal from 'sweetalert2'

createRoot(document.getElementById('root')).render(
  <>
    <Myrouter />
  </>,
)
