'use client'
import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import About from './components/About'
import TicketPurchase from './components/TicketPurchase'
import ClientMusic from './components/ClientMusic'
import MusicLinks from './components/MusicList/MusicLists'
import Footer from './components/Footer'
import MenuModale from './components/MenuModal'
import { useState } from 'react'

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenue = () => {
    setOpenMenu(true)
  };

  const handleCloseMenu = () => {
    setOpenMenu(false)
  }


  return (
    <div>
      <Header openMenu={handleOpenMenue} closeMenu={handleCloseMenu} isOpen={openMenu} />
      <Main />
      <About />
      <TicketPurchase />
      <MusicLinks />
      <ClientMusic />
      <MenuModale isOpen={openMenu} closeModal={handleCloseMenu} />
      <Footer />
    </div>
  )
}

export default Home