function setYear(){
    const el = document.getElementById("year")
    el.innerHTML = getTheYear() 
}  

function getTheYear(){
    const d = new Date()
    let year = d.getFullYear()
    return year
}
