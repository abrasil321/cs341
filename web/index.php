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
        Use's First Name:<input placeholder="James" type="text" id="fName"><br>
        Use's Last Name:<input placeholder="Bond" type="text" id="lName"><br>
    <button id="bt" type="button" onclick="hiding()">Display All Users</button>
    <div id="list" hidden>
        <?php
            require "list.php";
        ?>                    
    </div>
    <div id="search">
        <?php
            try 
            {
                $statement = $db->prepare('Select * FROM theuser');
                $statement->execute();
                $i = 0;

                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) 
                {
                    $user_id = $row['user_id'];
                    $first_name = $row['firstname'];
                    $last_name = $row['lastname'];

                    $ids = array();
                    //array_push($ids[$i], $user_id);
                    array_splice($ids, $i, 0, $user_id);
                    // print_r($ids);
                    // echo "<br>";

                    $fnames = array();
                    //array_push($fnames[$i], $_SESSION["first_name"]);
                    array_splice($fnames, $i, 0, $first_name);
                    // print_r($fnames);
                    // echo "<br>";

                    $lnames = array();
                    //array_push($lnames[$i], $_SESSION["last_name"]);
                    array_splice($lnames, $i, 0, $last_name);
                    // print_r($lnames);
                    // echo "<br>";

                    $i += 1;
                }
            } 
            catch (Exception $ex) 
            {
                echo "$ex";
            }
        ?>        
    </div>

</body>
</html>