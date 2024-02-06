'use client'
import CardNoticia from "../CardNoticia"
import './style.css'
import {truncateWithEllipses} from '../../libs/truncateWithEllipses'

const LateralEsquerdo = ({noticia}) => {
    
    //noticia.texto = truncateWithEllipses(noticia.texto, 100)

    return (
        <div className="mais-popular">
            <div className="titulo">MAIS POPULAR</div>
            <CardNoticia noticia={noticia} />
        </div>
    )
}

export default LateralEsquerdo