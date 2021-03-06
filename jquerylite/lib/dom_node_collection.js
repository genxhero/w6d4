class DOMNodeCollection {
  constructor(elements) {
    this.elArr = elements;
  }

  html(string){
    if (!string) return elArr[0].innerHTML;
    this.elArr.forEach(function(element) {
      element.innerHTML = string;
    });
  }

  empty() {
    this.elArr.forEach(function(element) {
      element.innerHTML = "";
    });
  }

  append(string) {
    this.elArr.forEach(function(element) {
      element.innerHTML += string;
    });
  }

  attr() {

  }

  addClass(string) {
     //presumably append to the inner html or sonething
     //className= string?

  }

  removeClass() {
    //I think we are trying to delete exact classes found in the inner html
  }
//TRAVERSAL SECTION
  children() {
   let newArr = [];
   this.elArr.forEach(function(element) {
     newArr = newArr.concat(Array.from(element.children));
   });
   let children = new DOMNodeCollection(newArr);
   return children;
  }

  parent() {

       let newArr = [];
    this.elArr.forEach(function(element) {
      //if (!newArr.includes(element))
      newArr.push(element.parentNode);
    });
    return new DOMNodeCollection(newArr);
  }

  find(string){
    let newArr = [];
    this.elArr.forEach(function(element) {
      //if (!newArr.includes(element))
    newArr = newArr.concat(Array.from(element.querySelectorAll(string)));
    });

    return new DOMNodeCollection(newArr);
  }

  remove() {

  }

  on(string, proc) {
    // $("ul").on("click", () => {...})
    //So i need to take a string which will determine the action
    //also a
    let attrString = `on${string}`;
    this.elArr.forEach(function(element) {

       element[attrString] = proc(element);
    });
  }

  off() {
    let attrString = `on${string}`;
    this.elArr.forEach(function(element) {
       element[attrString] = null;
    });
  }

}


const  pinkify = function (el) {
  el["style"]["color"] = "pink";
};

module.exports = DOMNodeCollection;
