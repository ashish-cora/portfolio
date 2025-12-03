import { useState } from 'react'
import Hamburger from '../Hamburger'
import styles from './Header.module.css'

const Header = () => {
  const menuContents = ['About', 'Experience', 'Example', 'Projects', 'CV', 'Contact'];

  return (
    <div className={styles.headerDiv}>
      <Hamburger menuContents={menuContents}/>
    </div>
  )
}
export default Header