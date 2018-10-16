//console.log('hello');

//const say = function (name) {
//   alert ('Hello, world!');
//}

//export default say;


export default function sqv() {

    window.onload=function(){
    var div = document.createElement('div');
    div.className = "alert alert-success";
    div.innerHTML = "Hello Javascript!";
    document.body.appendChild(div);
   }
}

