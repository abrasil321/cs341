function hiding() {
    var x = document.getElementById("list");
    
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById('bt').innerHTML = "Display All Users";
    } else {
      x.style.display = "block";
      document.getElementById('bt').innerHTML = "Hide All Users";
    }
  }

function search(){
    let id = document.getElementById('id');
    if (id == $_SESSION["user_id"]){
      document.getElementById("search").innerHTML = $_SESSION["user_id"];
    }
}