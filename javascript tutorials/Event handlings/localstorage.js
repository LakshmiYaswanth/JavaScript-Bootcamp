// localStorage.setItem('name','localsmith');
// localStorage.setItem('age','18');
// sessionStorage.setItem('name','sectionsmith');

// const name=localStorage.getItem(name);
// const age=localStorage.getitem(age);
// const namsess=sessionStorage.getItem(name);


// console.log(name);
// console.log(age);
// console.log(namsess);



//jsonpaarse and stringfy



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('first_name').value;
    let names;
    if (localStorage.getItem('names') === null) {
        names = []
    } else {
        names = JSON.parse(localStorage.getItem('names'))
    }
    names.push(name)
    localStorage.setItem('names', JSON.stringify(names))
    alert('The name is saved')

})

document.querySelector('.get-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const names = JSON.parse(localStorage.getItem('names'))
    names.forEach(function (name) {
        console.log(name)
    })
})