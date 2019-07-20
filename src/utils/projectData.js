const projectData = [
    {
        name: 'Chatter',
        summary: 'Chatter is a real-time chat and communication application built with Node.js, Express and Socket.io.  It uses the Handlebars templating engine to render information processed on the server and client-side.  The application is also mobile responsive, and allows users to create chat rooms to discuss topics with friends, family, and more.',
        date: 'July 2019 - July 2019',
        images: 4,
        skills: {
            'Front-End Development': ['HTML5', 'CSS3', 'Handlebars', 'JavaScript (ES6)'],
            'Back-End Development': ['Node.js', 'Express', 'Socket.io'],
            'Quality Assurance & Testing': ['Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/chatter',
        liveLink: 'https://lhuddlesto-chatter.herokuapp.com/'

    },
    {
        name: 'Jamari Campbell Portfolio Site',
        summary: 'Jamari Campbell is a photographer and videographer based in Michigan. I provided a mobile responsive design for his photography and videography business.  It features a flexible gallery page with modals opening up to view the entire image.  My involvement in this project included wire framing, design and light project planning.',
        date: 'March 2019 - March 2019',
        skills: {
            'Design': ['Wireframing', 'Responsive Web Design', 'Adobe XD'],
        }
    },
    {
        name: 'Weather App',
        summary: 'Weather app is a web application that makes calls to the DarkSky API and the MapBox API in order to generate accurate weather data based on the location you provide.  The application utilizes asynchronous programming in order to get the job done.',
        date: 'May 2019 - June 2019',
        images: 2,
        skills: {
            'Front-End Development': ['HTML5', 'CSS3', 'Handlebars', 'JavaScript (ES6)'],
            'Back-End Development': ['Node.js', 'Express', 'Socket.io'],
            'Quality Assurance & Testing': ['Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/node-weather-site',
        liveLink: 'https://lhuddlesto-weather-app.herokuapp.com/'
    },
    {
        name: 'Task Manager API',
        summary: 'The Task Manager API is an API that handles creating, retrieving, updating and deleting tasks.  User data and task data are stored in a MongoDB Database, and it uses bcrypt to hash user passwords, along with JSON Web Tokens to handle authentication.  The application was unit tested with Jest in order to guarentee reliable functionality.',
        date: 'June 2019 - July 2019',
        skills: {
            'Back-End Development': ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
            'Quality Assurance & Testing': ['Jest', 'Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/task-manager-api/',
        liveLink: ''
    },
    {
        name: 'Modern Drum Machine',
        summary: 'The Modern Drum Machine is a digital drum machine that comes with two soundbanks, one based on modern trap sounds and the other based on old-school boom bap.  In total, there are 18 unique sounds, ranging from snares, claps, hihats, open hats, 808s and more.  It is a client-side, mobile-responsive application built with React.',
        date: 'December 2018 - January 2019',
        images: 2,
        skills: {
            'Front-End Development': ['HTML5', 'CSS3 (Sass)', 'JavaScript (ES6)', 'React'],
            'Design': ['Wireframing', 'Responsive Web Design', 'Adobe XD'],
            'Quality Assurance & Testing': ['Manual Testing']
        }
    },
    {
        name: 'Anime Quote Machine',
        summary: 'The Anime Quote Machine is a React application that generates randomized quotes from select anime characters.  Built with React.',
        date: 'January 2019 - January 2019',
        images: 3,
        skills: {
            'Front-End Development:': ['HTML5', 'CSS3 (Sass)', 'JavaScript (ES6)', 'React'],
            'Design': ['Wireframing', 'Responsive Web Design', 'Adobe XD'],
            'Quality Assurance & Testing': ['Manual Testing']
        }
    },
    {
        name: 'React Calculator',
        summary: 'Designed and developed a fully functional calculator with 10 digits, typical math operators and a second page with more advanced operators like percentage, exponents, powers, pi, and more.  Implemented responsive design with Rem units to ensure that the application function as cleanly on mobile devices.',
        date: 'February 2019 - March 2019',
        images: 3,
        skills: {
            'Front-End Development': ['HTML5', 'CSS3 (Sass)', 'JavaScript (ES6)', 'React'],
            'Design': ['Wireframing', 'Responsive Web Design', 'Adobe XD'],
            'Quality Assurance & Testing': ['Manual Testing']
        }
    }
]

export default projectData