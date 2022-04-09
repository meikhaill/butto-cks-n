
function coinflip(){
	console.log('you clicked the button!')
}
//my attempt at making a probably incorrect function that i thought was linked to the button but isnt

window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log('hi');
console.log('there'); 

/* i realized that im just logging the string to the console when 
i call the function so i pasted this to be able to see the console on index.html 
but it just comes back up with a bunch of weird stuff that i genuinely cant begin to understand*/
