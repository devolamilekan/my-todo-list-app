function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var lekan = document.createTextNode(inputValue);
  li.appendChild(lekan);
    document.getElementById("mytodolist").appendChild(li);

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
