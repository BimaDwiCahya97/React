import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countg, setCountg] = useState(0)
  const [string, setString] = useState('')
  const [boolean, setBoolean] = useState(false)
  const [stringCopy, setStringCopy] = useState('')

  const copyString = (e) => {setStringCopy(e.target.value)}

  return (
    <>
      <div className="card">
        <button style={{ width: "250px"}} onClick={() => setCount((count) => count + 1)}>
          count is = {count}
        </button>
        <br />
        <button style={{marginTop : "20px", width: "250px"}} onClick={() => setCountg((countg) => (countg + 2)+count)}>
          count is + 2 = {countg}
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
        <input value={stringCopy} placeholder='copy of previous input' />   
      </div>
      
      
    </>
  )
}

export default App
