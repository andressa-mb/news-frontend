'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Noticia from '../../../components/Noticia/index.jsx'
import LateralEsquerdo from '@/components/LateralEsquerdo/index.jsx'
import LateralDireito from '@/components/LateralDireito/index.jsx'
import './style.css'

// const HomePage = () => {
//     const [noticias, setNoticias] = useState([]);

//     const getNoticias = async () => {
//         try {
//             const result = await axios.get('http://localhost:8080/noticias')
//             setNoticias(result.data);
//         } catch (error) {
//             alert(error.response.data.message);
//         }
//     }

//     useEffect(() => {
//         getNoticias();
//     }, []);

//     return(
//         <div>
//             <h1 style={{padding: '10px 0', textAlign: 'center'}}>Home</h1>
//             {
//                 noticias.map(noticia => 
//                     <Noticia key={noticia.id} noticia={noticia} />)
//             }
//         </div>
//     );
// }

const HomePage = () => {
    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try {
            const result = await axios.get('http://localhost:8080/noticias')
            setNoticias(result.data);
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    useEffect(() => {
        getNoticias();
    }, []);

    return(
        <div className='grid-home'>
            <LateralEsquerdo noticia={noticias[0]} />
            <div>
                {
                    noticias.map(valorNoticiaDoBack => 
                        <Noticia key={valorNoticiaDoBack.id} nomeDaProp={valorNoticiaDoBack}/>)
                }
            </div>
            <LateralDireito noticia={noticias[0]}/>
        </div>
    );
}

export default HomePage