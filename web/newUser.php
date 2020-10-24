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
    <br>
    <br>
    <div id="mess">Please Complete The Form Bellow</div>
    <form action="newUser.php" method="$_GET" id="disp1">
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
    <br><br>
    <form id="disp">
        <?php
            $fName = $_GET["fname"];
            $lName = $_GET["lname"];
            $emaillAddress = $_GET["emaill"];
            $goall = $_GET["radio"];
            $descriptionn = $_GET["textArea"];
            if($fName != ""){

                echo 'The Following User Was Added to Our DataBase <br>';
                echo '<br><div id="two"> New User: ' . $fName . ' ' . $lName . '</div><br>';
                echo '<div id="two"> Email Address: ' . $emaillAddress . '</div><br>';
                echo '<div id="two"> Main Goal: ' . $goall . '</div><br>';
                echo '<div id="two">Description: ' . $descriptionn . '<br></div> <br></form><br>';

                $newId = $pdo->lastInsertId('sequence_name');
                try 
                {
                    $statement = $db->prepare("INSERT INTO theuser(user_id, firstname, lastname, emailaddress)
                                            VALUES(DEFAULT, '$fName', '$lName', '$emaillAddress');");
                    $statement->execute();
                    
                } 
                catch (Exception $ex) 
                {
                    echo "$ex";
                }

            }

            
        ?>
    </form>
    </div>
</body>
</html>