import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20 pointer-events-none" />

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[10vw] tracking-[-0.05em] font-display text-foreground mb-8"
          >
            ETYW
          </motion.h1>

          {/* Manifesto line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-light text-foreground/90 mb-6 leading-relaxed"
          >
            Where knowledge becomes cinema
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A creative entity born from the belief that every story deserves
            to be told with intention, craft, and cinematic vision
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"
          />
        </motion.div>

        {/* Year marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-8 text-xs tracking-widest text-muted-foreground pointer-events-none"
        >
          EST. 2019
        </motion.div>
      </main>
    </PageTransition>
  );
};

export default Index;
