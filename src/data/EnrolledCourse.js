const enrolledCourse = [{
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
      },]
      }];

      export default enrolledCourse;