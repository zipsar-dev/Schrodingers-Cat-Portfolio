import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "../content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile drawer on navigation
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 shadow-sm shadow-primary/5 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        {/* Wordmark + logo mark */}
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.orgName} — home`}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft p-1.5 shadow-sm shadow-primary/10">
            <img src="/logo-mark.png" alt="" className="h-full w-full object-contain" />
          </span>
          <span className="font-heading text-base font-bold leading-tight text-text">
            <span className="text-primary">S</span>chrödinger&apos;s{" "}
            <span className="text-primary">C</span>at
            <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Think Tank
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.label === "Contact us" ? (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-white shadow-sm shadow-primary/25"
                          : "border border-primary/60 text-primary hover:bg-primary hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `relative block px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-text-muted hover:text-primary"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-[1280px] px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-primary-soft text-primary"
                          : "text-text hover:bg-surface-muted"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
