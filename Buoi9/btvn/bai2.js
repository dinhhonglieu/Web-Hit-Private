const obj = {
    name : "Lieu",
    age : 15,
    soTk:'0377650278',
    nganHang: "MB"

}
function run(obj){
    
    for (const key in obj) {
       console.log(key+ ': '+ obj[key]);
    }
}
run(obj);