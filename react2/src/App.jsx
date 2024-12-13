import { useState, useEffect } from 'react'
import './App.css'
import Deskripsi from './components/Deskripsi'

function App() {
  const [count, setCount] = useState(0)
  const [countg, setCountg] = useState(0)
  const [string, setString] = useState('')
  const [boolean, setBoolean] = useState(false)
  const [btnShowHide, setBtnShowHide] = useState(false)
  const [stringCopy, setStringCopy] = useState('')
  const [arrayCopy, setArrayCopy] = useState([])

  const togleBtn = () => {setBtnShowHide(()=> !btnShowHide)}
  const copyString = (e) => {setStringCopy(e.target.value)}
  const copyArray = () => {
    const prevArray = [...arrayCopy, stringCopy]
    setArrayCopy(prevArray)
  }
  const dltArray = () => {
    useEffect (()=>{arrayCopy.pop()},[])
  } 
  return (
    <>
      <div className="card">
        <button onClick={()=>(setCount ((count)=> count -1))}>-</button>
        {count}
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <br />
        <button style={{marginTop : "20px", width: "250px"}} onClick={() => setCountg((countg) => (countg + 2)+count)}>
          count previous count + 2 = {countg}
        </button>
        <br />
        <button style={{marginTop : "20px", width: "250px"}} onClick={() => setString(() => ('angka dadu: ' + Math.ceil(Math.random()*6)))}>
        {string?(string):("klik untuk melempar dadu")} 
        </button>
        <br />
        <button style={{width:"250px", marginTop: "20px"}} onClick={()=>setBoolean(!boolean)}>
          {String(boolean)}
        </button>
        <br />
        <input style={{marginTop: "20px"}} value={stringCopy} placeholder='masukuan kata' onChange={copyString}/>
        <h1>{stringCopy}</h1>
        <input style={{display: "none"}} value={stringCopy} placeholder='copy of previous input' />  
        <br />
        <button onClick={copyArray}>Tambah</button>
        <button onClick={dltArray}>Hapus</button>
        <br />
        <ul>{arrayCopy.map(item =>  (       
            <li>{item}</li>
        ))}</ul>
        <button onClick={togleBtn}>{btnShowHide? "hide":"show"}</button> <br /> 
        {btnShowHide ? <h1>show string</h1> : null}
      </div>
      <Deskripsi countDariParent={count} setCountDariParent={setCount}></Deskripsi>
      
    </>
  )
}

export default App
