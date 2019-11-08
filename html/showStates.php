<?php

$servername = "localhost";
$username = "root";
$password ="";
$dbname ="ecommerce-site";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
	die("connections failed:" . $conn->connect_error);
}
//echo "Connected successfully";
//Get state list
$sql = "SELECT state_code, state_name FROM states";
$result = $conn->query($sql);
$id = "stateid";
echo '<select id = "'.$id.'" >';
echo "<option>Select</option>";

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$code = $row['state_code'];
		$name = $row['state_name']; 
		echo '<option value="'.$code.'">'.$name.'</option>';
 //       echo "<option value = > ". $row["state_code"]. ", ". $row["state_name"]. "<br>";
    }
} else {
    echo "0 results";
}

echo "</select>";

mysqli_close($conn); //close connections

?>