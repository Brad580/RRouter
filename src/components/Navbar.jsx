import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      {/* Add additional links if needed */}
    </div>
  );
}

export default Navbar;
