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


  function seach(){

    var search_id = document.getElementById("id").value;
    var search_fName = document.getElementById("fName").value;
    var search_lName = document.getElementById("lName").value;

    

  }
