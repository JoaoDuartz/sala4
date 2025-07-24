function div () {  
}

//arrow fuction
const media = () => {
    var numero1 = parseFloat(document.getElementById("m1").value)
    var numero2 = parseFloat(document.getElementById("m2").value)
    var numero3 = parseFloat(document.getElementById("m3").value)
    var numero4 = parseFloat(document.getElementById("m4").value)
    var numero5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById('media')
    media.innerHTML = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    var resp = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    if(resp >= 7){
        media
    }
}