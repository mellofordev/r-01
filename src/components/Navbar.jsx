import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <header>
        <Link to={'/'}>
          <button>home</button>
          </Link>
          <Link to={'/about'}>
          <button>about</button>
          </Link>
          <Link to={'/profile'}>
          <button>profile</button>
          </Link>
        </header>
    );
}
export default Navbar;