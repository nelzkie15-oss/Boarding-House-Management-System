
const Nav = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
            <a
            className="nav-link"
            data-widget="pushmenu"
            href="#"
            role="button"
            >
            <i className="fas fa-bars"></i>
            </a>
        </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a
            className="nav-link"
            data-widget="fullscreen"
            href="/"
            >
            <i className="fas fa-sign-out-alt"></i>
            </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
