import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  TerminalIcon,
  FileTextIcon,
  LightbulbIcon,
} from "lucide-react";

export const DATA = {
  name: "Connor Bernard",
  initials: "CB",
  url: "https://connorbernard.com",
  location: "Burlington, ON",
  locationLink:
    "https://www.google.com/maps/place/Burlington,+ON/@43.3812555,-79.8399195,11z/data=!3m1!4b1!4m6!3m5!1s0x882b63d2965d93b7:0xa44a27764c2b554f!8m2!3d43.3255196!4d-79.7990319!16zL20vMDE4ZGtf?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
  description: "Computer Science Student & Software Engineer",
  summary:
    "I'm a [3rd year Computer Science student at Brock University](#education) and am currently interning at [Shopify](#work_shopify).  I've completed some cool projects like a [3D interactive math game](#project_packing) and a [web interface for a mathematical knots program](#project_knots).  I'm currently working on a [course planner](#project_brocktimetable) for Brock University students.  If I'm not coding, I'm probably rock climbing.",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://notes.connorbernard.com",
      icon: NotebookIcon,
      label: "Notes & Blog",
    },
    { href: "/experiments", icon: LightbulbIcon, label: "Experiments" },
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
      company: "Shopify",
      href: "https://www.shopify.com/ca",
      badges: [],
      title: "Software Engineer Intern",
      logoUrl: "/logos/shopify.svg",
      start: "May 2025",
      end: "August 2025",
      description: "Big Middle team. Working on Shopify Plus.",
      id: "work_shopify",
    },
    {
      company: "Brock Computer Science Club",
      href: "https://brockcsc.ca",
      badges: [],
      title: "Club Executive & Software Developer",
      logoUrl: {
        light: "/logos/brockcsc-light.svg",
        dark: "/logos/brockcsc-dark.svg",
      },
      start: "January 2025",
      end: "Present",
      description:
        "Built the frontend of the club's merch store.  Helped plan & host club events and workshops.",
      id: "work_brockcsc",
    },
    {
      company: "Sun Life",
      href: "https://www.sunlife.ca/en/",
      badges: [],
      title: "Software Engineer Intern",
      logoUrl: "/logos/sunlife.png",
      start: "September 2024",
      end: "December 2024",
      description:
        "Won 1st place in Sun Life's Elevate CloudTech Hackathon.  Developed internal tools using Java and Adobe Experience Manager.",
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
      imageBackgroundColor: "#CD0002",
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
      description:
        "82% overall average.  84% major average.  3rd year Computer Science student.",
      imageBackgroundColor: "#CD0002",
    },
  ],
  projects: [
    {
      title: "Stackmate",
      order: 1,
      href: "https://github.com/condyl/stackmate",
      dates: "February 2025 - February 2025",
      active: true,
      description:
        "Created a CLI tool to help users skip the tech stack selection & creation process. Built for Hack Canada 2025.",
      technologies: ["Python"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/condyl/stackmate",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "DoraHacks",
          href: "https://dorahacks.io/buidl/23033",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/stackmate.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_stackmate",
    },
    {
      title: "GamePigeon Word Games Bot",
      order: 2,
      href: "https://github.com/condyl/word-games-bot",
      dates: "January 2025 - Present",
      active: true,
      pinned: true,
      description:
        "Created a bot to play the word games in GamePigeon.  The bot can play Word Hunt, Anagrams, and Word Bites, and gets incredibly high scores in all of them.  Completely automated, no human input required.  The bot uses OpenCV to capture the screen, EasyOCR to read the letters, and Quartz to control the mouse.",
      technologies: ["Python", "OpenCV", "EasyOCR", "Quartz"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/condyl/word-games-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gamepigeon.png",
      video: "",
      companyName: "",
      companyLogo: "",
      id: "project_gamepigeon",
    },
    {
      title: "AI Resume Builder",
      order: 3,
      href: "https://resumecreator.connorbernard.com/",
      dates: "November 2024 - January 2025",
      active: true,
      description:
        'Built a fullstack web application which allows users to easily create LaTeX resumes.  The goal was to have an easy to use interface, with a quick resume generation time.  I have also implemented Supabase for authentication and saving resumes to the cloud.  There have also been multiple user customization options added.  I have also added a "AI dot jot improver" which allows users to improve their dot points instantly with AI.',
      technologies: [
        "React.js",
        "Express.js",
        "TailwindCSS",
        "OpenAI API",
        "Supabase",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/condyl/resume-creator",
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
      title: "TurboKnots Web Interface",
      order: 4,
      pinned: true,
      href: "https://test.cariboutests.com/games/knots",
      dates: "May 2024 - December 2024",
      active: true,
      description:
        "The TurboKnots web interface project modernizes Professor Thomas Wolf's Linux-based knot theory software by creating a platform-independent, web-based interface. This interface supports real-time knot simplification, visualization, and complex calculations while accommodating multiple encoding formats like DT notation and 4-tuple encoding. It addresses accessibility challenges of the original software, enabling researchers, educators, and students to manipulate and analyze complex knots with ease. Key achievements include restoring outdated functionalities, resolving technical hurdles, and implementing advanced features like random knot generation and dynamic knot adjustments. Future improvements aim to enhance performance and scalability through optimized database handling and expanded features.",
      technologies: ["JavaScript", "PHP", "SQLite", "JQuery"],
      links: [
        {
          type: "Live Demo",
          href: "https://test.cariboutests.com/games/knots",
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
      title: "Brock Visual Timetable",
      order: 5,
      pinned: true,
      href: "https://brocktimetable.com",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Created an interactive course planner for Brock University students to easily plan their courses and generate a timetable.  The goal was to make course planning simple, as opposed to the current PDF of a timetable so you can plan it on paper.  This tool lets users input their courses and view all available combinations of courses.  There have also been many quality of life features added, such as being able to block out time for other activities, easily sort schedules by time spent waiting, minimum number of days in class, and more.",
      technologies: ["JavaScript", "React.js", "Express.js", "MaterialUI"],
      links: [
        {
          type: "Live Demo",
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
      title: "Ruby Discord Bot",
      order: 6,
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
      title: "Packing Game",
      order: 7,
      pinned: true,
      href: "https://cariboutests.com/games/packing.php",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        'The Packing project at Caribou Contests transformed a vague GitHub issue into an engaging online 3D puzzle game inspired by John Conway\'s "Conway Puzzle." Using three.js, the game features a customizable grid, dynamic shape placement, and interactive gameplay, allowing players to solve puzzles by arranging 3D shapes. Over two weeks, a playable MVP was developed, followed by months of refining features like variable grid sizes, JSON-based puzzle loading, improved lighting, and enhanced UI/UX. The game was designed for flexibility, enabling future developers to easily add puzzles, and now features multiple levels, user-friendly controls, and celebratory fireworks for wins.',
      technologies: ["JavaScript", "Three.js", "PHP", "SQL"],
      links: [
        {
          type: "Live Demo",
          href: "https://cariboutests.com/games/packing.php",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Blog Post",
          href: "https://notes.connorbernard.com/work/caribou-contests/Packing",
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: "/projects/packing.png",
      video: "",
      companyName: "Caribou Contests",
      companyLogo: "/logos/caribou.svg",
      id: "project_packing",
    },
    {
      title: "Terminal Portfolio",
      order: 8,
      href: "https://terminal.connorbernard.com",
      dates: "Febuary 2024 - Febuary 2024",
      active: true,
      description:
        "Created a terminal portfolio using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Live Demo",
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
      id: "project_terminal",
    },
    {
      title: "Recipe Discord Bot",
      order: 9,
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
      title: "TerraHacks 2025",
      dates: "April 1st - 3rd, 2025",
      location: "Toronto, ON",
      description:
        "Created a healthcare chatbot resembling Big Hero 6's Baymax.",
      image: "/logos/terrahacks.jpeg",
      placement: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/condyl/terrahacks2025-2",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="size-3" />,
          href: "https://devpost.com/software/baymax-lite?ref_content=user-portfolio&ref_feature=in_progress",
        },
      ],
    },
    {
      title: "Shopify Hack Days 38",
      dates: "May 28th - 30th, 2025",
      location: "Toronto, ON",
      description:
        "Created a 3D mall world using React Three Fiber where users can walk around and explore different Shop.app stores.",
      image: "/logos/hackdays38.png",
      placement: "",
      links: [],
    },
    {
      title: "Hack Canada 2025",
      dates: "February 21th - 23th, 2025",
      location: "Waterloo, ON",
      description:
        "Created a CLI tool to help users skip the tech stack selection & creation process.",
      image: "/logos/hack-canada.svg",
      placement: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/condyl/stackmate",
        },
        {
          title: "DoraHacks",
          icon: <Icons.globe className="size-3" />,
          href: "https://dorahacks.io/buidl/23033",
        },
      ],
    },
    {
      title: "UOttaHack 7",
      dates: "January 17th - 19th, 2025",
      location: "Ottawa, ON",
      description:
        "Built a webapp to help users find & book parking spots. Experimented with computer vision & object recognition to streamline user input.",
      image: "/logos/uottahack7.png",
      placement: "",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="size-3" />,
          href: "https://usepitstop.gadget.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/condyl/pitstop",
        },
        {
          title: "DoraHacks",
          icon: <Icons.globe className="size-3" />,
          href: "https://dorahacks.io/buidl/21688",
        },
      ],
    },
    {
      title: "Sun Life's Fall 2024 CI Challenge",
      dates: "December 4, 2024",
      location: "Toronto, ON",
      description: "Pitched a new productivity tool to Sun Life executives.",
      image: "/logos/sunlife.png",
      placement: "",
      links: [],
    },
    {
      title: "Sun Life's Elevate CloudTech Hackathon",
      dates: "November 4th - 8th, 2024",
      location: "Toronto, ON",
      description:
        "Created an Amazon Q chat bot to help users find and consume documentation faster.",
      image: "/logos/sunlife.png",
      placement: 1,
      links: [
        {
          title: "Blog Post",
          icon: <NotebookIcon className="size-3" />,
          href: "https://notes.connorbernard.com/work/sun-life/weekly-recaps/week10",
        },
      ],
    },
  ],
} as const;
