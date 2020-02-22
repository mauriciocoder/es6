// Async/await are just confortable ways of using promises

// Every async function returns a Promise
const doFoo = async () => {
    return Math.random() * 100
}

doFoo().then(num => console.log(num))



console.log('read from net example')
const readFromNet = async () => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.random()), 1000)
    })
    await p.then(num => console.log(num)) // Await makes JS engine wait for competion before resuming the process!
    console.log('end!')
}
readFromNet()
