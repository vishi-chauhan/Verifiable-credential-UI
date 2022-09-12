import { Link } from "react-router-dom";
import logo from './header-logo-dark.svg' ;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="img">
        <img alt="logo" src={logo} />
                </div>
      <h1>Universal Verifiable Credentialing System</h1>
      <div className="links">
      <Link to="/" style={{ 
           background: '#FFE600',
           color: '#2E2E38',
          borderRadius: '8px' 
        }}>Download</Link>
        <Link to="/hp" style={{ 
          background: '#FFE600',
          color: '#2E2E38',
         borderRadius: '8px' 
        }}>Health Professional</Link>
        <Link to="/immunization" style={{ 
          background: '#FFE600',
          color: '#2E2E38',
         borderRadius: '8px' 
        }}>Immunzation</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;