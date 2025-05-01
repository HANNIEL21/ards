import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    const navigate = useNavigate();
    return (
        <header className='flex items-center justify-between px-10 p-4 fixed top-0 left-0 w-full z-50'>
            <a href="">
                <img src="" alt="" />
            </a>
            
            <Button onClick={() => navigate("/login")}>Login</Button>
        </header>
    )
}

export default Header