import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';  // Import Link from next/link
import styles from './Sidebar.module.css';  // This is correct if the CSS is in the same folder as Sidebar.jsx

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>👋 Welcome back</div>
      <ul className={styles.menu}>
        <li>
          <Link href="/admin" className={styles.menuItem}>
            <FaHome className={styles.icon} /> Dashboard
          </Link>
        </li>
        <li>
          <Link href="/instructor" className={styles.menuItem}>
            <FaChalkboardTeacher className={styles.icon} /> Instructors
          </Link>
        </li>
        <li>
          <Link href="/student" className={styles.menuItem}>
            <FaUserGraduate className={styles.icon} /> Students
          </Link>
        </li>
        <li>
          <Link href="/courses" className={styles.menuItem}>
            <FaBook className={styles.icon} /> Courses
          </Link>
        </li>
        <li>
          <Link href="/admin/reports" className={styles.menuItem}>
            <FaChartBar className={styles.icon} /> Reports
          </Link>
        </li>
        <li>
          <Link href="/admin/settings" className={styles.menuItem}>
            <FaCog className={styles.icon} /> Settings
          </Link>
        </li>
        <li>
          <Link href="/logout" className={styles.menuItem}>
            <FaSignOutAlt className={styles.icon} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
