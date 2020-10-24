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
    <form action="newUser.php" method="$_GET">
        <br>
        <div id="two">Enter First Name: <input type="text" name="fname" placeholder="James" required></div><br>
        <div id="two">Enter Last Name: <input type="text" name="lname" placeholder="Bond" require></div><br>
        <div id="two">Enter Email Address: <input type="email" name="emaill" placeholder="007@example.com" require></div><br>
        <div id="two">Choose your goal: <input type="radio" name="radio" value="Cutting"> Cutting
                          <input type="radio" name="radio" value="Maintaining"> Maintaining
                          <input type="radio" name="radio" value="Bulking"> Bulking</div><br>
        <div id="two">Description: <textarea name="textArea" placeholder="Describe your personal goal..."></textarea></div>
        <br>
        <br>
        <button type="submit">Submit</button>
        <br>
    </form>
    <?php
        $firstName = $_GET["fname"];
        $lastName = $_GET["lname"];
        $emailAddress = $_GET["emaill"];
        $goal = $_GET["radio"];
        $description = $_GET["textArea"];

        echo '<br><br><form id="disp"> The Following User Was Added to Our DataBase <br>';
        echo '<br><div id="two"> New User: ' . $firstName . ' ' . $lastName . '</div><br>';
        echo '<div id="two"> Email Address: ' . $emailAddress . '</div><br>';
        echo '<div id="two"> Main Goal: ' . $goal . '</div><br>';
        echo '<div id="two">Description: ' . $description . '<br></div> </form>';
    ?>
</body>
</html>