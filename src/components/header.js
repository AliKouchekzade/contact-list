import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-200 px-10 py-1 fixed top-0 w-full">
      <nav>
        <ul className="flex gap-x-10 text-white text-lg">
          <li className="hover:text-yellow-300">
            <NavLink
              className={(data) => (data.isActive ? "text-green-600" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-yellow-300">
            <NavLink>Todo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
