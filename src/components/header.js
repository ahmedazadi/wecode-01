import Nav from "./nav";

const Header = (prop) => {
  return (
    <nav className="flex justify-between p-4 font-sans text-lg font-extrabold text-white bg-sky-900">
      {/* application name */}
      <a href="./">
        <h1>React router</h1>
      </a>

      {/* navigation elements */}
      <Nav />
    </nav>
  );
};

export default Header;
