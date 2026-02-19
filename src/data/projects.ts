import etyw from '../images/etyw.png'
import boovie from '../images/boovie.jpeg'
import literaturapasoptista from '../images/literaturapasoptista.jpeg'
import minecraftistorie from '../images/minecraftistorie.jpeg'
import nasaspace from '../images/nasa.jpeg'
import valentinesday from '../images/valentinesday.jpeg'
import nasa1 from '../images/awardsnasa.jpeg'
import nasa2 from '../images/full_teamnasa.jpeg'
import nasa3 from '../images/presentationnasa.jpeg'
import accenture from '../images/accenture.jpeg'
import videopoeme1 from '../images/videopoeme1.jpeg'
import videopoeme2 from '../images/videopoeme2.jpeg'
import videopoeme3 from '../images/videopoeme3.jpeg'
import videopoeme4 from '../images/videopoeme4.jpeg'
import videopoeme5 from '../images/videopoeme5.jpeg'
import invoeting from '../images/inoveting.jpeg'
import rospin1 from '../images/rospin1.jpg'
import rospin2 from '../images/rospin2.jpg'
import rospin3 from '../images/rospin3.jpg'
import rospin4 from '../images/rospin4.jpg'
import rospin5 from '../images/rospin5.jpg'
import ivov81 from '../images/inov81.jpeg'
import ivov82 from '../images/inov82.jpeg'
import ivov83 from '../images/inov83.jpeg'
import tepes from '../images/minecraftt.png'
import viteazu from '../images/mihaiviteazu.png'
import germany from '../images/germany.png'

export interface Project {
  id: string;
  title: string;
  year: number;
  category: 'high-school' | 'university' | 'research';
  description: string;
  fullDescription: string;
  purpose?: string;
  prize?: string;
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  images: string[];
  collaborators: { name: string; role: string }[];
  projectUrl?: string;
}

