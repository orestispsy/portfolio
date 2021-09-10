let projects = [
    {
        id: 0,
        flag: "zero",
        name: "Portfolio",
        description: "Portfolio!",
        preview: "./../previewPortfolio.jpg",
        url: "https://zero-psy.herokuapp.com",
        git: "https://github.com/orestispsy/zero-psy",
        pics: [{ pic: "./../projectPics/pf1.jpg" }],
    },
    {
        id: 1,
        flag: "one",
        hot: true,
        name: "The Gig Guide",
        description: `The main idea behind the Gig Guide was to bring some order in the life of a rock n roll
        band touring the planet, helping them store their own concert agenda. Too many gigs,
        needing a database and then some Javascript magic to happen ! Then let the fans take part in it
        and give them the opportunity to interact through chat & private messages, community posts and
        contributions of their own material, inside the concert database. This is an overall demonstration
        of my Front & Backend experience, featuring React.js, Express.js, Redux, Socket.io & PostgreSQL.`,

        features: [
            "Register/Login",
            "Global Gig Map",
            "Add/Edit Gig Entry Section",
            "Coordinates Finder",
            "Poster Gallery/Editor",
            "Gig Entry Timeline",
            "Gig User Photo/Comment Contribution",
            "Star Wars Intro Style Gig Entries Animation",
            "Chat Room",
            "Chat Online Users",
            "User Enters/Exits Notifications & Sounds",
            "Chat Color & User Photo Options",
            "Custom Chat Emojis",
            "Music Ticker",
            "Visitors Counter",
            "User Network",
            "Admin Mode - Full Site View",
            "Super Admin Mode - User Rights Controls",
            "Chat Private Mode & Private Message Notifications",
        ],

        stack: [
            "React.js",
            "Node.js",
            "Express.js",
            "Redux",
            "Socket.io",
            "PostgreSQL",
            "S3 AWS",
            "Google Maps Api",
        ],
        preview: "./../preview1kg.jpg",
        url: "https://thousandgigs.herokuapp.com",
        git: "https://github.com/orestispsy/thousandgigsguide",
        pics: [
            { pic: "./../projectPics/gg1.jpg" },
            { pic: "./../projectPics/gg2.gif" },
            { pic: "./../projectPics/gg3.jpg" },
            { pic: "./../projectPics/gg4.gif" },
            { pic: "./../projectPics/gg5.jpg" },
            { pic: "./../projectPics/gg6.jpg" },
            { pic: "./../projectPics/gg7.jpg" },
            { pic: "./../projectPics/gg8.jpg" },
            { pic: "./../projectPics/gg9.gif" },
            { pic: "./../projectPics/gg10.jpg" },
            { pic: "./../projectPics/gg11.jpg" },
            { pic: "./../projectPics/gg12.gif" },
            { pic: "./../projectPics/gg13.gif" },
        ],
    },
    {
        id: 2,
        flag: "two",
        name: "Social Network",
        description:
            "Under The Surface - Social Network. In this project I am landing into the React World. Understanding Component & State Use. Practicing Redux to build features like make/accept/deny friend requests & Socket.io to implement my first Chat Room ever !",
        preview: "./../previewSocialNetwork.jpg",
        url: false,
        git: "https://github.com/orestispsy/UnderTheSea-SocialNetwork",
        pics: [
            { pic: "./../projectPics/sn1.jpg" },
            { pic: "./../projectPics/sn2.jpg" },
            { pic: "./../projectPics/sn3.gif" },
            { pic: "./../projectPics/sn4.jpg" },
            { pic: "./../projectPics/sn5.gif" },
            { pic: "./../projectPics/sn6.jpg" },
        ],
    },
    {
        id: 3,
        flag: "three",
        name: "Imageboard",
        description:
            "My very first steps into Vue.js. In this application I am building an imageboard while using Amazon Web Services to store User photos on the Cloud.",
        preview: "./../previewImageboard.jpg",
        url: "https://calm-island-91653.herokuapp.com/",
        git: "https://github.com/orestispsy/vue-imageboard",
        pics: [
            { pic: "./../projectPics/ib1.jpg" },
            { pic: "./../projectPics/ib2.gif" },
            { pic: "./../projectPics/ib3.jpg" },
        ],
    },
    {
        id: 4,
        flag: "four",
        name: "Petition",
        description:
            "A project made through my days in the Spiced Academy Bootcamp. Starting coding back-end with Node.js & Express.js, introducing register/login Section, CRUD operations & HTML Canvas drawing for the signing user ! Built with Javascript & Handlebars.",
        preview: "./../previewPetition.jpg",
        url: "https://warm-spire-33241.herokuapp.com/",
        git: "https://github.com/orestispsy/Bootcamp-Petition-Project",
        pics: [
            { pic: "./../projectPics/pt1.jpg" },
            { pic: "./../projectPics/pt2.gif" },
            { pic: "./../projectPics/pt3.jpg" },
            { pic: "./../projectPics/pt4.jpg" },
        ],
    },
    {
        id: 5,
        flag: "five",
        name: "Connect4",
        description:
            "What to say about this project ! You were a kid too, right !? Connect4 ! The classic game made from scratch with the use of jQuery. Go for Horizontal, Vertical & Diagonal victories in 2-Player Mode. Watch my first steps playing with animation events and don't forget to click the 'Hit Me' Button !  ",
        preview: "./../connect4/preview.jpg",
        url: "/connect4/index.html",
        git: "https://github.com/orestispsy/zero-psy/tree/master/client/public/connect4",
        pics: [
            { pic: "./../projectPics/c41.jpg" },
            { pic: "./../projectPics/c42.jpg" },
            { pic: "./../projectPics/c43.jpg" },
            { pic: "./../projectPics/c44.gif" },
        ],
    },
    {
        id: 6,
        flag: "six",
        name: "spotiFIRE!",
        description:
            "The SpotiFIRE ! In this project I am practicing with asynchronous HTTP/Ajax requests with jQuery for the first time. Calling an external api which retrieves data libraries from Spotify and throws the results on screen. A Spotify search-engine, just outside of it ! Give it a try and have patience for a couple of seconds while waiting for the results. Sometimes free data needs time on its way back home ! ",
        preview: "./../spotiFIRE/preview.jpg",
        url: "/spotiFIRE/index.html?scroll=infinite",
        git: "https://github.com/orestispsy/zero-psy/tree/master/client/public/spotiFIRE",
        pics: [
            { pic: "./../projectPics/sf1.jpg" },
            { pic: "./../projectPics/sf2.jpg" },
            { pic: "./../projectPics/sf3.gif" },
        ],
    },
];

export default {
    projects,
};
