'use client'
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './page.module.css';

const Dashboard = () => {
  // Step 1: State to manage student data
  const [students, setStudents] = useState([
    {
      name: 'John Doe',
      studentId: '30293jhim482cjc', // Unique ID for the student
      courses: 'Math 101',
      email: 'john@example.com',
      enrollDate: '11/11/2024', // Default date
    },
    // Other students can be added here as default data
  ]);

  // Step 2: State to handle adding a new student
  const [newStudent, setNewStudent] = useState({
    name: '',
    studentId: '', // Will be generated when added
    courses: '',
    email: '',
    enrollDate: '', // Will be set to today's date when added
  });

  // Step 3: State to control visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a new student
  const handleAddStudent = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString(); // Get today's date
    const newStudentWithId = {
      ...newStudent,
      studentId: `STU${Date.now()}`, // Generate unique student ID using timestamp
      enrollDate: currentDate, // Set the current date as enroll date
    };

    setStudents((prevStudents) => [...prevStudents, newStudentWithId]);
    setNewStudent({ name: '', studentId: '', courses: '', email: '', enrollDate: '' });
    setIsFormVisible(false); // Hide the form after adding the student
  };

  // Handle deleting a student
  const handleDeleteStudent = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.studentId !== studentId)
    );
  };

  // Handle copying the student ID to clipboard
  const handleCopyStudentId = (studentId) => {
    navigator.clipboard.writeText(studentId).then(() => {
      alert('Student ID copied to clipboard!');
    });
  };

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Course Management System</h1>
          <input type="text" className={styles.search} placeholder="Search..." />
        </header>

        <div className={styles.dashboard}>
          <h2>Students</h2>

          {/* Toggle Button */}
          <button className={styles.toggleButton} onClick={toggleFormVisibility}>
            {isFormVisible ? 'Close Form' : 'Add Student'}
          </button>

          {/* Conditionally render the form */}
          {isFormVisible && (
            <form onSubmit={handleAddStudent} className={styles.addForm}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newStudent.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="courses"
                placeholder="Courses"
                value={newStudent.courses}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newStudent.email}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className={styles.addButton}>
                Add Student
              </button>
            </form>
          )}

          {/* Table displaying the students */}
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Profile</th>
                <th>StudentID</th>
                <th>Enroll Date</th>
                <th>Course</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.studentId}>
                  <td>{student.name}</td>
                  <td>{student.studentId}</td>
                  <td>{student.enrollDate}</td>
                  <td>{student.courses}</td>
                  <td>{student.email}</td>
                  <td>
                    {/* Copy Instructor ID Button with Icon */}
                    <button
                      className={styles.dash}
                      onClick={() => handleCopyStudentId(student.studentId)}
                    >
                      <i className="fa fa-copy" aria-hidden="true"></i> Copy ID
                    </button>

                    {/* Delete Instructor Button with Icon */}
                    <button
                      className={styles.dashb}
                      onClick={() => handleDeleteStudent(student.studentId)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
