export default function Deskripsi ({countDariParent, setCountDariParent}) {
    return(
        <div>
            <button onClick={()=>setCountDariParent(countDariParent - 10)}>kurang 10</button>
            <p>ini diskripsi ambil count dari parent {countDariParent}</p>
        </div>
    )
}