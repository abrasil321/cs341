<?php
session_start();
?>
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
    <p id="dispId"></p>
        User's ID:<input placeholder="00000" type="number" id="id"><br>
        Use's First Name:<input placeholder="James" type="text"><br>
        Use's Last Name:<input placeholder="Bond" type="text"><br>
    <button id="bt" type="button" onclick="hiding()">Display All Users</button>
    <div id="list" hidden>
    <?php
        require "list.php";


        // $_SESSION["user_id"] = $user_id;
        // $_SESSION["first_name"] = $first_name;
        // $_SESSION["last_name"] = $last_name;

        // echo  $_SESSION["user_id"] . "<br>";
        // echo "Session " . $_SESSION["first_name"] . "<br>";
        // echo "Session " . $_SESSION["last_name"] . "<br>";                        

    ?>
                           
    </div>

</body>
</html>