const obj = {
    ngaran : 'ngatest',
    listName: [{nama: 'bima', umur: 27,},{nama: 'yudi', umur: 28,},{nama: 'oktav', umur: 26,},]
}
// console.log(obj)

const [listName] = obj.listName
console.log(listName)
console.log(obj.map((a)=>a))