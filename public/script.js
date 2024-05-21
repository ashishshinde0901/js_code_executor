

window.onload = function () {

    let code = document.getElementById('code')
    let encode = document.getElementById('encode')
    let data = document.getElementById('data')
    let encrypt = document.getElementById('encrypt')

    encode.onclick = function (event) {
        let text_data = code.value
        text_data = btoa(text_data)
        data.value = text_data
    }



}



