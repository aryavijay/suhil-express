const axios = require('axios')
async function nyName() {
    return 'vijay'
}

function returnMyName_1() {
    console.log('111')
    axios.request('https://my-json-server.typicode.com/typicode/demo/posts').then(res => {
        console.log(res.data)
        return axios.request('https://my-json-server.typicode.com/typicode/demo/comments')
    }).then(res => {
        console.log(res.data)
    })
    console.log('222')
}


async function returnMyName() {
    console.log('111')
    const res = await axios.request('https://my-json-server.typicode.com/typicode/demo/posts')
    console.log('222')
    console.log(res.data)
    console.log('333')
    const res1 = await axios.request('https://my-json-server.typicode.com/typicode/demo/comments')
    console.log('4444')
    console.log(res1.data)
    console.log('5555')
}



console.log(returnMyName())