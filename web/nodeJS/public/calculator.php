<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="calculator.css">
    <title>Postal Rate Calculator</title>
</head>
<body>
    <header>
        <h1>Postal Rate Calculator</h1>
    </header>
    <hr>
    <br>
    <?php 
        $weight = $_GET["weight"];
        $type = $_GET["type"];
        echo "weight = " + $weight +"<br>";
        echo "type = " + $type +"<br>";
    
    ?>
    
</body>
</html>