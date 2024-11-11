// pages/api/courses.js

export default function handler(req, res) {
  const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch' },
    { id: 2, title: 'Node.js Fundamentals', description: 'Learn Node.js from scratch' },
    { id: 3, title: 'Python for Data Science', description: 'An introduction to Python for data science' },
  ];
  
  res.status(200).json(courses); // Return the courses as a JSON response
}
