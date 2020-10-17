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
    <div>
        <?php

            try {
                $statement = $db->prepare('Select * FROM theuser');
                $statement->execute();
                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $first_name = $row['firstname'];
                $last_name = $row['lastname'];
                echo "<p> $first_name</p>";
                echo "<p> $last_name</p>";
                }
            } catch (Exception $ex) {
                echo "$ex";
            }

        ?>
    </div>
</body>
</html>