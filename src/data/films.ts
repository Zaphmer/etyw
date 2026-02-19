 export interface Film {
   id: string;
   title: string;
   description: string;
   fullDescription: string;
   concept: string;
   status: 'pre-production' | 'production' | 'completed' | 'future';
   competition?: string;
   thumbnail: string;
   videoUrl?: string;
   youtubeId?: string;
   images: string[];
   team: { name: string; role: string }[];
 }
 
 export const films: Film[] = [
   {
     id: 'goatwoman',
     title: 'GoatWoman',
     description: 'A short film exploring the unspoken tales of romanian folk',
     fullDescription: 'Our first narrative short film under the ETYW Production banner. Set during a friends gathering, the film explores themes of romanian folk nature, unspoken stories, and the courage to break cycles of silence.',
     concept: 'From time to time we feel sorry for the people without cars that stand beside the road waiting for someone to pick them up. But not always this is the wisest choice to do. You have to be cautious at the hitchhikers. Appearances can be deceiving.',
     status: 'production',
     thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop',
     images: [
       'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop',
       'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=800&fit=crop',
     ],
     team: [
       { name: 'Zaharia Vlad Andrei', role: 'Director & Writer & Movie Editor' },
       { name: 'Simionca Vlad Ionut', role: 'Director & Writer' },
       { name: 'Popescu Dimitrie-Zamfir', role: 'Actor' },
       { name: 'Future Antagonist', role: 'Actress' },
       { name: 'Furcea David Cristian', role: 'Friend 1' },
       { name: 'Matean Razvan', role: 'Friend 2' },
       { name: 'Tontian David Mihai', role: 'Friend 3' },
       
     ],
   },
   {
     id: 'parallax',
     title: 'Parallax',
     description: 'A sci-fi short exploring perception and reality through parallel timelines.',
     fullDescription: 'An ambitious science fiction project that examines how small decisions create divergent realities. The film follows a single day from two parallel perspectives, gradually revealing the profound differences small choices can make.',
     concept: 'What if you could see the road not taken? Parallax follows Elena through two versions of the same day, showing how a single decision at dawn creates two entirely different lives by dusk.',
     status: 'pre-production',
     competition: 'Targeting: Student Academy Awards 2026',
     thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=600&fit=crop',
     images: [
       'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&h=800&fit=crop',
     ],
     team: [
       { name: 'Zaharia Vlad', role: 'Director' },
       { name: 'Simionca Vlad', role: 'Lead Actor' },
       { name: 'Tontian David', role: 'VFX Supervisor' },
     ],
   },
   {
     id: 'remnants',
     title: 'Remnants',
     description: 'A documentary examining abandoned places and the stories they hold.',
     fullDescription: 'A meditative documentary exploring abandoned spaces across the region. Through careful cinematography and archival research, we uncover the human stories embedded in these forgotten places.',
     concept: 'Every abandoned building holds echoes of lives once lived. Remnants is a visual poem about memory, decay, and the persistence of human presence even in absence.',
     status: 'pre-production',
     thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop',
     images: [],
     team: [
       { name: 'Zaharia Vlad', role: 'Director' },
       { name: 'Simionca Vlad', role: 'Producer' },
     ],
   },
   {
     id: 'untitled-feature',
     title: 'Untitled Feature Project',
     description: 'Our first feature-length film. Details forthcoming.',
     fullDescription: 'The culmination of ETYW\'s journey from classroom presentations to serious filmmaking. This feature-length project represents our most ambitious undertaking yet.',
     concept: 'In development. The story that has been building since the beginning.',
     status: 'future',
     thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
     images: [],
     team: [],
   },
 ];
 
 export const getFilmById = (id: string) => 
   films.find(f => f.id === id);
 
 export const getFilmsByStatus = (status: Film['status']) => 
   films.filter(f => f.status === status);