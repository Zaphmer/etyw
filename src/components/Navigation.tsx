import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Manifesto", path: "/manifesto" },
  { label: "Projects", path: "/projects" },
  { label: "Collaborators", path: "/collaborators" },
  { label: "ETYW Production", path: "/production" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[100] w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-secondary/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-px bg-foreground block"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-px bg-foreground block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-px bg-foreground block"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[80] menu-backdrop"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-full md:w-1/2 z-[90] bg-card border-l border-border flex flex-col justify-center px-12 md:px-16"
            >
              <ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-3xl md:text-4xl font-display font-light tracking-tight transition-colors duration-300 ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Footer in menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 left-12 md:left-16"
              >
                <p className="text-sm text-muted-foreground font-body">
                  © {new Date().getFullYear()} ETYW
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;