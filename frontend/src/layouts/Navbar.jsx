import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => Boolean(localStorage.getItem("access_token"))
  );

  useEffect(() => {
    const syncAuth = () => {
      setIsAuthenticated(
        Boolean(localStorage.getItem("access_token"))
      );
    };

    window.addEventListener("storage", syncAuth);
    window.addEventListener("authChanged", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("authChanged", syncAuth);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  return (
    <nav className="navi">
      <span className="Arua">
        <NavLink to="/">Venda-Farmers' Market</NavLink>
      </span>

      <ul className="list">
        {isAuthenticated ? (
          <>
            <li className="logi">
              <Button onClick={logout}>Logout</Button>
            </li>

            <li className="Reg">
              <Button onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
            </li>
          </>
        ) : (
          <>
            <li >
              <Button onClick={() => navigate("/login")} className="logi">
                Login
              </Button>
            </li>

            <li >
              <Button onClick={() => navigate("/register")}className="Regi">
                Register
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;