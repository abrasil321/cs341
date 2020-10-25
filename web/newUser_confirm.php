<?php  
    require "dbConnect.php";
    $db = get_db();
?>
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
    <?php
        $firstName = $_POST["fname"];
        $lastName = $_POST["lname"];
        $emailAddress = $_POST["emaill"];
        $goal = $_POST["radio"];
        $description = $_POST["textArea"];

        echo $firstName . "<br>";
        echo $lastName . "<br>";
        echo $emailAddress . "<br>";
        echo $goal . "<br>";
        echo $description . "<br>";
    ?>

</body>
</html>