<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BcomeFit - Delete User</title>
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
    <form action="deleteUser.php" onsubmit="return confirming(this);" method="$_GET" id="disp1">
        Enter User ID <input type="number" name="id" placeholder="Enter the ID of the user that you want to delete..." required>
        <br>
        <button type="submit">Delete User</button>
        <br>
    </form>
    <?php
        $id = $_GET["id"];
        if($id != ""){

            require "dbConnect.php";
            $db = get_db();
            $messag = "alert('This ID do not exist!')";
            try 
            {
                $statement = $db->prepare("SELECT firstname, lastname FROM theuser WHERE user_id='$id';");
                $statement->execute();
                while ($row = $statement->fetch(PDO::FETCH_ASSOC)){
                    $first_name = $row['firstname'];
                    $last_name = $row['lastname'];

                    echo "<script> alert('The User " . $first_name . " " . $last_name . ", was deleted!') </script>";
                }

                $statement = $db->prepare("DELETE FROM theuser WHERE user_id='$id';");
                $statement->execute(); 
            } 
            catch (Exception $messag) 
            {
                echo "$messag";
            }
            
        }


    ?>