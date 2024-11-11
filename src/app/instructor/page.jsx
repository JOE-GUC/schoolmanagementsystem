'use client'
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './page.module.css';

const Dashboard = () => {
  // Step 1: State to manage instructor data
  const [instructors, setInstructors] = useState([
    {
      name: 'John Doe',
      teacherId: '30293jhim482cjc',
      courses: 'Math 101',
      email: 'john@example.com',
    },
    // You can add other instructors here as default data
  ]);

  // Step 2: State to handle adding a new instructor
  const [newInstructor, setNewInstructor] = useState({
    name: '',
    teacherId: '',
    courses: '',
    email: '',
  });

  // Step 3: State to control visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstructor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddInstructor = (e) => {
    e.preventDefault();
    setInstructors((prevInstructors) => [
      ...prevInstructors,
      newInstructor,
    ]);
    setNewInstructor({ name: '', teacherId: '', courses: '', email: '' });
    setIsFormVisible(false); // Hide the form after adding an instructor
  };

  const handleDeleteInstructor = (teacherId) => {
    setInstructors((prevInstructors) =>
      prevInstructors.filter((instructor) => instructor.teacherId !== teacherId)
    );
  };

  const handleCopyInstructorId = (teacherId) => {
    navigator.clipboard.writeText(teacherId).then(() => {
      alert('Instructor ID copied to clipboard!');
    });
  };

  // Step 4: Toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev); // Toggle the visibility of the form
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
          <h2>Instructors</h2>

          {/* Toggle Button */}
          <button className={styles.toggleButton} onClick={toggleFormVisibility}>
            {isFormVisible ? 'Add user' : 'Add user'}
          </button>

          {/* Conditionally render the form */}
          {isFormVisible && (
            <form onSubmit={handleAddInstructor} className={styles.addForm}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newInstructor.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="teacherId"
                placeholder="TeacherID"
                value={newInstructor.teacherId}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="courses"
                placeholder="Courses"
                value={newInstructor.courses}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newInstructor.email}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className={styles.addButton}>
                Add Instructor
              </button>
            </form>
          )}

          {/* Table displaying the instructors */}
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>TeacherID</th>
                <th>Courses</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor) => (
                <tr key={instructor.teacherId}>
                  <td>{instructor.name}</td>
                  <td>{instructor.teacherId}</td>
                  <td>{instructor.courses}</td>
                  <td>{instructor.email}</td>
                  <td>
                    {/* Copy Instructor ID Button with Icon */}
                    <button
                      className={styles.dash}
                      onClick={() => handleCopyInstructorId(instructor.teacherId)}
                    >
                      <i className="fa fa-copy" aria-hidden="true"></i> Copy ID
                    </button>

                    {/* Delete Instructor Button with Icon */}
                    <button
                      className={styles.dashb}
                      onClick={() => handleDeleteInstructor(instructor.teacherId)}
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
