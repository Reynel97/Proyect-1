
import {useState} from 'react'
import './App.css'
import UserCard from './components/userCard'
import phrases from './data/phrases.json'



function App() {


const photo = ['/fortuna-2/fortuna-2/fondo1.png', '/fortuna-2/fortuna-2/fondo2.png', '/fortuna-2/fortuna-2/fondo3.png', '/fortuna-2/fortuna-2/fondo4.png']
const [index, useIndex ] = useState(0)
const [foto, useFoto] = useState(0)

const cambiarFrase = () => {
    if(foto < photo.length -1) {
       useFoto(foto +1)
    }else{
      useFoto(0)
    }
      
    useIndex(Math.floor(Math.random()*phrases.length))
}

document.body.style = `background-image: url(${photo[foto]})`


  return (
    <section className='set'>
    <h1 className="titulo">GALLETAS DE LA FORTUNA</h1>
  <UserCard data = {phrases[index]}/>
 
   <button className='Ver' onClick = {cambiarFrase}>
       Ver Suerte
    </button>

    </section>
  )
}

export default App