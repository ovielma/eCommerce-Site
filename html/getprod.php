<!DOCTYPE html>
<html>
    <head>
        <link href="main.css" rel="stylesheet" type="text/css"/>
    </head>

    <body>
    <?php
    $q = intval($_GET['q']);
    // create a connection
    $con = mysqli_connect("localhost","root","","cs3320");
    // check connection
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    else echo "connected!!!<br>";

    mysqli_select_db($con,"cs3320");
    $sql="SELECT * FROM Product ID WHERE id = '".$q."'";
    $result = mysqli_query($con,$sql);

    echo "<table>
    <tr>
    <th>Product ID</th>
    <th>Description</th>
    <th>Unit Price</th>
    </tr>";
    while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $row['Product ID'] . "</td>";
        echo "<td>" . $row['Description'] . "</td>";
        echo "<td>" . $row['Unit Price'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    mysqli_close($con);
    ?>
    </body>
</html>
