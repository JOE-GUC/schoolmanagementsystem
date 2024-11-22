"use client"; // Marks this file as a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for `app` directory
import Sidebar from '../../components/Sidebar';
import styles from './page.module.css';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulated authentication check
    const isAuthenticated = localStorage.getItem('user'); // Or use your auth method

    if (!isAuthenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Course Management System</h1>
          <input type="text" className={styles.search} placeholder="Search..." />
        </header>
        <div className={styles.dashboard}>
          <h2>Instructor Dashboard</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Courses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data */}
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Math 101</td>
                <td>
                  <button className={styles.dash}>Edit</button>
                  <button className={styles.dashb}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
