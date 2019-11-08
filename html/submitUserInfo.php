<?php

$con = mysqli_connect("localhost","root","","cs3320");

if (!$con){
  die('Could not connect: ' . mysql_error());
  }else echo "connected!!!<br>";

if (isset($_POST["fullName"], $_POST["address1"], $_POST["cityname"], $_POST["myStates"], $_POST["zipCode"], $_POST["phoneNumberUserInfo"], $_POST["emailName"])){
    
$sql="INSERT INTO cs3320.userInformation (fName, address1, address2, city, state, zip, phoneNo, email)

VALUES

('$_POST[fullName]', 
'$_POST[address1]',
'$_POST[address2]',
'$_POST[cityname]',
'$_POST[myStates]',
'$_POST[zipCode]',
'$_POST[phoneNumberUserInfo]',
'$_POST[emailName]')";
}

echo $sql;

//execute the INSERT
if (!mysqli_query($con,$sql)){
      die('Error: ' . mysqli_error($con));
  }else {
     echo "<br>1 record added";
  }
  
    echo '<script>window.location.href = "shppng-cart.html";</script>';
 
mysqli_close($con)

?>
