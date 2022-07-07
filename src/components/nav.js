import { Link } from "react-router-dom";

const pages = [
  {
    Text: "Blogs",
    url: "./Blogs",
  },
  {
    Text: "Contact",
    url: "./Contact",
  },
];

const Nav = () => {
  return (
    <ul className="flex font-light">
      {/* <li>
        <a href="../pages/Blogs">{pages[0].Text}</a>
      </li> */}
      {pages.map((Value) => {
        return (
          <li>
            <Link to={Value.url} className=" ml-5">
              {Value.Text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
