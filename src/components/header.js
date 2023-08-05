import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-200 px-10 py-1">
      <nav>
        <ul className="flex gap-x-10 text-white text-lg">
          <li className="hover:text-yellow-300">
            <NavLink to="/">Home</NavLink>
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
