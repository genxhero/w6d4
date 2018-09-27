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
   
  }
}

module.exports = DOMNodeCollection;
