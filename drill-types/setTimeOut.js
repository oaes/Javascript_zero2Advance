//The setTimeout() function is commonly used if you wish to run your function a specified number of milliseconds from when the setTimeout() method was called. Simply we can say, Calls a function once after a specified delay.

setTimeout(()=> {
    console.log('hi panda');
}, 2000)

setTimeout(()=> {
    console.log('panda');
}, 2500)
console.log('tiger');