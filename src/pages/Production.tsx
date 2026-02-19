 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import PageTransition from '@/components/PageTransition';
 import ScrollReveal from '@/components/ScrollReveal';
 import { films, Film, getFilmsByStatus } from '@/data/films';
 import { X, Play, Film as FilmIcon, Clapperboard, Clock, Star } from 'lucide-react';
 
 const statusConfig = {
  'pre-production': { label: 'Pre-Production', icon: Clock, color: 'text-accent' },
   'production': { label: 'In Production', icon: Clapperboard, color: 'text-primary' },
  'completed': { label: 'Completed', icon: Star, color: 'text-primary' },
   'future': { label: 'Future Project', icon: FilmIcon, color: 'text-muted-foreground' },
 };
 
 const FilmCard = ({ film, onClick }: { film: Film; onClick: () => void }) => {
   const status = statusConfig[film.status];
   const StatusIcon = status.icon;
   
   return (
     <motion.div
       layoutId={`film-${film.id}`}
       onClick={onClick}
       className="card-cinematic overflow-hidden cursor-pointer group"
     >
       <div className="aspect-[16/9] relative overflow-hidden">
         <img
           src={film.thumbnail}
           alt={film.title}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
         
         {/* Status Badge */}
         <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-sm">
           <StatusIcon className={`w-4 h-4 ${status.color}`} />
           <span className="text-xs tracking-wider uppercase">{status.label}</span>
         </div>
         
         {film.youtubeId && (
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
               <Play className="w-6 h-6 text-primary-foreground ml-1" />
             </div>
           </div>
         )}
         
         <div className="absolute bottom-0 left-0 right-0 p-6">
           <h3 className="text-display text-xl md:text-2xl text-foreground mb-2">
             {film.title}
           </h3>
           <p className="text-sm text-muted-foreground line-clamp-2">
             {film.description}
           </p>
           {film.competition && (
             <span className="inline-block mt-3 text-xs tracking-wider text-primary">
               {film.competition}
             </span>
           )}
         </div>
       </div>
     </motion.div>
   );
 };
 
 const FilmModal = ({ film, onClose }: { film: Film; onClose: () => void }) => (
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
     onClick={onClose}
   >
     <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
     
     <motion.div
       layoutId={`film-${film.id}`}
       onClick={(e) => e.stopPropagation()}
       className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-sm"
     >
       <button
         onClick={onClose}
         className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
       >
         <X className="w-6 h-6" />
       </button>
       
       {/* Hero */}
       <div className="aspect-video relative">
         {film.youtubeId ? (
           <iframe
             src={`https://www.youtube.com/embed/${film.youtubeId}`}
             className="w-full h-full"
             allowFullScreen
           />
         ) : (
           <img
             src={film.images[0] || film.thumbnail}
             alt={film.title}
             className="w-full h-full object-cover"
           />
         )}
       </div>
       
       <div className="p-8 md:p-12">
         <div className="flex items-center gap-4 mb-4">
           {(() => {
             const status = statusConfig[film.status];
             const StatusIcon = status.icon;
             return (
               <span className={`flex items-center gap-2 text-sm ${status.color}`}>
                 <StatusIcon className="w-4 h-4" />
                 {status.label}
               </span>
             );
           })()}
           {film.competition && (
             <span className="text-sm text-primary">{film.competition}</span>
           )}
         </div>
         
         <h2 className="text-display text-3xl md:text-4xl mb-6">{film.title}</h2>
         
         <p className="text-body-cinema text-lg text-foreground/80 mb-8">
           {film.fullDescription}
         </p>
         
         {/* Concept */}
         <div className="mb-12 p-8 bg-secondary/30 border-l-2 border-primary">
           <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
             Concept
           </h3>
           <p className="text-editorial text-lg text-foreground/90">
             {film.concept}
           </p>
         </div>
         
         {/* Team */}
         {film.team.length > 0 && (
           <div className="mb-12">
             <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
               Team
             </h3>
             <div className="flex flex-wrap gap-4">
               {film.team.map((member, index) => (
                 <div
                   key={index}
                   className="flex items-center gap-3 px-4 py-2 bg-secondary/50"
                 >
                   <span className="text-foreground">{member.name}</span>
                   <span className="text-muted-foreground text-sm">— {member.role}</span>
                 </div>
               ))}
             </div>
           </div>
         )}
         
         {/* Gallery */}
         {film.images.length > 1 && (
           <div>
             <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
               Stills
             </h3>
             <div className="grid grid-cols-2 gap-4">
               {film.images.slice(1).map((img, index) => (
                 <img
                   key={index}
                   src={img}
                   alt={`${film.title} - Still ${index + 1}`}
                   className="w-full aspect-video object-cover"
                 />
               ))}
             </div>
           </div>
         )}
       </div>
     </motion.div>
   </motion.div>
 );
 
 const Production = () => {
   const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
   
   const inProduction = getFilmsByStatus('production');
   const preProduction = getFilmsByStatus('pre-production');
   const futureProjects = getFilmsByStatus('future');
   
   return (
     <PageTransition>
       <div className="min-h-screen">
         {/* Hero Section */}
         <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
           {/* Background gradient */}
           <div 
             className="absolute inset-0 opacity-50"
             style={{
               background: 'radial-gradient(ellipse at 30% 50%, hsl(270 25% 12% / 0.8) 0%, transparent 60%)',
             }}
           />
           
           <div className="relative z-10 text-center max-w-4xl mx-auto">
             <motion.span
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="text-sm tracking-[0.4em] uppercase text-primary mb-8 block"
             >
               The Studio
             </motion.span>
             
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="text-display-large text-5xl md:text-7xl lg:text-8xl mb-8"
             >
               ETYW
               <br />
               <span className="text-primary">PRODUCTION</span>
             </motion.h1>
             
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="text-body-cinema text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
             >
               The formal evolution of ETYW into a production studio.
               Narrative films. Documentaries. Cinematic vision.
             </motion.p>
             
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="mt-16 divider-cinematic mx-auto"
             />
           </div>
         </section>
         
         {/* Production Status Sections */}
         <section className="py-32 px-8">
           <div className="max-w-7xl mx-auto">
             {/* In Production */}
             {inProduction.length > 0 && (
               <div className="mb-24">
                 <ScrollReveal>
                   <div className="flex items-center gap-4 mb-12">
                     <Clapperboard className="w-6 h-6 text-primary" />
                     <h2 className="text-display text-3xl">In Production</h2>
                   </div>
                 </ScrollReveal>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                   {inProduction.map((film, index) => (
                     <ScrollReveal key={film.id} delay={index * 0.1}>
                       <FilmCard film={film} onClick={() => setSelectedFilm(film)} />
                     </ScrollReveal>
                   ))}
                 </div>
               </div>
             )}
             
             {/* Pre-Production */}
             {preProduction.length > 0 && (
               <div className="mb-24">
                 <ScrollReveal>
                   <div className="flex items-center gap-4 mb-12">
                    <Clock className="w-6 h-6 text-accent" />
                     <h2 className="text-display text-3xl">Pre-Production</h2>
                   </div>
                 </ScrollReveal>
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {preProduction.map((film, index) => (
                     <ScrollReveal key={film.id} delay={index * 0.1}>
                       <FilmCard film={film} onClick={() => setSelectedFilm(film)} />
                     </ScrollReveal>
                   ))}
                 </div>
               </div>
             )}
             
             {/* Future Work */}
             {futureProjects.length > 0 && (
               <div className="mb-24">
                 <ScrollReveal>
                   <div className="flex items-center gap-4 mb-12">
                     <FilmIcon className="w-6 h-6 text-muted-foreground" />
                     <h2 className="text-display text-3xl">Future Work</h2>
                   </div>
                 </ScrollReveal>
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {futureProjects.map((film, index) => (
                     <ScrollReveal key={film.id} delay={index * 0.1}>
                       <FilmCard film={film} onClick={() => setSelectedFilm(film)} />
                     </ScrollReveal>
                   ))}
                 </div>
               </div>
             )}
           </div>
         </section>
         
         {/* See Us Panel */}
         <section className="py-32 px-8 bg-secondary/30">
           <div className="max-w-4xl mx-auto text-center">
             <ScrollReveal>
               <span className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block">
                 Future Ambitions
               </span>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
               <h2 className="text-display text-4xl md:text-5xl mb-12">See Us:</h2>
             </ScrollReveal>
             
             <ScrollReveal delay={0.2}>
               <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                 {[
                   'International Film Festivals',
                   'Student Academy Awards',
                   'National Cinema Competitions',
                   'Independent Film Circuits',
                 ].map((item, index) => (
                   <div
                     key={index}
                     className="p-6 border border-border/50 text-muted-foreground text-sm tracking-wider"
                   >
                     {item}
                   </div>
                 ))}
               </div>
             </ScrollReveal>
             
             <ScrollReveal delay={0.4}>
               <p className="text-editorial text-lg text-muted-foreground mt-12 max-w-xl mx-auto">
                 This is where we're headed. The journey from classroom to cinema continues.
               </p>
             </ScrollReveal>
           </div>
         </section>
         
         {/* Footer spacing */}
         <div className="h-32" />
       </div>
       
       {/* Modal */}
       <AnimatePresence>
         {selectedFilm && (
           <FilmModal
             film={selectedFilm}
             onClose={() => setSelectedFilm(null)}
           />
         )}
       </AnimatePresence>
     </PageTransition>
   );
 };
 
 export default Production;