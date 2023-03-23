import '../styles/variable.css'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Menu from './navBar'

function Layout () {
  return (
    <div className='App'>
      <Menu />
      <main className='content'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
