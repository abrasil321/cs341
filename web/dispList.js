function searchById(){

    // let user_id = document.getElementById("id");
    // for (let i = 0; i < $_SESSION["user_id"].length; i++) {
    //     if ($_SESSION["user_id"] == user_id){
    document.getElementById("dispId").innerHTML =  '<?php echo $_SESSION["user_id"]; ?>';
            // echo "Session " . $_SESSION["first_name"] . "<br>";
            // echo "Session " . $_SESSION["last_name"] . "<br>";
        // }
        
    // }
}

// '<?php echo "Session" . $_SESSION["user_id"] . "<br>"; ?>'

function hiding() {
    var x = document.getElementById("list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }