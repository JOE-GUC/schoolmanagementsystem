'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';  // Import Link from next/link

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className={styles.logincontainer}>
          <h2>Log In</h2>
          <form>
            <div className={styles.inputContainer}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={styles.inputstyle}
              />
            </div>
            <div className={styles.inputContainer}>
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                required
                className={styles.inputstyle}
              />
              <i
                className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                aria-hidden="true"
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#33333372',
                }}
              ></i>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: 'skyblue', color: 'white' }}
              className={styles.buttonstyle}
            >
              LOG IN
            </button>
          </form>

          {/* Updated Link to use Next.js routing */}
          <Link href="#" className={styles.forgotPassword}>
            Forgot password?
          </Link>
        </div>
      </div>
    </>
  );
}
