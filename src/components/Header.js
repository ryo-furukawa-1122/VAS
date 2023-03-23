import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
    return (
        <header className='flex justify-between py-4 px-3 top-0 shadow-sm sticky bg-slate-50 dark:bg-slate-900 bg-opacity-30 dark:bg-opacity-30 z-10 items-center'>
            <img className='w-[70px] h-auto' src="./vasLogo.svg" alt="logo"></img>
            <ThemeSwitch />
        </header>
    )
}

export default Header