import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import styles from './Sidebar.module.css';  // This is correct if the CSS is in the same folder as Sidebar.jsx

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>👋 Welcome back</div>
      <ul className={styles.menu}>
        <li>
          <a href="/admin" className={styles.menuItem}>
            <FaHome className={styles.icon} /> Dashboard
          </a>
        </li>
        <li>
          <a href="/instructor" className={styles.menuItem}>
            <FaChalkboardTeacher className={styles.icon} /> Instructors
          </a>
        </li>
        <li>
          <a href="/student" className={styles.menuItem}>
            <FaUserGraduate className={styles.icon} /> Students
          </a>
        </li>
        <li>
          <a href="/courses" className={styles.menuItem}>
            <FaBook className={styles.icon} /> Courses
          </a>
        </li>
        <li>
          <a href="/admin/reports" className={styles.menuItem}>
            <FaChartBar className={styles.icon} /> Reports
          </a>
        </li>
        <li>
          <a href="/admin/settings" className={styles.menuItem}>
            <FaCog className={styles.icon} /> Settings
          </a>
        </li>
        <li>
          <a href="/logout" className={styles.menuItem}>
            <FaSignOutAlt className={styles.icon} /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
