import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  console.log(user);
  // const photoURL = user?.photoURL;
  // console.log(photoURL)
  const handleSignOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/user">User Profile</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/update">Update Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar mt-2 bg-base-100">
      <div className="navbar-start z-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* li */}
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost flex items-center text-xl">
          {" "}
          <img
            className="w-7"
            src="https://i.ibb.co/mJ1wHr2/primeplaces.png"
            alt=""
          />{" "}
          <span className="hidden md:flex">Prime Places</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-2 menu-horizontal px-1">
          {/*  */}
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <Link
              to="/user"
              className="tooltip tooltip-left "
              data-tip={user?.displayName}
            >
              <img
                className="w-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/FHfFTWX/User-Profile-PNG-Free-Download.png"
                }
                alt="userPhoto"
              />
            </Link>

            <button onClick={handleSignOut} className="btn font-bold">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
