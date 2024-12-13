import { useState } from "react"

export default function Deskripsi ({countDariParent, setCountDariParent}) {
    const [addNilai, setAddNilai] = useState(0)
    const [nilais,setNilais] = useState([])
    const [rata,setRata] = useState(0)
    const tambahNilai = () => {
        const tambahNilai = [...nilais, addNilai]
        setNilais(tambahNilai)
    }
    const rataRata = () => {
        const tambahNilai = [...nilais, addNilai]
        setRata(tambahNilai)  
    }
    // const val = [4,3,6,12]
    // const rataRata = () => {
    //     setRata(()=> (val.reduce((i,nilai)=> i+nilai,0))) w
    // }
    return(
        <div>
            <button onClick={()=>setCountDariParent(countDariParent - 10)}>kurang 10</button>
            <p>ini diskripsi ambil count dari parent {countDariParent}</p>
            <input  value={addNilai} onChange={(e)=> setAddNilai(e.target.value)}/>
            <button onClick={tambahNilai}>tambah</button>
            <p>{nilais}</p>
            <button onClick={rataRata}>nilai rata-rata</button>
            <button onClick={() => {
        setRata(()=> (rata.reduce((i,nilai)=> i+nilai,0))) 
    }}>rata-rata</button>
            <p>{rata}</p>
        </div>
    )
}