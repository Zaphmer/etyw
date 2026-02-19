import { motion } from 'framer-motion';
 import PageTransition from '@/components/PageTransition';
 import ScrollReveal from '@/components/ScrollReveal';
 
 const Manifesto = () => {
   return (
     <PageTransition>
       <div className="min-h-screen">
         {/* Hero */}
         <section className="min-h-screen flex items-center justify-center px-8">
           <div className="max-w-4xl mx-auto text-center">
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="text-display text-4xl md:text-6xl lg:text-7xl mb-8"
             >
                It is never too late to be what you might have been
             </motion.h1>
             
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="divider-cinematic mx-auto"
             />
           </div>
         </section>
         
         {/* Origin Story */}
         <section className="py-32 px-8">
           <div className="max-w-3xl mx-auto">
             <ScrollReveal>
               <span className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block">
                 The Beginning
               </span>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
               <h2 className="text-display text-3xl md:text-4xl mb-12">
                 It started with an idea
               </h2>
             </ScrollReveal>
             
             <div className="space-y-8 text-body-cinema text-lg text-foreground/80">
               <ScrollReveal delay={0.2}>
                 <p>
                   Our journey started in high school, where we turned ordinary class projects into cinematic stories. 
		   Whether it was History, Literature, or social sciences, 
		   we didn't just want to present facts we wanted to capture them through a lens.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.3}>
                 <p>
                   Beyond the classroom, we spent countless hours experimenting with lighting, angles, and editing. What started as a fun alternative to homework 
		   soon became a <em className="text-editorial text-primary">disciplined craft</em>. We learned that every frame tells a story, and every cut carries an emotion,
		   moving from simple school assignments to more complex, visual narratives.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.4}>
                 <p>
                   Today, we bring that same youthful curiosity and drive to every project we take on.
		   Our mission is to transform ideas into immersive experiences, just as we did back then.
		   From those first steps in the high school hallways to the professional sets of today,
		   our goal remains the same: to make every story worth watching.
                 </p>
               </ScrollReveal>
             </div>
           </div>
         </section>
         
         {/* Philosophy */}
         <section className="py-32 px-8 bg-secondary/30">
           <div className="max-w-3xl mx-auto">
             <ScrollReveal>
               <span className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block">
                 Philosophy
               </span>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
               <h2 className="text-display text-3xl md:text-4xl mb-12">
                 Learning is creation
               </h2>
             </ScrollReveal>
             
             <div className="space-y-8 text-body-cinema text-lg text-foreground/80">
               <ScrollReveal delay={0.2}>
                 <p>
                   We believe that filmmaking is more than just capturing light on a sensor; it’s about capturing a feeling.
		   Our philosophy is built on the balance between technical excellence and raw emotion.
	           We strive to create visuals that don't just show a story, but invite the audience to live it.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.3}>
                 <p>
                   For us, details are not just details they are what make a story stand out.
		   From the subtle choice of a color grade to the perfect timing of a sound effect, we obsess over the small things.
		   We believe that perfection is found in the nuances, and that’s where we focus our creative energy.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.4}>
                 <blockquote className="border-l-2 border-primary pl-8 py-4 my-12 text-editorial text-2xl text-foreground">
                   "We learned by making films. We became filmmakers by learning."
                 </blockquote>
               </ScrollReveal>
             </div>
           </div>
         </section>
         
         {/* Direction */}
         <section className="py-32 px-8">
           <div className="max-w-3xl mx-auto">
             <ScrollReveal>
               <span className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block">
                 Direction
               </span>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
               <h2 className="text-display text-3xl md:text-4xl mb-12">
                 From zero to prime, one frame at a time
               </h2>
             </ScrollReveal>
             
             <div className="space-y-8 text-body-cinema text-lg text-foreground/80">
               <ScrollReveal delay={0.2}>
                 <p>
                   What began as classroom projects evolved into competition entries.
                   What started as learning exercises became a body of work.
                   What was once a group of students is now a creative entity.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.3}>
                 <p>
                   Improvement is at the core of everything we do. We believe that a true filmmaker never stops learning,
                   which is why we are constantly refining our techniques and exploring new technologies.
                   For us, every project is a lesson in<strong className="text-foreground"> constant evolution </strong>
                   ensuring that our next frame is always better than the last.
                 </p>
               </ScrollReveal>
             </div>
           </div>
         </section>
         
         {/* Vision */}
         <section className="py-32 px-8 bg-secondary/30">
           <div className="max-w-3xl mx-auto">
             <ScrollReveal>
               <span className="text-sm tracking-[0.3em] uppercase text-primary mb-6 block">
                 Vision
               </span>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
               <h2 className="text-display text-3xl md:text-4xl mb-12">
                 Meaning through work
               </h2>
             </ScrollReveal>
             
             <div className="space-y-8 text-body-cinema text-lg text-foreground/80">
               <ScrollReveal delay={0.2}>
                 <p>
                   Our vision is simple: to keep getting better with every project we film. 
		   We want to be known for our hard work and the quality we bring to the screen,
                   turning our passion into a professional standard that people can trust.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.3}>
                 <p>
                   We want to take on bigger challenges and learn something new every day.
                   Our goal is to work on different types of projects that push us to grow together,
                   making sure that our team is always ready for the next step in our journey.
                 </p>
               </ScrollReveal>
               
               <ScrollReveal delay={0.4}>
                 <p className="text-editorial text-2xl text-primary mt-16">
                   ETYW is becoming something, watch it happen
                 </p>
               </ScrollReveal>
             </div>
           </div>
         </section>
         
         {/* Footer spacing */}
         <div className="h-32" />
       </div>
     </PageTransition>
   );
 };
 
 export default Manifesto;