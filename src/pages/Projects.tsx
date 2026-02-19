 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import PageTransition from '@/components/PageTransition';
 import ScrollReveal from '@/components/ScrollReveal';
 import { projects, getProjectsByCategory, Project } from '@/data/projects';
 import { X, Play, ExternalLink } from 'lucide-react';
 
 const categories = [
   { id: 'high-school', label: 'High School' },
   { id: 'university', label: 'University' },
   { id: 'research', label: 'Research & Hackathons' },
   { id: 'production', label: 'Movies' },
 ] as const;
 
 const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
   <motion.div
     layoutId={`project-${project.id}`}
     onClick={onClick}
     className="card-cinematic overflow-hidden cursor-pointer group"
   >
     <div className="aspect-[4/3] relative overflow-hidden">
       <img
         src={project.thumbnail}
         alt={project.title}
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
       
       {project.youtubeId && (
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
             <Play className="w-6 h-6 text-primary-foreground ml-1" />
           </div>
         </div>
       )}
       
       <div className="absolute bottom-0 left-0 right-0 p-6">
         <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2 block">
           {project.year}
         </span>
         <h3 className="text-display text-xl md:text-2xl text-foreground mb-2">
           {project.title}
         </h3>
         <p className="text-sm text-muted-foreground line-clamp-2">
           {project.description}
         </p>
         {project.prize && (
           <span className="inline-block mt-3 text-xs tracking-wider text-primary border border-primary/30 px-3 py-1">
             {project.prize}
           </span>
         )}
       </div>
     </div>
   </motion.div>
 );
 
 const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
     onClick={onClose}
   >
     <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
     
     <motion.div
       layoutId={`project-${project.id}`}
       onClick={(e) => e.stopPropagation()}
       className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-sm"
     >
       <button
         onClick={onClose}
         className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
       >
         <X className="w-6 h-6" />
       </button>
       
       {/* Hero Image */}
       <div className="aspect-video relative">
         {project.youtubeId ? (
           <iframe
             src={`https://www.youtube.com/embed/${project.youtubeId}`}
             className="w-full h-full"
             allowFullScreen
           />
         ) : (
           <img
             src={project.images[0] || project.thumbnail}
             alt={project.title}
             className="w-full h-full object-cover"
           />
         )}
       </div>
       
       {/* Content */}
       <div className="p-8 md:p-12">
         <span className="text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
           {project.year} • {project.purpose}
         </span>
         
         <h2 className="text-display text-3xl md:text-4xl mb-6">{project.title}</h2>
         
         {project.prize && (
           <div className="mb-8">
             <span className="inline-block text-sm tracking-wider text-primary border border-primary/30 px-4 py-2">
               🏆 {project.prize}
             </span>
           </div>
         )}
         
         <p className="text-body-cinema text-lg text-foreground/80 mb-12">
           {project.fullDescription}
         </p>
         
        {/* External Project Link */}
{project.projectUrl && (
  <div className="mb-12">
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.15em] uppercase
                 border border-primary text-primary hover:bg-primary hover:text-primary-foreground
                 transition-all duration-300"
    >
      <ExternalLink className="w-4 h-4" />
      View Project
    </a>
  </div>
)}


         {/* Collaborators */}
         <div className="mb-12">
           <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
             Collaborators
           </h3>
           <div className="flex flex-wrap gap-4">
             {project.collaborators.map((collab, index) => (
               <Link
                 key={index}
                 to={`/collaborators`}
                 className="flex items-center gap-3 px-4 py-2 bg-secondary/50 hover:bg-secondary transition-colors"
               >
                 <span className="text-foreground">{collab.name}</span>
                 <span className="text-muted-foreground text-sm">— {collab.role}</span>
               </Link>
             ))}
           </div>
         </div>
         
         {/* Gallery */}
         {project.images.length > 1 && (
           <div>
             <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
               Gallery
             </h3>
             <div className="grid grid-cols-2 gap-4">
               {project.images.slice(1).map((img, index) => (
                 <img
                   key={index}
                   src={img}
                   alt={`${project.title} - Image ${index + 2}`}
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
 
 const Projects = () => {
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [activeCategory, setActiveCategory] = useState<typeof categories[number]['id'] | 'all'>('all');
   
   const filteredProjects = activeCategory === 'all' 
     ? projects 
     : getProjectsByCategory(activeCategory as Project['category']);
   
   return (
     <PageTransition>
       <div className="min-h-screen pt-32 pb-24 px-8">
         <div className="max-w-7xl mx-auto">
           {/* Header */}
           <div className="text-center mb-20">
             <motion.span
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block"
             >
               Archive
             </motion.span>
             
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-display text-4xl md:text-6xl mb-8"
             >
               Projects
             </motion.h1>
             
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-body-cinema text-lg text-muted-foreground max-w-2xl mx-auto"
             >
               From classroom presentations to competition entries. Every project is a journey into understanding
             </motion.p>
           </div>
           
           {/* Category Filter */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap justify-center gap-4 mb-16"
           >
             <button
               onClick={() => setActiveCategory('all')}
               className={`px-6 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 border ${
                 activeCategory === 'all'
                   ? 'border-primary text-primary bg-primary/10'
                   : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
               }`}
             >
               All Projects
             </button>
             {categories.map((cat) => (
               <button
                 key={cat.id}
                 onClick={() => setActiveCategory(cat.id)}
                 className={`px-6 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 border ${
                   activeCategory === cat.id
                     ? 'border-primary text-primary bg-primary/10'
                     : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                 }`}
               >
                 {cat.label}
               </button>
             ))}
           </motion.div>
           
           {/* Projects Grid */}
           <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <AnimatePresence mode="popLayout">
               {filteredProjects.map((project, index) => (
                 <ScrollReveal key={project.id} delay={index * 0.1}>
                   <ProjectCard
                     project={project}
                     onClick={() => setSelectedProject(project)}
                   />
                 </ScrollReveal>
               ))}
             </AnimatePresence>
           </motion.div>
         </div>
       </div>
       
       {/* Modal */}
       <AnimatePresence>
         {selectedProject && (
           <ProjectModal
             project={selectedProject}
             onClose={() => setSelectedProject(null)}
           />
         )}
       </AnimatePresence>
     </PageTransition>
   );
 };
 
 export default Projects;