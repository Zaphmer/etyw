import vladzahariaportrait from '../images/vladzaharia.jpeg';
import simioncavladportrait from '../images/simioncavlad.jpeg';
import herosmirunaportrait from '../images/mirunaheros.jpeg';
import dimitriezamfir from '../images/dimi.jpeg'
import razvan from '../images/razvan.jpeg'
import davidtontian from '../images/tontiandavid.jpeg' 
import anton from '../images/razvananton.jpeg'
import cristina from '../images/cristina.jpeg'
import alisa from '../images/alisa.jpeg'
import daniel from '../images/daniel.jpeg'
import katy from '../images/katy.jpeg'
import maqda from '../images/maqda.jpeg'
import dan from '../images/dan.jpeg'
import dantudor from '../images/tudordan.jpeg'
import cherechesandrei from '../images/chereches.jpeg'
import mihailung from '../images/mihailung.jpeg'



 export interface Collaborator {
   id: string;
   name: string;
   roles: string[];
   bio: string;
   portrait: string;
   projectIds: string[];
   skills: string[];
   cvUrl?: string;
   ytlink?: string;
 }
 
 export const collaborators: Collaborator[] = [
   {
     id: 'zaharia-vlad',
     name: 'Zaharia Vlad Andrei',
     roles: ['Bachelor of Automation and Applied Informatics','Researcher', 'Producer'],
     bio: 'Founding member of ETYW with a passion for transforming knowledge into cinematic experiences. Currently pursuing University studies with a focus on Drone Research and CyberSecurity.',
     portrait: vladzahariaportrait,
     projectIds: ['videopoeme', 'nasa', 'accenture', 'inoveting', 'rospin', 'boovie','regim-nazist','mihai-viteazu','literatura-pasoptista','valentinesday','minecraft-istorie'],
     skills: ['Screenwriting', 'Research', 'Video & Trailer Editing', 'AutoCAD', 'Python', 'Data Bases', 'CyberSecurity CCNA1' ],
     cvUrl: 'https://drive.google.com/file/d/1j3_IkxJlnoYb8sym9Lu8NZZGCgZhYNhp/view?usp=drive_link',
   },
   {
     id: 'simionca-vlad',
     name: 'Simionca Vlad Ionut',
     roles: ['Bachelor of Informatics', 'Producer', 'Writer'],
     bio: 'Master of pacing and narrative flow. Sofia has been the invisible hand shaping ETYW projects since the beginning, bringing technical precision to every cut.',
     portrait: simioncavladportrait,
     projectIds: ['videopoeme', 'regim-nazist', 'mihai-viteazu', 'literatura-pasoptista','minecraft-istorie'],
     skills: ['Production Management', 'Data Bases'],
     cvUrl: 'https://drive.google.com/file/d/1P8FeL2xOKmeGF96O1B7dFvkQ-t6e8u89/view?usp=drive_link',
   },

   {
     id: 'tontian-david',
     name: 'Tontian David Mihai',
     roles: ['Student of Pompieri', 'Narrator'],
     bio: 'Veni, vidi, vici, Nihil sine deo',
     portrait: davidtontian,
     projectIds: ['regim-nasist', 'mihai-viteazu'],
     skills: ['Pompier', 'AutoCAD'],
     cvUrl: 'https://drive.google.com/file/d/1lE1qlmnrPPDAkV7PZdu2FNYYcyOnEUgV/view?usp=drive_link',
   },

   {
     id: 'heros-miruna', 
     name: 'Heros Miruna-Gabriela',
     roles: ['Bachelor or Automation and Applied Informatics'],
     bio: 'I am a third-year Automation and Applied Informatics student at UMFST, driven by a passion for continuous learning and personal growth. I actively participate in workshops, networking events, and collaborative team projects, where I bring a clear communication style and a proactive, open-minded approach. In my spare time, I channel my creativity into drawing, studying foreign languages, and music, which helps me maintain a strong balance between my academic and personal life.',
     portrait: herosmirunaportrait,
     projectIds: ['nasa', 'accenture', 'rospin', 'inoveting'],
     skills: ['Digitalisation', 'Automation Mentenance', 'AutoCAD', 'SAP Software'],
     cvUrl: 'https://drive.google.com/file/d/1fPEbwjX0k2x4dJrkoN4jxR0AFC-NzNs-/view?usp=drive_link',
   },

   {
    id: 'vultur-cristina', 
    name: 'Vultur Cristina-Gabriela',
    roles: ['Bachelor of Automation and Applied Informatics','Researcher'],
    bio: 'A wizard',
    portrait: cristina,
    projectIds: ['inoveting'],
    skills: ['Automation', 'Design', 'AutoCAD'],
    cvUrl: 'https://drive.google.com/file/d/1jXNS_Eh8kCpo_SI2lWK4bSu3cjsi3UzF/view?usp=drive_link',
  },


  {
    id: 'campean-alisa', 
    name: 'Campean Alisa-Madalina',
    roles: ['Bachelor of Automation and Applied Informatics'],
    bio: 'Ambitious Student with a desire for knowleadge',
    portrait: alisa,
    projectIds: ['accenture', 'nasa'],
    skills: ['Visual Effects', 'Cinematography', 'Motion Graphics', 'Color Science'],
    cvUrl: '',
  },

  {
    id: 'dan-tasca', 
    name: 'Tasca Dan',
    roles: ['Bachelor of Automation and Applied Informatics'],
    bio: 'Ambitious Student with a desire for knowleadge',
    portrait: dan,
    projectIds: ['nasa'],
    skills: ['Java', 'AutoCAD', 'Data Bases', 'Operating Systems'],
    cvUrl: '',
  },

  {
    id: 'mihai-lung', 
    name: 'Mihai Lung',
    roles: ['Bachelor of Automation and Applied Informatics'],
    bio: '',
    portrait: mihailung,
    projectIds: ['accenture'],
    skills: ['Visual Effects', 'Cinematography', 'Motion Graphics', 'Color Science'],
    cvUrl: 'https://drive.google.com/file/d/1fPEbwjX0k2x4dJrkoN4jxR0AFC-NzNs-/view?usp=drive_link',
  },

  {
    id: 'jitaru-ecaterina', 
    name: 'Jitaru Ecaterina',
    roles: ['Bachelor of Physics'],
    bio: 'Currently a student at Babeș-Bolyai University in Cluj-Napoca, I am an active member and PR volunteer for the Physics Students Association (ASFUBB). I am passionate about volunteering and have participated in numerous events like Bikeathon and Alergăraș, as well as coordinating the "Hope through Art" project for children. ',
    portrait: katy,
    projectIds: ['rospin'],
    skills: ['Python', 'Digital Marketing', 'Digital Skills', 'Advanced English'],
    cvUrl: 'https://drive.google.com/file/d/1u-tW86OB_E0tjPgI_HptxyCfCND1U4-6/view?usp=drive_link',
  },

  {
    id: 'udrea-daniel', 
    name: 'Udrea Daniel',
    roles: ['Bachelor of Mathematics and Computer Science'],
    bio: 'Combining expertise in IT, mathematics, management, and teamwork to deliver effective solutions and drive collaboration. Working towards a Mathematics and Computer Science Degree at Babes-Bolyai University, Cluj-Napoca, Romania',
    portrait: daniel,
    projectIds: ['rospin'],
    skills: ['Python', 'SQL', 'Power BI', 'C# | .NET | React'],
    cvUrl: 'https://drive.google.com/file/d/1VKyTI1P-sWHNuhfAS6DSxNERBr1E8Jv-/view?usp=drive_link',
  },

  {
    id: 'dan-tudor', 
    name: 'Dan Tudor Catalin',
    roles: ['Student'],
    bio: 'Visual wizard who transforms raw footage into cinematic experiences. Elena joined ETYW during the Quantum Paradox project and has elevated our visual standards ever since.',
    portrait: dantudor,
    projectIds: ['videopoeme','regim-nazist','literatura-pasoptista'],
    skills: ['Funny'],
    cvUrl: 'https://drive.google.com/file/d/1fPEbwjX0k2x4dJrkoN4jxR0AFC-NzNs-/view?usp=drive_link',
  },

  {
    id: 'anton-razvan-stefan', 
    name: 'Anton Razvan-Stefan',
    roles: ['Computer Engineering Student'],
    bio: 'Computer Engineering student at UTCN. I led the technical strategy and pitch, ensuring our backend logic translated into a clear, usable product.',
    portrait: anton,
    projectIds: ['nasa'],
    skills: ['Technical Strategy', 'Presentation', 'AI & Data', 'Python & C'],
    cvUrl: '',
  },

  {
    id: 'suciu-magda', 
    name: 'Suciu Magda',
    roles: ['Vocalist'],
    bio: 'Leading Vocalist and Musician. Succesful musician and singer. Participant in Voice of Romania. Winner of Global Records Academy Romania 2025',
    portrait: maqda,
    projectIds: ['videopoeme'],
    skills: ['Singer', 'English', 'Political Sciences'],
    ytlink: 'https://www.youtube.com/@hellomaqda',
  },

  {
    id: 'chereches-andrei', 
    name: 'Chereches Andrei',
    roles: ['Researcher'],
    bio: 'Visual wizard who transforms raw footage into cinematic experiences. Elena joined ETYW during the Quantum Paradox project and has elevated our visual standards ever since.',
    portrait: cherechesandrei,
    projectIds: ['nasa'],
    skills: ['Visual Effects', 'Cinematography', 'Motion Graphics', 'Color Science'],
    cvUrl: 'https://drive.google.com/file/d/1fPEbwjX0k2x4dJrkoN4jxR0AFC-NzNs-/view?usp=drive_link',
  },

  

  {
    id: 'popescu-dimitrie-zamfir', 
    name: 'Popescu Dimitrie-Zamfir',
    roles: ['Bachelor of Machine building technology'],
    bio: 'Wild wizard who transforms raw footage into cinematic experiences',
    portrait: dimitriezamfir,
    projectIds: [],
    skills: ['AutoCAD', 'Fusion'],
    cvUrl: 'https://drive.google.com/file/d/1Yhh7onkYKKRvu_VvxoY2q9fkt7j0oRCa/view?usp=drive_link',
  },

  {
    id: 'matean-razvan',
    name: 'Matean Razvan',
    roles: ['Bachelor of Informatics Economy at UBB'],
    bio: 'Visator. Creator. Producator',
    portrait: razvan,
    projectIds: ['videopoeme'],
    skills: ['Digital Marketing'],
    cvUrl: '#',
  },


 ];
 
 export const getCollaboratorById = (id: string) => 
   collaborators.find(c => c.id === id);
 
 export const getCollaboratorsByProject = (projectId: string) => 
   collaborators.filter(c => c.projectIds.includes(projectId));