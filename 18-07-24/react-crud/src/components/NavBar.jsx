import { NavLink } from "react-router-dom";
const menuList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Create", path: "/create" },
  { name: "Contacts", path: "/contacts" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-slate-300">
      <h1 className="font-bold">Sito Bello!</h1>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
