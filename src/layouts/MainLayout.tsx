 import { ReactNode } from 'react';
 import { AnimatePresence } from 'framer-motion';
 import { useLocation } from 'react-router-dom';
 import Navigation from '@/components/Navigation';
 import CustomCursor from '@/components/CustomCursor';
 import FilmGrain from '@/components/FilmGrain';
 
 interface MainLayoutProps {
   children: ReactNode;
 }
 
 const MainLayout = ({ children }: MainLayoutProps) => {
   const location = useLocation();
   
   return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       <CustomCursor />
       <FilmGrain />
       <Navigation />
       
       <AnimatePresence mode="wait">
         <main key={location.pathname}>
           {children}
         </main>
       </AnimatePresence>
     </div>
   );
 };
 
 export default MainLayout;