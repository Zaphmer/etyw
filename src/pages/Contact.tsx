 import { motion } from 'framer-motion';
 import PageTransition from '@/components/PageTransition';
 import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';
 
 const TikTokIcon = () => (
   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
     <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
   </svg>
 );
 
 const socialLinks = [
   { name: 'Email', icon: Mail, href: 'mailto:contact@etyw.studio', label: 'contact@etyw.studio' },
   { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCgpF38nQchQCX86oGF_a_ew', label: '@etywproduction' },
   { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/etyw.studio', label: '@etyw.studio' },
   { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/etyw', label: 'ETYW' },
   { name: 'TikTok', icon: TikTokIcon, href: 'https://tiktok.com/@etyw', label: '@etyw' },
 ];
 
 const Contact = () => {
   return (
     <PageTransition>
       <div className="min-h-screen flex items-center justify-center px-8">
         <div className="max-w-2xl mx-auto text-center">
           <motion.span
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="text-sm tracking-[0.3em] uppercase text-primary mb-8 block"
           >
             Get in Touch
           </motion.span>
           
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="text-display text-4xl md:text-6xl mb-8"
           >
             Contact
           </motion.h1>
           
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="text-body-cinema text-lg text-muted-foreground mb-16"
           >
             For collaborations, inquiries, or just to say hello.
           </motion.p>
           
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="divider-cinematic mx-auto mb-16"
           />
           
           <div className="space-y-6">
             {socialLinks.map((link, index) => (
               <motion.a
                 key={link.name}
                 href={link.href}
                 target={link.name !== 'Email' ? '_blank' : undefined}
                 rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                 className="flex items-center justify-between p-6 border border-border hover:border-primary group transition-all duration-500"
               >
                 <div className="flex items-center gap-4">
                   <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                   <span className="text-lg text-foreground">{link.name}</span>
                 </div>
                 <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                   {link.label}
                 </span>
               </motion.a>
             ))}
           </div>
           
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2, duration: 0.8 }}
             className="text-editorial text-sm text-muted-foreground mt-20"
           >
             ETYW  Cinematic Learning Since High School
           </motion.p>
         </div>
       </div>
     </PageTransition>
   );
 };
 
 export default Contact;