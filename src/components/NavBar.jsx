import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import supabase from "../helper/supabaseClient";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`nav-bar ${showNavbar ? "show" : "hide"}`}>
      <div className="navbar-container">
        <div className="left-side">
          <Link to="/" id="navbar-logo">
            <FontAwesomeIcon icon={faGem} beat style={{ color: "#ee046d" }} />
            NEXT
          </Link>
        </div>

        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`right-side ${mobileOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li className="navbar_item">
              <Link to="/" className="navbar_links">
                Home
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/tech" className="navbar_links">
                Tech
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/products" className="navbar_links">
                Products
              </Link>
            </li>
            <li className="navbar_item navbar_btn">
              {user ? (
                <Link to="/profile" className="button">
                  <FontAwesomeIcon
                    className="w-[30px] h-[30px]"
                    icon={faCircleUser}
                  />
                </Link>
              ) : (
                <Link to="/signup" className="button">
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
