<?php
/////////////////variable names/////////////////////

//for database
$servername = "localhost";
$username = "root";
$password ="";
$dbname ="cs3320";

$u = $_GET["username"];
$p = $_GET["password"];
//////////////////Check user Credentials////////////////////////////////////
//connecting to server
$conn = new mysqli($servername, $username, $password, $dbname);
//if connection failed, display error
if($conn->connect_error){
	die("connections failed:" . $conn->connect_error);
}


//check to see if credentials are in database
$sql = "SELECT * FROM `usercredentials` WHERE username = '$u' AND password = '$p' ";
$result = $conn->query($sql);

if ($result->num_rows > 0){

	//retrieve userID number 
	while($row = $result->fetch_assoc()){
	    $user = $row['UserID'];
	}

    //save userid in php session
	session_start();
	$_SESSION['login_user']= $user;  // Initializing Session with value of user
	 echo '<script>window.location.href = "index.html";</script>'; //display main page

}else {
	echo '<script>alert("Username and Password combination incorrect. Please try again.") </script>'; //display error
	echo '<script>window.location.href = "Login.html";</script>'; //return to login page
}

mysqli_close($conn)

?>