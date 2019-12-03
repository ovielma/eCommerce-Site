 <?php
    $q = intval($_GET['q']);
    // create a connection
    $con = mysqli_connect("localhost","root","","cs3320");
    // check connection
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    //else echo "connected!!!<br>";

    mysqli_select_db($con,"cs3320");
    $sql="SELECT * FROM product WHERE ProductID = '".$q."'";
    $result = mysqli_query($con,$sql);
	if (!$result) {
    printf("Error: %s\n", mysqli_error($con));
    exit();
    }

    echo "<table>
    <tr>
    <th>Product ID</th>
    <th>Description</th>
    <th>Unit Price</th>
    <th>Units</th>
    </tr>";
    while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $row['ProductID'] . "</td>";
        echo "<td>" . $row['Description'] . "</td>";
        echo "<td>" . $row['UnitPrice'] . "</td>";
        echo "<td><input placeholder='0' type='number' name='units' min='1' max='10'></td>";
        echo "</tr>";
    }    
    echo "</table>";

    mysqli_close($con);
?>