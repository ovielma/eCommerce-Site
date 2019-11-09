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
    </tr>";
    while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        //echo "<td>" . $row['productID'] . "</td>";
        echo "<td>" . $row['prodDescription'] . "</td>";
        echo "<td>" . $row['unitPrice'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    mysqli_close($con);
?>