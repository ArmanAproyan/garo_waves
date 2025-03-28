import React from 'react'
import styles from './style.module.scss'
import navs from '../../Constants/nav'
import scrollToElement from '@/app/utils/scroll'

interface ImenueModaleProp {
  isOpen: boolean,
  closeModal: () => void
}

const MenuModale: React.FC<ImenueModaleProp> = ({ isOpen, closeModal }) => {

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      console.log('clicked')
      closeModal(); 
    }
  }

  return (
    <div
      onClick={handleCloseModal}
      className={`${styles.container} ${isOpen ? styles.container_active : ''}`}
    >
      <div className={`${styles.modal} ${isOpen ? styles.active : ''}`}>
        <nav className={`${styles.navList} ${isOpen ? styles.navList_active : ''}`}>
          {navs.map((val) => (
            <div onClick={() => {
              closeModal()
              scrollToElement(`#${val.scrollName}`)
            }} key={val.id}  className={styles.navLinks}>
              {val.name}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MenuModale
