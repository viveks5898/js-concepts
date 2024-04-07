// closure conncept in javascript

// A cloure is a  feature where an inner fuction has access to the outer function variable.

function outerFunc(outer) {
  return function innerFunc(inner) {
    console.log("outerVariable", outer);
    console.log("innerVariable", outer);
  };
}
const newFunc = outerFunc("varible");

newFunc("inside");
