<?php

$servername = "localhost";
$username = "root";
$password ="";
$dbname ="cs3320";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
	die("connections failed:" . $conn->connect_error);
}
//echo "Connected successfully";
//Get state list
$sql = "SELECT * FROM user information auto WHERE userID=$_SESSION['userID']";
$result = $conn->query($sql);
$row_data = array("fullName"=$row['fullName']

echo json_encode($data);

mysqli_close($conn); //close connections

?>