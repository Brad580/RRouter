import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      {/* Add additional links if needed */}
    </footer>
  );
}

export default Footer;
