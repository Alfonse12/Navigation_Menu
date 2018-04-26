/**
* author: Alfonse mugisho
* email: s241793@students.cdu.edu
* Stuent number: 241793
*/

References:
			https://www.w3schools.com/jsref/met_node_appendchild.asp



// expands navigation menu for Desktop

var newElement = document.createElement('li');
var newA = document.createElement("a");

var list = document.getElementById('main-nav2').getElementsByTagName('ul')[0];
list.appendChild(newElement);
newElement.appendChild(newA);
newA.textContent = 'Jabiru';



// navigation menu for small devices 

// expands navigation menu for mobiles

var newElement = document.createElement('li');
var newA = document.createElement("a");

var list = document.getElementById('main-nav').getElementsByTagName('ul')[0];
list.appendChild(newElement);
newElement.appendChild(newA);
newA.textContent = 'Jabiru';


// Open and close navigation for mobiles 
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
	document.getElementById("wrapper").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("wrapper").style.marginLeft= "0";
}



























