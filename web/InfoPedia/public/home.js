function test_match(){
    var first = document.getElementById('passw').value;
    var second = document.getElementById('repassw').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    
    

    if(first == "" || second == "" || fname == "" || lname == "" || email == ""){
        document.getElementById('login').disabled = true;
    }
    else if(first != second){
        document.getElementById('match').innerHTML = "* Password do not match";
        document.getElementById('login').disabled = true;
    }
    else{
        document.getElementById('match').innerHTML = "";
        document.getElementById('login').disabled = false;
    }
}