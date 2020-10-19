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
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) 
        {
            $user_id = $row['user_id'];
            $first_name = $row['firstname'];
            $last_name = $row['lastname'];

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