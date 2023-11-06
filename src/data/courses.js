const courseModel = [{
    id: 1, // Unique identifier for the course
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: 'https://tse4.mm.bing.net/th?id=OIP.mbkErcaR48EUOiC89zFzxgHaEo&pid=Api&P=0&h=180', //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
    {
    week: 1,
    topic: 'Introduction to React Native',
    content: 'Overview of React Native, setting up your development environment.'
    },
    {
    week: 2,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
    },
    // Additional weeks and topics...
    ],
    students: [
    {
    id: 101,
    name: 'Alice',
    email: 'alice@example.com',
    },
    {
    id: 102,
    name: 'Bob ',
    email: 'bob@example.com',
    },],
    },
    //second Course
    {
        id: 2, // Unique identifier for the course
        name: 'Introduction to React.js',
        instructor: 'Will smith', // Name of the course instructor
        description: 'Learn the basics of React.js development and build your first web app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.dJTqBQy3mMnMdI8klN_kHAHaGT&pid=Api&P=0&h=180', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Smith',
        email: 'bob@example.com',
        },],
        },
        //third course
        {
            id: 3, // Unique identifier for the course
            name: 'Introduction to java',
            instructor: 'Himanshu', // Name of the course instructor
            description: 'Learn the basics of java.',
            enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
            thumbnail: 'https://tse1.mm.bing.net/th?id=OIP.OSpHUHUwvofjQNe7AJZ9eQHaEo&pid=Api&P=0&h=180', //Link to the course thumbnail
            duration: '8 weeks', // Duration of the course
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
            ],
            students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },],
            },
            //fourth course
            {
                id: 4, // Unique identifier for the course
                name: 'Introduction to python',
                instructor: 'krishna', // Name of the course instructor
                description: 'Learn the basics of python.',
                enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
                thumbnail: 'https://tse2.mm.bing.net/th?id=OIP.scZtKzM0T-sPYZxYBAJvRAHaIO&pid=Api&P=0&h=180', //Link to the course thumbnail
                duration: '8 weeks', // Duration of the course
                schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
                syllabus: [
                {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
                },
                {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
                },
                // Additional weeks and topics...
                ],
                students: [
                {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
                },
                {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
                },],
                },
                //fifth course
                {
                    id: 5, // Unique identifier for the course
                    name: 'Introduction to c++',
                    instructor: 'Rocky', // Name of the course instructor
                    description: 'Learn the basics of c++.',
                    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
                    thumbnail: 'https://tse4.mm.bing.net/th?id=OIP._Mq1T1IJe6cw14lre2cBzgHaE8&pid=Api&P=0&h=180', //Link to the course thumbnail
                    duration: '8 weeks', // Duration of the course
                    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                    location: 'Online',
                    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
                    syllabus: [
                    {
                    week: 1,
                    topic: 'Introduction to React Native',
                    content: 'Overview of React Native, setting up your development environment.'
                    },
                    {
                    week: 2,
                    topic: 'Building Your First App',
                    content: 'Creating a simple mobile app using React Native components.'
                    },
                    // Additional weeks and topics...
                    ],
                    students: [
                    {
                    id: 101,
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                    },
                    {
                    id: 102,
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                    },],
                    },
                    //sixth course
                    {
                        id: 6, // Unique identifier for the course
                        name: 'Introduction to Node.js',
                        instructor: 'Rocky', // Name of the course instructor
                        description: 'Learn the basics of Node.js.',
                        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
                        thumbnail: 'https://tse1.mm.bing.net/th?id=OIP.s5j5kFK-urpNTrVLlv9-ogHaEK&pid=Api&P=0&h=180', //Link to the course thumbnail
                        duration: '8 weeks', // Duration of the course
                        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                        location: 'Online',
                        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
                        syllabus: [
                        {
                        week: 1,
                        topic: 'Introduction to React Native',
                        content: 'Overview of React Native, setting up your development environment.'
                        },
                        {
                        week: 2,
                        topic: 'Building Your First App',
                        content: 'Creating a simple mobile app using React Native components.'
                        },
                        // Additional weeks and topics...
                        ],
                        students: [
                        {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                        },
                        {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                        },],
                        }
];
    export default courseModel;