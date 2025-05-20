import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const Layout = () => {
    
  return (
    <>
        <div className="container-layout flex flex-col items-center justify-center">
            <header className='h-[8vh] mb-4'>
                <Header/>
            </header>
            <main className='h-full lg:h-[80vh] flex items-center justify-center'>
                <Outlet/>
            </main>
            <footer className='h-[5vh] mt-4'>
                <Footer/>
            </footer>
        </div>
    </>
  )
}

export default Layout