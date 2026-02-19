import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block"
          >
            Lost Frame
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-[20vw] md:text-[15vw] text-foreground/10 leading-none mb-8"
          >
            404
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-body-cinema text-lg text-muted-foreground mb-12"
          >
            This scene doesn't exist in our archive.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 text-sm tracking-[0.2em] uppercase text-foreground border border-border hover:border-primary transition-all duration-500"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
