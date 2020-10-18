
function hiding() {
    var x = document.getElementById("list");
    
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById('bt').innerHTML = "Hide All Users";
    } else {
      x.style.display = "block";
    }
  }