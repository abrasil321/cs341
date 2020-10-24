<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="BcomeFit.css">
    <script src="dispList.js"></script>
</head>
<body>
    <header>
        BcomeFit
    </header>
    <hr>
    <div id="head">
        Making your dream body become true
    </div>
    <br>
    <br>
    <div id="mess">Please Complete The Form Bellow</div>
    <form method="$_POST" action="newUser_confirm.php">
        <br>
        <div id="two">Enter First Name: <input type="text" name="fname" required></div><br>
        <div id="two">Enter Last Name: <input type="text" name="lname" require></div><br>
        <div id="two">Enter Email Address: <input type="email" name="emaill" require></div><br>
        <div id="two">Choose your goal: <input type="radio" name="radio" id="Cutting"> Cutting
                          <input type="radio" name="radio" id="Maintaining"> Maintaining
                          <input type="radio" name="radio" id="Bulking"> Bulking</div><br>
        <div id="two">Description: <textarea name="textArea" name="textArea" placeholder="Describe your personal"></textarea></div>
        <br>
        <br>
        <button type="submit">Submit</button>
        <br>
    </form>
</body>
</html>