import { NavLink as Link, Outlet } from "react-router-dom";

const Container = () => {
  return (
    <main>
      <ul>
        <li>
          <Link
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/"
          >
            Counter
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="page2"
          >
            Page 2
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="error"
          >
            Error
          </Link>
        </li>

        <li>
          <Link
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="not-found"
          >
            Not Found
          </Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Container;
