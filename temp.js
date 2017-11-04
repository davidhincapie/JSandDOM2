//passing an anonymous function into a function
//callback function with 3 second delay
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings there');