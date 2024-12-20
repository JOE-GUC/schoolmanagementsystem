'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './page.module.css';

const Dashboard = () => {
  // Step 1: State to manage course data
  const [courses, setCourses] = useState([
    {
      name: 'Math 101',
      teacherId: '30293jhim482cjc',
      instructor: 'John Doe',
      duration: '3 months',
      students: [], // List of students enrolled in the course
    },
    // You can add other courses here as default data
  ]);

  // Step 2: State to handle adding a new course
  const [newCourse, setNewCourse] = useState({
    name: '',
    teacherId: '',
    instructor: '',
    duration: '',
  });

  // Step 4: State to control visibility of the form
  const [isCourseFormVisible, setIsCourseFormVisible] = useState(false);

  // Handle input changes for adding a course
  const handleCourseInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a new course
  const handleAddCourse = (e) => {
    e.preventDefault();
    setCourses((prevCourses) => [
      ...prevCourses,
      { ...newCourse, students: [] }, // Initialize with empty student list
    ]);
    setNewCourse({ name: '', teacherId: '', instructor: '', duration: '' });
    setIsCourseFormVisible(false); // Hide the form after adding the course
  };

  // Handle deleting a course
  const handleDeleteCourse = (teacherId) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.teacherId !== teacherId)
    );
  };

  // Toggle the visibility of course form
  const toggleCourseFormVisibility = () => {
    setIsCourseFormVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1>School Management System</h1>
          <input type="text" className={styles.search} placeholder="Search..." />
        </header>

        <div className={styles.dashboard}>
          <h2>Courses</h2>

          {isCourseFormVisible && (
            <form onSubmit={handleAddCourse} className={styles.addForm}>
              <input
                type="text"
                name="name"
                placeholder="Course Name"
                value={newCourse.name}
                onChange={handleCourseInputChange}
                required
              />
              <input
                type="text"
                name="teacherId"
                placeholder="Teacher ID"
                value={newCourse.teacherId}
                onChange={handleCourseInputChange}
                required
              />
              <input
                type="text"
                name="instructor"
                placeholder="Instructor Name"
                value={newCourse.instructor}
                onChange={handleCourseInputChange}
                required
              />

              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={newCourse.duration}
                onChange={handleCourseInputChange}
                required
              />

              <button type="submit" className={styles.addButton}>
                Enroll
              </button>
            </form>
          )}

          {/* Courses Table */}
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Duration</th>
                <th>Enrolled Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.teacherId}>
                  <td>{course.name}</td>
                  <td>{course.instructor}</td>
                  <td>{course.duration}</td>
                  <td>{course.students.length}</td>
                  <td>
                    <button
                      className={styles.dash}
                      onClick={toggleCourseFormVisibility}
                    >
                      <i className="fa fa-user-plus" aria-hidden="true"></i> Enroll
                    </button>
                    <button
                      className={styles.dashb}
                      onClick={() => handleDeleteCourse(course.teacherId)}
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