import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <header>
      <h1>Math Magicians</h1>
      <Navbar />
    </header>
    <Outlet />
  </div>
);

export default Layout;
