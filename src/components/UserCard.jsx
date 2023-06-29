const userCard = (props) => {

    const {data} = props
 
     return(
        <article className="contenedor">
         <div className="Caja-suerte">
             <p className="frase1">{data.phrase}</p>
         </div>
         <div className="fuente">
             <p className="frase">{data.author}</p>
         </div>
        </article>
     )
 }
 
 export default userCard