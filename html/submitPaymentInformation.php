<?php

$con = mysqli_connect("localhost","root","","cs3320");

if (!$con){
  die('Could not connect: ' . mysql_error());
  }else echo "connected!!!<br>";

if (isset($_POST["cardType"], $_POST["cardnumber"], $_POST["expmonth"], $_POST["expyear"])){
    
$sql="INSERT INTO cs3320.PaymentInformation(cardType, cardNumber, expMonth, expYear)

VALUES

('$_POST[cardType]', 
'$_POST[cardnumber]',
'$_POST[expmonth]',
'$_POST[expyear]')";
}

echo $sql;

//execute the INSERT
if (!mysqli_query($con,$sql)){
      die('Error: ' . mysqli_error($con));
  }else {
     echo "<br>1 record added";
  }
  
    //echo '<script>window.location.href = "Checkout.html";</script>';
 
mysqli_close($con)

?>
