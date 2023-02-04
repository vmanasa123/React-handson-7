import { Outlet, Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link> </li>
          <li><Link to="/">Student</Link> </li>
          <li> <Link to="/Contact">Contact Us</Link></li>
        </ul>
      </nav>

      <Outlet/>
    </div>
  );
};

export default NavigationLinks