//TO DO LIST

let ulDOM = document.querySelector("ul#list")
const TASK = document.querySelector('#task')



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Checked
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//Click on a add button to add new item
const newElement = () => {
  let liDOM = document.createElement('li')
  liDOM.innerHTML = `${TASK.value}`

  if (TASK.value == "") {
    $('#liveToast').toast('show')
  }
  else {
    $('#liveToastSuccess').toast('show')
    ulDOM.append(liDOM)
  }


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liDOM.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}



