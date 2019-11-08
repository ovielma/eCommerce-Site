<?php

$con = mysqli_connect("localhost","root","","cs3320");

if (!$con){
  die('Could not connect: ' . mysql_error());
  }else echo "connected!!!<br>";

if (isset($_POST["Address_1"], $_POST["Address_2"], $_POST["City"], $_POST["States"], $_POST["Zip"])){
    
$sql="INSERT INTO cs3320.shippinginformation (address1, address2, city, state, zip)

VALUES

('$_POST[Address_1]', 
'$_POST[Address_2]',
'$_POST[City]',
'$_POST[States]',
'$_POST[Zip]')";
}

echo $sql;

//execute the INSERT
if (!mysqli_query($con,$sql)){
      die('Error: ' . mysqli_error($con));
  }else {
     echo "<br>1 record added";
  }
  
    echo '<script>window.location.href = "Checkout.html";</script>';
 
mysqli_close($con)

?>
