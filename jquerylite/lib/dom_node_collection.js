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

  }

  find(){

  }


}

module.exports = DOMNodeCollection;
