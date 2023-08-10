module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Jagpreet Grewal',
    // Main Site Title
    title: `Jagpreet Grewal | SFU Engineering Co-op Student`,
    // Description that goes under your name in main bio
    description: `Seeking an internship for September 2023.`,
    // Optional: Github account URL
    github: `https://github.com/JagpreetGrewal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/jagpreet-g-587977105/`,
    // Content of the About Me section
    about: `Hello! I am a SFU Engineering Co-op Student in my final year of undergrad. I like reading, working out, and travelling. In the future, I plan on completing a Master's degree in Business or in a Big Data field - right now, I am eager to get into the workplace. I have previous co-op experience with Microserve, where I worked as a Deployment Technician for eight months.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'I forked Devfolio to build this website. It is a zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'KickPro',
        description:
          `I designed a dynamic, human-tracking soccer training system with a team of engineers. I contributed Python code to track the positions of players and goals, and to implement the GUI.
          I was also responsible for configuring micro-controllers such as the Raspberry Pi and Nvidia Jetson Nano.`,
        link: 'https://github.com/minhphat97/Capstone/tree/Henry',
      },
      {
        name: 'Yet Another Storage Engine',
        description:
          `Worked diligently for several months to implement a simple database engine. I produced a Buffer Manager, Log, Lock, and many other modules in C++. 
          No link is provided due to the stipulations of the project.`,
        link:``,
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Microserve',
        description: 'Deployment Technician, January 2021 - August 2021',
        link:``,
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Software',
        description:
          `C++, C, Python, ReactJS, Javascript, CMake, Azure, SQLite, VHDL, Windows, Linux, Docker, VMwar`,
        link:``,
      },
      {
        name: 'Hardware',
        description: `Soldering, PCB Board assembly, FPGAs, DMMs, Power Supplies, Oscilloscopes, Function Generators, Breadboard, Sensors, Raspberry Pi, Nvidia Jetson Nano`,
        link:``,
      },
      {
        name: 'Programs',
        description:
          `Word, Excel, PowerPoint, Visual Studio Code, Visual Studio, Adobe Photoshop, MATLAB, Quartus, ModelSim-Altera`,
        link:``,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
