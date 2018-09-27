DOMNodeCollection = require('./dom_node_collection.js');


window.$l = (selector) => {
  console.log("this is only a test");
  let arr = [];
  if (typeof(selector) === 'string'){
    console.log('thanks for the string');
    arr = arr.concat(Array.from(document.querySelectorAll(selector)));
  } else {
    console.log("Thanks for the HTML element");
     arr.push(selector);
  }
  return new DOMNodeCollection(arr);

};
//
// We are now going to modify the core $l function.
// It will receive one argument, but let's make it flexible.
// If the argument received is a HTML element,
// (i.e. an instanceof HTMLElement), you should
// put it into an array and return an instance of
// DOMNodeCollection.This will allow a HTMLElement native
// element to be 'wrapped' in jQuery lite goodness.
// So: our core function can receive either a single
// HTMLElement or a string with a CSS selector and
// in either case the return value will be a DOMNodeCollection.
