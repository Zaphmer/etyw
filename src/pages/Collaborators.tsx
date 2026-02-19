 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import PageTransition from '@/components/PageTransition';
 import ScrollReveal from '@/components/ScrollReveal';
 import { collaborators, Collaborator } from '@/data/collaborators';
 import { projects } from '@/data/projects';
 import { X, Download, Search } from 'lucide-react';
 
 const CollaboratorCard = ({ collaborator, onClick }: { collaborator: Collaborator; onClick: () => void }) => (
   <motion.div
     layoutId={`collaborator-${collaborator.id}`}
     onClick={onClick}
     className="card-cinematic overflow-hidden cursor-pointer group"
   >
     <div className="flex gap-6 p-6">
       <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
         <img
           src={collaborator.portrait}
           alt={collaborator.name}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
         />
       </div>
       
       <div className="flex-1 min-w-0">
         <h3 className="text-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
           {collaborator.name}
         </h3>
         <p className="text-sm text-primary mb-3">
           {collaborator.roles.join(' • ')}
         </p>
         <p className="text-xs text-muted-foreground">
           {collaborator.projectIds.length} projects
         </p>
       </div>
     </div>
   </motion.div>
 );
 
 const CollaboratorModal = ({ collaborator, onClose }: { collaborator: Collaborator; onClose: () => void }) => {
   const collaboratorProjects = projects.filter(p => collaborator.projectIds.includes(p.id));
   
   return (
     <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
       onClick={onClose}
     >
       <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
       
       <motion.div
         layoutId={`collaborator-${collaborator.id}`}
         onClick={(e) => e.stopPropagation()}
         className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-sm"
       >
         <button
           onClick={onClose}
           className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
         >
           <X className="w-6 h-6" />
         </button>
         
         <div className="p-8 md:p-12">
           <div className="flex flex-col md:flex-row gap-8 mb-12">
             <div className="w-32 h-32 flex-shrink-0">
               <img
                 src={collaborator.portrait}
                 alt={collaborator.name}
                 className="w-full h-full object-cover"
               />
             </div>
             
             <div>
               <h2 className="text-display text-3xl mb-2">{collaborator.name}</h2>
               <p className="text-primary mb-4">{collaborator.roles.join(' • ')}</p>
               <p className="text-body-cinema text-foreground/80">{collaborator.bio}</p>
             </div>
           </div>
           
           {/* Skills */}
           <div className="mb-12">
             <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
               Skills
             </h3>
             <div className="flex flex-wrap gap-2">
               {collaborator.skills.map((skill) => (
                 <span
                   key={skill}
                   className="px-4 py-2 text-sm text-foreground/80 bg-secondary/50 border border-border"
                 >
                   {skill}
                 </span>
               ))}
             </div>
           </div>
           
           {/* Projects */}
           <div className="mb-12">
             <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
               Projects
             </h3>
             <div className="space-y-3">
               {collaboratorProjects.map((project) => (
                 <div
                   key={project.id}
                   className="flex items-center justify-between p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                 >
                   <div>
                     <span className="text-foreground">{project.title}</span>
                     <span className="text-muted-foreground ml-2">({project.year})</span>
                   </div>
                   <span className="text-sm text-primary">
                     {project.collaborators.find(c => c.name === collaborator.name)?.role}
                   </span>
                 </div>
               ))}
             </div>
           </div>
           
           {/* CV Download */}
           {collaborator.cvUrl && (
             <a
               href={collaborator.cvUrl}
               className="inline-flex items-center gap-3 px-6 py-3 text-sm tracking-[0.15em] uppercase text-foreground border border-border hover:border-primary hover:text-primary transition-all"
             >
               <Download className="w-4 h-4" />
               Download CV
             </a>
           )}

            {/* YT Link */}
            {collaborator.ytlink && (
             <a
               href={collaborator.ytlink}
               className="inline-flex items-center gap-3 px-6 py-3 text-sm tracking-[0.15em] uppercase text-foreground border border-border hover:border-primary hover:text-primary transition-all"
             >
               <Download className="w-4 h-4" />
               Youtube Music Channel
             </a>
           )}

         </div>
       </motion.div>
     </motion.div>
   );
 };
 
 const Collaborators = () => {
   const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
   const [searchQuery, setSearchQuery] = useState('');
   
   const filteredCollaborators = collaborators.filter(c =>
     c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     c.roles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()))
   );
   
   return (
     <PageTransition>
       <div className="min-h-screen pt-32 pb-24 px-8">
         <div className="max-w-5xl mx-auto">
           {/* Header */}
           <div className="text-center mb-20">
             <motion.span
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block"
             >
               The People
             </motion.span>
             
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-display text-4xl md:text-6xl mb-8"
             >
               Collaborators
             </motion.h1>
             
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-body-cinema text-lg text-muted-foreground max-w-2xl mx-auto"
             >
               The individuals who have shaped ETYW through their talents, dedication, and vision.
             </motion.p>
           </div>
           
           {/* Search */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="relative max-w-md mx-auto mb-16"
           >
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
             <input
               type="text"
               placeholder="Search by name or role..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
             />
           </motion.div>
           
           {/* Grid */}
           <div className="grid md:grid-cols-2 gap-6">
             <AnimatePresence mode="popLayout">
               {filteredCollaborators.map((collaborator, index) => (
                 <ScrollReveal key={collaborator.id} delay={index * 0.1}>
                   <CollaboratorCard
                     collaborator={collaborator}
                     onClick={() => setSelectedCollaborator(collaborator)}
                   />
                 </ScrollReveal>
               ))}
             </AnimatePresence>
           </div>
           
           {filteredCollaborators.length === 0 && (
             <p className="text-center text-muted-foreground mt-12">
               No collaborators found matching "{searchQuery}"
             </p>
           )}
         </div>
       </div>
       
       {/* Modal */}
       <AnimatePresence>
         {selectedCollaborator && (
           <CollaboratorModal
             collaborator={selectedCollaborator}
             onClose={() => setSelectedCollaborator(null)}
           />
         )}
       </AnimatePresence>
     </PageTransition>
   );
 };
 
 export default Collaborators;