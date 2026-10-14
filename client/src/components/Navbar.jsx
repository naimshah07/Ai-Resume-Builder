import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <div className="bg-white border-b border-luxury-200/50 shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-ink-800 transition-all">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">Hi, {user?.name}</p>
          <button
            onClick={logoutUser}
            className="btn-luxury-ghost"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
