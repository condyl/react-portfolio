import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, TerminalIcon, FileTextIcon, LightbulbIcon } from "lucide-react";

export const DATA = {
  name: "Connor Bernard",
  initials: "CB",
  url: "https://connorbernard.com",
  location: "Burlington, ON",
  locationLink:
    "https://www.google.com/maps/place/Burlington,+ON/@43.3812555,-79.8399195,11z/data=!3m1!4b1!4m6!3m5!1s0x882b63d2965d93b7:0xa44a27764c2b554f!8m2!3d43.3255196!4d-79.7990319!16zL20vMDE4ZGtf?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Computer Science Student & Software Engineer",
  summary: "I'm a [3rd year Computer Science student at Brock University](#education).  I've completed some cool projects like a [3D interactive math game](#project_packing) and a [web interface for a mathematical knots program](#project_knots).  I'm currently working on a [course planner](#project_brocktimetable) for Brock University students.  If I'm not coding, I'm probably rock climbing.",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://notes.connorbernard.com", icon: NotebookIcon, label: "Notes & Blog" },
    { href: "/experiments", icon: LightbulbIcon, label: "Experiments" },
    { href: "/Connor_Bernard_Resume.pdf", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "connorbbrocku@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/condyl",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/connor-bernard/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "url",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "url",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:connorbbrocku@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sun Life",
      href: "https://www.sunlife.ca/en/",
      badges: [],
      title: "Software Engineer Intern",
      logoUrl: "/logos/sunlife.png",
      start: "September 2024",
      end: "December 2024",
      description: "Won 1st place in Sun Life's Elevate CloudTech Hackathon.  Developed internal tools using Java and Adobe Experience Manager.",
      id: "work_sunlife",
    },
    {
      company: "Brock University",
      href: "https://www.brocku.ca",
      badges: [],
      title: "Research Assistant",
      logoUrl: "/logos/brocku.png",
      start: "May 2024",
      end: "December 2024",
      description:
        'Developed a web interface for a mathematical knots program "TurboKnots" using PHP and JavaScript.  Improved performance of the program by 90% by implementing a SQLite database.',
      id: "work_brocku",
    },
    {
      company: "Caribou Contests",
      href: "https://www.cariboutests.com",
      badges: [],
      title: "Software Developer Intern",
      logoUrl: "/logos/caribou.svg",
      start: "January 2024",
      end: "April 2024",
      description:
        "Created 3D interactive math game using Three.js.  Optimized SQL queries to improve performance by 87%.  Improved multilingual chat bot created using PHP and React.",
      id: "work_caribou",
    },
  ],
  education: [
    {
      school: "Brock University",
      href: "",
      degree: "BSc in Computer Science (co-op)",
      logoUrl: "/logos/brocku.png",
      start: "2022",
      end: "2026",
      id: "education_brocku",
      description: "82% overall average.  82% major average.  3rd year Computer Science student.",
    },
  ],
  projects: [
    {
      title: "AI Resume Builder",
      href: "https://resumecreator.connorbernard.com/",
      dates: "November 2024 - Present",
      active: true,
      description:
        "Developed a fullstack web application which allows users to easily create LaTeX resumes, with a hint of AI.",
      technologies: ["React.js", "Express.js", "TailwindCSS", "OpenAI API", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://resumecreator.connorbernard.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Frontend GitHub",
          href: "https://github.com/condyl/resume-creator-frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend GitHub",
          href: "https://github.com/condyl/resume-creator-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/resume.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_resume",
    },
    {
      title: "Brock Visual Timetable",
      href: "https://brocktimetable.com",
      dates: "March 2024 - Present",
      active: true,
      description:
      "Created an interactive course planner for Brock University students to easily plan their courses and generate a timetable.",
      technologies: ["JavaScript", "React.js", "Express.js", "MaterialUI"],
      links: [
        {
          type: "Website",
          href: "https://brocktimetable.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/BrockTimetable/BrockVisualTimetable",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/brocktimetable.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_brocktimetable",
    },
    {
      title: "TurboKnots Web Interface",
      href: "https://cariboutests.com/games/knots",
      dates: "May 2024 - December 2024",
      active: true,
      description:
        "Created an interactive web interface for Thomas Wolf's mathematical knots program TurboKnots using PHP and JavaScript.",
      technologies: ["JavaScript", "PHP", "SQLite", "JQuery"],
      links: [
        {
          type: "Website",
          href: "https://brocktimetable.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/knoteditor.png",
      video: "",
      companyName: "Brock University",
      companyLogo: "/logos/brocku.png",
      id: "project_knots",
    },
    {
      title: "Packing Game",
      href: "https://cariboutests.com/games/packing.php",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        "Led development of a 3D interactive math game which teaches students how to pack 3D shapes into a box.",
      technologies: ["JavaScript", "Three.js", "PHP", "SQL"],
      links: [
        {
          type: "Website",
          href: "https://cariboutests.com/games/packing.php",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Blog Post",
          href: "https://notes.connorbernard.com/work/caribou-contests/Packing",
          icon: <NotebookIcon className="size-3" />,
        }
      ],
      image: "/projects/packing.png",
      video: "",
      companyName: "Caribou Contests",
      companyLogo: "/logos/caribou.svg",
      id: "project_packing",
    },
    {
      title: "Ruby Discord Bot",
      href: "https://github.com/condyl/ruby-discord-bot",
      dates: "March 2024 - June 2024",
      active: true,
      description:
        "Created a Discord bot which allows users to display Valorant stats, recent matches, and more.",
      technologies: ["JavaScript", "Discord.js"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/condyl/ruby-discord-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/rubybot.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_rubybot",
    },
    {
      title: "Terminal Portfolio",
      href: "https://terminal.connorbernard.com",
      dates: "Febuary 2024 - Febuary 2024",
      active: true,
      description:
        "Created a terminal portfolio using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://terminal.connorbernard.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/condyl/terminal-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/terminalportfolio.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_terminalportfolio",
    },
    {
      title: "Recipe Discord Bot",
      href: "https://github.com/condyl/recipe-discord-bot",
      dates: "May 2023 - May 2023",
      active: true,
      description:
        "Developed a Discord bot which allows users to search for recipes and display ingredients and instructions.",
      technologies: ["Java", "Java Discord API"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/condyl/recipe-discord-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/recipebot.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_recipebot",
    },
  ],
  hackathons: [
    {
      title: "UOttaHack 7",
      dates: "January 17th - 19th, 2025",
      location: "Ottawa, ON",
      description:
        "Upcoming hackathon.",
      image:
        "/logos/uottahack7.png",
      placement: "",
      links: [
      ],
    },
    {
      title: "Sun Life's Fall 2024 CI Challenge",
      dates: "December 4, 2024",
      location: "Toronto, ON",
      description:
        "Pitched a new productivity tool to Sun Life executives.",
      image:
        "/logos/sunlife.png",
      placement: "Participant",
      links: [
      ],
    },
    {
      title: "Sun Life's Elevate CloudTech Hackathon",
      dates: "November 4th - 8th, 2024",
      location: "Toronto, ON",
      description:
        "Created an Amazon Q chat bot to help users find and consume documentation faster.",
      image:
        "/logos/sunlife.png",
      placement: 1,
      links: [
        {
          title: "Blog Post",
          icon: <NotebookIcon className="size-3" />,
          href: "https://notes.connorbernard.com/work/sun-life/weekly-recaps/week10"
        },
      ],
    },
  ],
} as const;
