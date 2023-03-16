// print the initial document object
console.log(document);

var heading = document.getElementById('heading');
heading.innerHTML = 'Lab7 Assignment';
heading.style="color:blue"

let hr = document.createElement("hr");
// create an HTML element - hr
document.body.appendChild(hr);

// create an HTML element - h2
let h2 = document.createElement("h2");
h2.innerText = "Task"
h2.style="color:red"
// append the h2-element to the body-element
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is\
 using <b>only</b> JavaScript. The task will be evaluated on the basis of the\
  following DOM manipulation techniques:";
document.body.appendChild(p1);

var ul_array = ['find elements in the DOM (<b>5 points</b>);',
'create/add/remove elements (<b>5 points</b>);',
'change content of the elements (<b>5 points</b>);',
'change styles of the elements (<b>5 points</b>);',
'change attributes of the elements (<b>5 points</b>);',
'change classes of the elements (<b>5 points</b>).'];

function arrToUl(arr) {
  var ul = document.createElement("ul");
  var li;
  
  document.body.appendChild(ul); // append the created ul to the root

  arr.forEach(function(item) {    
    li = document.createElement('li'); // create a new list item
    // li.appendChild(document.createTextNode(item)); // append the text to the li
    li.innerHTML = item;
    ul.appendChild(li); // append the list item to the ul
  });
}

arrToUl(ul_array);
console.log(document);

// Create hr element
const hr2 = document.createElement('hr');
document.body.appendChild(hr2)

// Create h2 element and set text content and style
let h3 = document.createElement('h2');
h3.innerText = 'Submission';
h3.style = "color:red";
document.body.appendChild(h3)

let p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

var ul_array2 = ['Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).',
'Clone this repository to your local machine and work inside it.',
'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).',
'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).',
'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).',
'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).',
'After you finish your work, submit it to the Github (<b>2 points</b>).']

arrToUl(ul_array2);

// Create hr element
const hr3 = document.createElement('hr');
document.body.appendChild(hr3)

var listColor = function(){

    var list = document.getElementsByTagName("li");
    for (i = 0; i < list.length; i++) {
      if(i%2==0)
      list[i].style="color:green";
      else
          list[i].style="color:purple";
  
     }
   }
   listColor();

// print the final document object
console.log(document);