Function.prototype.bind = function(context) {
  if(typeof this !== "function"){
     throw new TypeError("not a function");
  }
  let self = this;
  let args = [...arguments].slice(1);
  function Fn() {};
  Fn.prototype = this.prototype;
  let bound = function() {
      let res = [...args, ...arguments]; //bind传递的参数和函数调用时传递的参数拼接
      context = this instanceof Fn ? this : context || this;
      return self.apply(context, res);
  }
  //原型链,绑定的函数可能作为构造函数
  bound.prototype = new Fn();
  return bound;
}


var name = 'Jack';
function person(age, job, gender){
    console.log(this.name , age, job, gender);
}
var Yve = {name : 'Yvette'};
let result = person.bind(Yve, 22, 'enginner')
// ('female');

console.log(result)
