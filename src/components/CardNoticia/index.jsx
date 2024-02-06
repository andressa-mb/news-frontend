'use client'
import { useState } from 'react'
import './style.css'

const CardNoticia = ({noticia}) => {
    const [isHover, setIsHover] = useState(false)
    console.log("Noticia", noticia)
    return(
        <div className="card-noticia">
            <div style={{ position: 'relative'}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
                <div className='popular' style={{opacity: isHover ? '1' : '0'}}>Clique aqui</div>
                <div className="imagem" style={{backgroundImage: `url(${noticia.img})`}}></div>
            </div>
            <h2>{noticia.titulo}</h2>
            {/* <img src={noticia.img} alt={noticia.titulo} /> */}
            <p dangerouslySetInnerHTML={{__html: noticia.texto }} />
            <div className="publicado-em">{new Date(noticia.createdAt).toLocaleDateString('pt-BR')}</div>
        </div>
    )
}

export default CardNoticia