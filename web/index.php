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
    <div>
        Making your dream body become true
    </div>
        User's ID:<input placeholder="00000" type="number"><br>
        Use's First Name:<input placeholder="James" type="text"><br>
        Use's Last Name:<input placeholder="Bond" type="text"><br>
    <button type="button" onclick="">Search</button>
    <button type="button" onclick="list()">Display List</button>
    <div>
    <?php
                            try 
                            {
                                $statement = $db->prepare('Select * FROM theuser');
                                $statement->execute();
                                echo "<table>
                                        <tr>
                                            <th>User ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                        </tr>";
                                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                                    $user_id = $row['user_id'];
                                    $first_name = $row['firstname'];
                                    $last_name = $row['lastname'];

                                    $_SESSION["user_id"] = $user_id;
                                    $_SESSION["first_name"] = $first_name;
                                    $_SESSION["last_name"] = $last_name;

                                    echo "Session " . $_SESSION["user_id"];
                                    echo "Session " . $_SESSION["first_name"];
                                    echo "Session " . $_SESSION["last_name"];

                                    echo "<tr>
                                            <td> $user_id</td>
                                            <td> $first_name</td>
                                            <td> $last_name</td>
                                        </tr>";
                                    
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