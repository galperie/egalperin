function addNewItemToList() {
  var list = document.getElementById("theList");
  var newThing = document.createElement("li");
  if (document.getElementById("thing").value != "") {
    newThing.innerHTML = document.getElementById("thing").value;
    list.appendChild(newThing);
    document.getElementById("thing").value = "";
  }
}

function pick() {
  var todoSection = document.getElementById("theList");
  var thingsToDo = todoSection.getElementsByTagName("li");

  for (var i = 0; i < thingsToDo.length; i++) {
    thingsToDo[i].style.color = "black";
  }

  if (thingsToDo.length > 0) {
    var picker = Math.floor((Math.random() * thingsToDo.length));
    thingsToDo[picker].style.color = "red";
  } else {
    alert("add some stuff first");
  }
}
