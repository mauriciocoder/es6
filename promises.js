/**
 * Here is the options available when working with promises:
 * 1) Resolve
 * 2) Reject
 * 3) Throw error to be captured on catch() 
 */
const mathPromise = new Promise((resolve, reject) => {
    let num = Math.random() * 100 
    if (num < 50) {
        resolve(num)
    } else if (num < 70) {
        reject(num)
    } else {
        throw new Error('num higher than 70!')
    }
})

mathPromise.then(num => {
    console.log('Resolve with number =', num)
}, num => {
    console.log('Reject with number = ', num)
}).catch(error => {
    console.log('error.message = ', error.message)
})