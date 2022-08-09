<?php

include 'config.php' ;


$username=$_POST['username'];
$password = $_POST['password'];
$email=$_POST['email'];
$stream = $_POST['stream'];
$gender = $_POST['gender'];


$sql = "INSERT INTO register (`username`,`password`,`email`, `stream`,`gender`) VALUES ('$username','$password' ,'$email', '$stream','$gender')";


if ($conn->query($sql) === TRUE) {

  
  echo "<script> alert('You are successfully registered')</script>";
  
  
}else {
  
  echo "<script> alert('You are not registered pls try again with right credentials ')</script>" ;
  
}

$conn->close();

?>

