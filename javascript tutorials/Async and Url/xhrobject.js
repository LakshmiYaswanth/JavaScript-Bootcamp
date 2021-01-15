document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         console.log(this.responseText)
    //     }
    // }
    // xhr.onreadystatechange = function(){
    //     if(this.readyState===4 && this.status===200){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send()
}
