const http = new myhttp();
//.then(data => console.log(data))
//.catch(err => console.log(err))

const data = {
    title: ' A new title',
    body: 'This is a new post'
}
 http.post('https://jsonplaceholder.typicode.com/posts', data).then(data => console.log(data)).catch(err => console.log(err))