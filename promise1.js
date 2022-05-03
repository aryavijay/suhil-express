const axios = require('axios')

function returnMyNam_old() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('vijay');
        }, 3000)
    })

    return promise
}


function returnMyName() {
    return axios.request('https://my-json-server.typicode.com/typicode/demo/posts')
}

console.log('1')

setTimeout(() => {
    console.log('a')

    returnMyName(text => {
        console.log(text, '4')
    })
    /*  returnMyName(text => {
         console.log(text, '4')
         returnMyName(text => {
             console.log(text, '3')
             returnMyName(text => {
                 console.log(text, '2')
                 returnMyName(text => {
                     console.log(text, '1')
                 })
             })
         })
     }) */
    var count = 1
    returnMyName().then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).then((data) => {
        console.log(data.data, count)
        count++
        console.log(new Date())
        return returnMyName()
    }).finally(() => {
        console.log('This is finally Excution')
    })


}, 1000)

console.log('2')