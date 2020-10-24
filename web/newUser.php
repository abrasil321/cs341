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
    <form method="$_POST" action="newUser_confirm.php">
        Enter First Name: <input type="text" name="fname" required><br>
        Enter Last Name: <input type="text" name="lname" require><br>
        Enter Email Address: <input type="email" name="emaill" require><br>
        Choose your goal: <input type="checkbox" name="Cutting">Cutting
                          <input type="checkbox" name="Maintaining"> Maintaining
                          <input type="checkbox" name="Bulking"> Bulking<br>


    </form>
</body>
</html>