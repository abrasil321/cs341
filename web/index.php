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
    <div>
        Making your dream body become true
    </div>
        User's ID:<input placeholder="00000" type="number"><br>
        Use's First Name:<input placeholder="James" type="text"><br>
        Use's Last Name:<input placeholder="Bond" type="text"><br>
    <button type="button" onclick="">Search</button>
    <button type="button" onclick="list()">Display List</button>
    <div>
        <p id="list"></p>
    </div>
</body>
</html>