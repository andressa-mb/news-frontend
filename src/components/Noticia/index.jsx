'use client'
import './style.css'

// const Noticia = ({noticia}) => {
//     return (
//         <div>
//             <img src={noticia.img} alt="noticia" />
//             <div>{noticia.titulo}</div>
//             <div dangerouslySetInnerHTML={{ __html: noticia.texto}} />
//             <div>{noticia.createdAt}</div>
//         </div>
//     )
// }

//
//q é esse valor q vou por agora, o nome dele era valorNoticiaDoBack la no outro arquivo
// só q com esse nome vai ficar confuso rsrs
// ai olha oq ele fez la do outro arquivo ta vindo esse valor q é um objeto
//mas ele nao quer ter q ficar botando 2 pontos pq oq ele teria q fazer é isso ó
// valorObjeto.valorNoticiaDoBack q é o objeto q ta vindo de la 
// let valorObjeto = {
//     valorNoticiaDoBack
// }
// seria tipo isso ai oq ele fez ele pegou só o valor interno
// let {valorNoticiaDoBack} = {
//     valorNoticiaDoBack
// }
// const Noticia = ({valorNoticiaDoBack}) => {
    //Sem abreviar
// const Noticia = (valorObjeto) => {
//     return (
//         <div>
//             <img src={valorObjeto.nomeDaProp.img} alt="noticia" />
//             <div>{valorObjeto.nomeDaProp.titulo}</div>
//             <div dangerouslySetInnerHTML={{ __html: valorObjeto.nomeDaProp.texto}} />
//             <div>{valorObjeto.nomeDaProp.createdAt}</div>
//              <h2>{valorObjeto.segundaProp}</h2>
//         </div>
//     )
// }
//"Abreviando" = destructuring
const Noticia = ({nomeDaProp}) => {
    return (
        <div className='noticia'>
            <div className="imagem" style={{backgroundImage: `url(${nomeDaProp.img})`}}></div>
            <div className='titulo'>{nomeDaProp.titulo}</div>
            <div className="publicado-em">{new Date(nomeDaProp.createdAt).toLocaleDateString('pt-BR')}</div>
            <div className='texto' dangerouslySetInnerHTML={{ __html: nomeDaProp.texto}} />
            
        </div>
    )
}
// valorObjeto = {
//     nomeDaProp
//     segundaProp
// }

export default Noticia