export const projects: Project[] = [
  
  {
    id: 'inoveting',
    title: 'Inov8ting Competition',
    year: 2025,
    category: 'university',
    description: 'Country Competition',
    fullDescription: 'We participated in Inov8 Camp Mures, competing in the Automation section which aligns directly with our field of study. Unlike competitions with pre-defined tasks, we were given a broad theme "Automation and Electronics”, and challenged to come up with an innovative idea. We designed a functional "Smart Home" prototype centered around an Arduino Mega 2560. The system integrated a complex array of sensors on multiple breadboards, including detectors for smoke, fire, gas, motion, temperature and humidity. The hardware was programmed to react autonomously, such as activating a fan when CO2 levels were exceeded or when the temperature was higher than the set values. To elevate the project and demonstrate "out-of-the-box" thinking, we implemented a real-time notification system via "Discord". When sensor values exceeded established safety norms, the Arduino transmitted immediate alerts to a dedicated discord text channel, displaying the exact data values and the specific nature of the danger. This project successfully showcased our combined skills in electronics, programming, and IoT connectivity.',
    purpose: 'Competition between Universities',
    prize: 'First Place in Automation Category 🥇',
    thumbnail: ivov83,
    projectUrl: 'https://drive.google.com/file/d/1ug2icTRG0RP3g20yO6cS67SGoRzw0NMp/view?usp=drive_link',
    images: [
      ivov83, ivov81, ivov82, invoeting,
    ],
    collaborators: [
      { name: 'Zaharia Vlad Andrei', role: 'Participant' },
      {name: 'Vultur Cristina-Gabriela', role: 'Participant' },
      { name: 'Heros Miruna-Gabriela', role: 'Participant' },
    ],
  },
  
  
  

  {
    id: 'nasa',
    title: 'Nasa Space Apps Challenge',
    year: 2025,
    category: 'research',
    description: 'Our challenge: Build a Biology Knowledge Engine',
    fullDescription: 'The 2025 NASA Space Apps Challenge was a global hackathon organized at both local and international levels, offering a variety of challenges with distinct technical requirements and difficulty levels. Our team selected the "Build a Space Biology Knowledge Engine" theme, for which we were tasked with processing over 600 NASA scientific publications regarding biological experiments in space. We successfully developed a web application that functions as an interactive knowledge engine. Beyond standard search capabilities, we integrated an AI-powered chatbot to answer questions based on the texts, a 3D exploration interface, and a dynamic knowledge graph that visualizes the connections between different research topics.',
    purpose: 'Nasa Space Apps Challenge Hackathon 2025',
    prize: 'Second Place 🥈',
    thumbnail: nasaspace,
    projectUrl: 'https://drive.google.com/file/d/1ViQfumzKyJ8GRphRihRpeh3UqJMbyy6n/view?usp=drive_link',
    images: [
      nasa1,nasa2,nasa3,
    ],
    collaborators: [
      { name: 'Zaharia Vlad Andrei', role: 'Participant' },
      { name: 'Heros Miruna-Gabriela', role: 'Participant' },
      { name: 'Campean Alisa-Madalina', role: 'Participant' },
      { name: 'Tasca Dan', role: 'Participant' },
      { name: 'Chereches Andrei', role: 'Participant' },
      { name: 'Anton Razvan-Stefan', role: 'Participant' },
    ],
  },

  {
    id: 'accenture',
    title: 'Accenture Competition',
    year: 2025,
    category: 'university',
    description: 'University Competition',
    fullDescription: 'We participated in the Accenture Innovation Competition, a challenge that, unlike typical hackathons with pre-defined prompts, required us to identify a specific local issue in Targu Mures and propose a viable initiative to address it. We focused on the citys critical air quality problem, specifically targeting pollution exacerbated by industrial chemical byproducts such as ammonium nitrate, urea, and NPK fertilizers. Through extensive research into sustainable purification methods, we came up with a theoretical idea "OxyLeaf", a bioreactor that utilizes "Chlorella vulgaris" microalgae within a controlled aquatic environment. Equipped with solar panels, air pumps, and specialized LED grow lights, this system is designed to absorb CO2 and release oxygen year-round, offering a purification efficiency greater than that of trees.',
    purpose: 'Accenture Innovation Competition',
    prize: 'Special Award for Innovation',
    thumbnail: accenture,
    projectUrl: 'https://drive.google.com/file/d/1R9B1Gof8igXyguobRAfd_g4fNzR9Rbys/view?usp=drive_link',
    images: [
      
    ],
    collaborators: [
      { name: 'Zaharia Vlad Andrei', role: 'Participant' },
      { name: 'Heros Miruna-Gabriela', role: 'Participant' },
      { name: 'Campean Alisa-Madalina', role: 'Participant' },
      { name: 'Lung Mihai', role: 'Participant' },
      { name: 'Caruntu Florin-Sebastian', role: 'Participant' },
    ],
  },

  
  
  {
    id: 'rospin',
    title: 'ROSPIN Satellite Masterclass',
    year: 2025.2026,
    category: 'research',
    description: 'Research using satellite data for visualisation & processing',
    fullDescription:  'ROSPIN was a masterclass dedicated to teaching the acquisition and practical application of satellite imagery. Participants were given the choice between developing a software application or conducting an in-depth research project to apply the concepts learned. Our team selected the research track focusing on Flood Detection using Satellite Imagery. To elevate the project, we introduced an additional challenge: integrating Artificial Intelligence not only to process the data but also to generate predictions and interpretations based on our codes output. We selected Brosteni as our case study after we identified it as a region highly prone to flooding, particularly following the events of July 2025. By leveraging Sentinel-2 satellite data alongside various AI models specifically DeepSeek Gemini ChatGPT. We were able to analyze flood risks and interpret complex data patterns. We successfully delivered results that satisfied the project requirements and completing the masterclass with a robust set of new skills and valuable insights into remote sensing technology.',
    purpose: 'ROSPIN Satellite Masterclass',
    thumbnail: rospin1,
    images: [
      rospin1, rospin2, rospin3, rospin4, rospin5,
    ],
    collaborators: [
      { name: 'Zaharia Vlad Andrei', role: 'Participant' },
      { name: 'Jitaru Ecaterina', role: 'Participant' },
      { name: 'Heros Miruna-Gabriela', role: 'Participant' },
      { name: 'Udrea Daniel', role: 'Participant' },
    ],
  },


  {
    id: 'videopoeme',
    title: 'Musical Video-Poems',
    year: 2022,
    category: 'high-school',
    description: 'ETYWs first competition after the pandemic',
    fullDescription: 'In high-school we participated to our first unique competition. As a participant team, you received a traditional poem or composition from one of our greatest writers and you are supposed to create a "musical poem" based on it, describing the emotions, fellings, aspects that are understood from that poem by creating a video. ',
    purpose: 'County-Level Competition',
    prize: 'First place & Best Screenplay Award 🥇',
    youtubeId: 'b2-iBMtkHMI',
    thumbnail: videopoeme1,
    images: [
      videopoeme1,videopoeme2,videopoeme3,videopoeme4,videopoeme5,
    ],
    collaborators: [
      { name: 'Zaharia Vlad Andrei', role: 'Director & Writer & Video Editor' },
      { name: 'Simionca Vlad Ionut', role: 'Director & Writer & Camera Operator' },
      { name: 'Tontian David Mihai', role: 'Director & Writer & Camera Operator' },
      { name: 'Suciu Magda', role: 'Vocalist' },
      { name: 'Razvan Matean', role: 'Camera Operator' },
      { name: 'Dan Tudor Catalin', role: 'Camera Operator' },
    ],
  },

  {
    id: 'boovie',
    title: 'Boovie',
    year: 2022,
    category: 'high-school',
    description: 'Book Trailer for "The Book of Fate"',
    fullDescription: 'In this competition, each team choose a book from a given list and made a trailer for that book.',
    purpose: 'Boovie Trailer Festival',
    prize: 'Boovie Trailer Festival - Honorable Mention',
    thumbnail: boovie,
    youtubeId: 'k-Lej-v9Uo8',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop',
    ],
    collaborators: [
      { name: 'Zaharia Vlad Andrei', role: 'Video Editor' },
    ],
  },


  {
    id: 'regim-nazist',
    title: 'Regimul Totalitar Nazist',
    year: 2020,
    category: 'high-school',
    description: 'A dramatic retelling of european history facts through multiple perspectives.',
    fullDescription: 'Our first high school project, featuring complex narratives of the nazi regime.',
    purpose: 'History Course',
    thumbnail: germany,
    youtubeId: '0Y2R0W14MJ8',
    images: [
      
    ],
    collaborators: [
      { name: 'Simionca Vlad Ionut', role: 'Writer' },
      { name: 'Zaharia Vlad Andrei', role: 'Writer & Video Editor' },
      { name: 'Tontian David Mihai', role: 'Writer' },
      { name: 'Dan Tudor Catalin', role: 'Participant' },
      { name: 'Priscornita Rares', role: 'Participant' },
    ],
  },


  {
    id: 'mihai-viteazu',
    title: 'Mihai Viteazul',
    year: 2020,
    category: 'high-school',
    description: 'Our first ever filmed project',
    fullDescription: 'We wanted to do something different than just a powerpoint project so yeah we did that in the 9th grade :)',
    purpose: 'History Course',
    thumbnail: viteazu,
    youtubeId: 'TXKaml14e84',
    images: [
     
    ],
    collaborators: [
     { name: 'Simionca Vlad Ionut', role: 'Writer' },
     { name: 'Zaharia Vlad Andrei', role: 'Writer & Video Editor' },
     { name: 'Tontian David Mihai', role: 'Writer' },
    ],
  },


  {
    id: 'literatura-pasoptista',
    title: 'Literatura in Perioada Pasoptista',
    year: 2022,
    category: 'high-school',
    description: 'Short documentary about the Pasoptism Romanian Period',
    fullDescription: 'This project explores Romanian literature from the 1848 period through the eyes of the writers of that generation. It focuses on their compositions, ideas, and literary works, showing how they expressed national identity, freedom, and social change.',
    purpose: 'Romanian Language Course',
    thumbnail: literaturapasoptista,
    youtubeId: 'G75EBC1kmcE',
    images: [
      
    ],
    collaborators: [
     { name: 'Simionca Vlad Ionut', role: 'Writer & Camera Operator' },
     { name: 'Zaharia Vlad Andrei', role: 'Writer & Video Editor' },
     { name: 'Tontian David Mihai', role: 'Writer & Camera Operator' },
     { name: 'Dan Tudor Catalin', role: 'Camera Operator & Participant' },
     { name: 'Sarmasan Dragos', role: 'Participant' },
    ],
  },

   {
    id: 'valentinesday',
    title: 'Valentines Day',
    year: 2022,
    category: 'high-school',
    description: 'Small 14th of February Project made for high-school purposes',
    fullDescription: 'Small 14th of February Project made for high-school purposes',
    purpose: 'English Course',
    thumbnail: valentinesday,
    youtubeId: 'w7JSVTQQlfE',
    images: [
     
    ],
    collaborators: [
     { name: 'Zaharia Vlad Andrei', role: 'Writer & Video Editor' },
    ],
  },

  

   {
     id: 'minecraft-istorie',
     title: 'Minecraft History Lesson - Transilvania & Vlad Tepes',
     year: 2023,
     category: 'high-school',
     description: 'Another High School Project where we tested our filming and creative abilities',
     fullDescription: 'Another High School Project where we tested our filming and creative abilities. The idea behind it is: you go to the cinema in minecraft expecting to see a history story-telling about what happend in Transilvania in the medieval period.',
     purpose: 'History Course',
     thumbnail: tepes,
     youtubeId: 'DXApLMlNQhg',
     images: [
       
     ],
     collaborators: [
      { name: 'Simionca Vlad Ionut', role: 'Writer & PowerPoint maker' },
      { name: 'Zaharia Vlad Andrei', role: 'Writer & Video Editor' },
      { name: 'Tontian David Mihai', role: 'Writer' },
     ],
   },
 ];
 
 export const getProjectsByCategory = (category: Project['category']) => 
   projects.filter(p => p.category === category);
 
 export const getProjectById = (id: string) => 
   projects.find(p => p.id === id);