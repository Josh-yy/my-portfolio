import torImg from "../assets/TOR.jpg";
import itamsImg from "../assets/ITAMS.png";
import animeImage from '../assets/anime_tracker/AnimeTracker.png'
import rocketImage from '../assets/CompareSite.png'
import cmsImage from '../assets/CMS.png'

const projects = [
  {
    id: "anime-tracker",
    title: "Anime Tracker",
    description:
      "Developed a PHP web app inspired by MyAnimeList with an anime database and tracking lists. Integrated the MAL API to display real-time data on top airing, upcoming, and popular anime.",
    tech: ["PHP", "MySQL", "JavaScript (jQuery)", "MAL API"],
    github: "https://github.com/Josh-yy/AnimeTracker",
    live: null,
    image: animeImage,
    documentation: false,
  },
  {
    id: "rocket-comparison",
    title: "Rocket Comparison System",
    description:
      "Nuxt 3 + Vue 3 app using SpaceX GraphQL API. Users can compare rockets, view upcoming launches, and filter launch history.",
    tech: ["Nuxt", "Vue", "TypeScript", "GraphQL (SpaceX API)"],
    github: "https://github.com/Josh-yy/NuxtExam",
    live: "https://nuxt-exam-gamma.vercel.app/",
    image: rocketImage,
    documentation: false,
  },
  {
    id: "content-management",
    title: "Content Management System",
    description:
      "Developed a CMS that allows users to create, manage, and publish website content without coding. Provided an intuitive interface for both technical and non-technical users.",
    tech: ["PHP", "JavaScript", "MySQL"],
    github: "https://github.com/Josh-yy/CMS",
    live: null,
    image: cmsImage,
    documentation: false,
  },
  {
    id: "tor_system",
    title: "Automated Transcript of Records System",
    description:
      "Built a web system to automate TOR preparation, review, approval, and printing. Included modules for student management, grade handling, and record verification.",
    tech: ["Laravel", "Laravel Excel", "JavaScript", "MySQL"],
    github: null,
    live: null,
    image: torImg,
    documentation: true,
    typeOfProject: "Internship Project",
    projectGoal:
      "The development of the Transcript of Records automation system is to help RIC staff transition from the traditional Excel-based TOR process into more efficient and automated solutions. The development of the TOR system is intended to assist in the preparation, rechecking, and management of approval and rejection workflows, as well as in facilitating the final printing of TORs—particularly benefiting staff who may not be technically proficient.",
    methodology: "Agile Methodology",
    functionality: [
      {
        name: "Uploading interface of traditional Excel-based method",
        image: ["/my-portfolio/tor/upload_interface.png"],
        description:
          "This is where the Excel is uploaded. It needs year and course for proper identification and to avoid duplication. The Excel file must follow a defined format before uploading.",
        tools: [
          {
            name: "Laravel Excel",
            url: "https://sampleurl.com"
          }
        ]
      },
      {
        name: "Main Interface After Upload",
        image: ['/my-portfolio/tor/main_interface.png'],
        description:
          "Displays student records uploaded from Excel. This interface supports full CRUD functionalities. The green eye icon indicates that the student's Transcript of Records (TOR) has been released. The blue pen icon is used to edit a student record, while the orange print icon is for preparing a new TOR. [See the next function for details on the preparation interface.]",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Transcript Preparation Interface",
        image: ["/my-portfolio/tor/prepare1.png", "/my-portfolio/tor/prepare2.png"],
        description:
          "This is where a student's Transcript of Records is prepared. All details of the final TOR are reviewed and finalized here. The interface is fully dynamic and supports CRUD operations for efficient management.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Pending Recheck Interface",
        image: ["/my-portfolio/tor/recheck.png"],
        description:
          "Since TORs are sensitive documents, they require thorough verification. After preparation, TORs are assigned to designated personnel for checking. This interface displays all prepared TORs awaiting rechecking.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Rechecking Interface",
        image: ["/my-portfolio/tor/manual_recheck1.png", "/my-portfolio/tor/manual_recheck2.png"],
        description:
          "In this interface, assigned personnel manually verify each piece of student data, from personal details to grades, one by one. This ensures that the TOR is accurate and ready for printing.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Status Interface",
        image: ["/my-portfolio/tor/status.png"],
        description:
          "The Status Interface serves as the final step before a TOR is officially released. Access is restricted to authorized personnel only and is managed by the administrator account. (Sensitive admin data is not displayed here.)",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Sample Final Output of a Released TOR",
        image: ["/my-portfolio/tor/final_tor.png"],
        description:
          "This is the final version of the Transcript of Records after all processing steps are completed. It is ready for printing whenever requested by the student.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      }

    ]
  },

  {
    id: "it_asset_management",
    title: "Asset Management System",
    description:
      "Replaced a Google Sheets-based asset tracking process with a web-based management system. Implemented QR code tagging for hardware/software assets, enabling faster updates and accurate reporting.",
    tech: ["PHP", "JavaScript", "MySQL"],
    github: null,
    live: null,
    image: itamsImg,
    documentation: true,
    typeOfProject: "Capstone Project",
    projectGoal:
    "The PHINMA - Education Network is composed of various educational institutions, each with its own set of IT assets. These assets are vital for ensuring that the institution delivers quality education and running its operations effectively. The management of several IT resources, including hardware, softwares, and licenses, is under the responsibility of the IT services department. Currently, asset management is done using a Google Sheet. Updating assets of a university manually in a Google Sheet can be difficult and takes a lot of effort, especially if there are a large number of assets. The aim of this proposal is to design and develop an IT asset management system that can effectively replace the current Google Sheets-based system and help the PHINMA - Education Network manage and monitor its IT assets effectively. This proposal also includes a system that will use QR-code tagging to track each asset and provide real-time information on the status of each asset.",
    methodology: "Software Development Life Cycle (SDLC)",
    functionality: [
      {
        name: "Landing Page / Home Page",
        image: [torImg],
        description:
        "Landing Page or Home Page of the IT Asset Management System. Upon login, users are directed to the dashboard, where they could see asset distribution graphs and the navigation menu on the left to access the features of the system.",
        tools: [
          {
            name: "Laravel Excel",
            url: "https://sampleurl.com"
          }
        ]
      },
      {
        name: "System Users Page",
        image: [torImg, torImg],
        description:
        "System Users Page, which was only visible to the Administrator interface. This is where new users are added, assigned a role and deactivated when they left the service of PHINMA.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Hardware Management Page",
        image: [torImg],
        description:
        "Hardware Management Page, which was only visible to the Administrator and IT Specialist interface. The page shows the list of all the hardware assets stored in the system which include their QR-code tag.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Asset Disposal Page",
        image: [torImg],
        description:
        "Asset Disposal Page, which was only visible to the Administrator and IT Specialist interface. This is where the hardware assets are configured if their status is for disposal.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Asset Disposed Report Analytics Page",
        image: [torImg],
        description:
        "Asset Disposed Report Analytics Page, which is only visible to the Administrator, IT Specialist, and Customer Service Manager/ Infrastructure Manager’s interface. It is composed of all the hardware assets that have been disposed of over the years.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "User Roles Configuration Page",
        image: [torImg],
        description:
        "User Roles Configuration Page, which is exclusively accessible through the Administrator's interface. This page allows the Administrator to set up and associate assignment types to specific user roles, determining which system areas are accessible to the system users.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      },
      {
        name: "Email Configuration Page",
        image: [torImg],
        description: 
        "Email Configuration Page, only visible to the Administrator’s interface. Users who can receive hardware disposal and software expiration email notifications are configured on this page and set the baseline (days) when to trigger the software expiration email notification to the users.",
        tools: [
          {
            name: null,
            url: null
          }
        ]
      }

    ]
  },

];

export default projects;
