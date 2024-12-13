import '../style/ProductCard.css'
    
const ProductCard = () => {
    const aplikasi = {
        nama: 'Ojek Gendong',
        driver: [
            {name:'Budi',verified:false,rating:4},
            {name:'Anwar',verified:true,rating:5},
            {name:'Joko',verified:true,rating:3},
        ],
    }
    const arss = [2,3,1]
    const driver = aplikasi.driver
    // const generateStar = star => '🌟'.repeat(star)
    // const generateV = v => '(V)'.repeat(v)
    // const arrs = [2,3,1]

    // const rocket = (banyakRocket) =>{
    //     return '🚀'.repeat(banyakRocket)
    // }

    // const objek = {
    //     nama : 'ayam geprek',
    //     harga : 20000,
    //     penjualan :553,
    //     rating: '⭐⭐⭐⭐⭐',
    //     isOfficial: true
    // }
    
    return (
        <div>
            <h1>Ojek Gendong</h1>

            <h3>List Driver</h3>
            <ul>
            {driver.map((list)=> (<li style={{listStyle:'none'}}>{list.name} {list.verified && '(V)'} {'⭐'.repeat(list.rating)}</li>))}
            </ul> 
            {/* <div>{objek.nama}</div>
            <div>{objek.harga}</div>

              <div>{objek.rating}</div>
            <div>{objek.isOfficial ? 'official store': null}</div>
            <div>{false && 'bebas ongr'}</div>
            <p>{objek["harga"]}</p>
            <div>
            {Object.keys(objek).map((key) => 
                (<div>{key} : {objek[key]}</div>)
            )}
            </div>
            <div>
                {arrs.map((rockets) => (<div>{rocket(rockets)}</div>))} 
            </div>
            <div className="kotak">Box</div> */}
        </div>
    )
}
export default ProductCard