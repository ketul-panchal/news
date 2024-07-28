import React from 'react'
import styles from "@/app/components/NavBar/nav.module.css"

const Nav = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.logo}>
                .News
            </div>
            {/* <div className={styles.options}>
                <ul>
                    <li>Home</li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default Nav