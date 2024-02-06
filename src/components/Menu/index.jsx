'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaBars, FaMugHot } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './style.css'


const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false)
    const router = useRouter()

    return(
        <>
            <nav className='menu'>
                <button onClick={() => setMenuLateral(!menuLateral)} style={{cursor: 'pointer'}}>
                    <FaBars size='30px' color='#333'/>
                </button>
                <div className='logo-container'>
                    <FaMugHot size='30px' color='#fccd07'/>
                    <div className='marca'>Logo</div>
                </div>
                <button className='login' onClick={() => router.push('/login')}>Login</button>
            </nav>

            {menuLateral &&
                <div className='menu_lateral'>
                    <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>
                        <IoMdClose size='30px' color='fccd07'/>
                    </div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/noticias/produto">Produto</a></li>
                        <li><a href="/noticias/tecnologia">Tecnologia</a></li>
                        <li><a href="/noticias/rh">RH</a></li>
                        <li><a href="/noticias/vendas">Vendas</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu;