<?php

include 'config.php' ;


if(isset($_POST['save'])){

  $name=$_POST['name'];
  $feedback = $_POST['feedback'];
  
  $sql = "INSERT INTO feedback (`name`,`feedback`) VALUES ('$name','$feedback')";

  if ($conn->query($sql) === TRUE) {

    echo "<script> alert('You are successfully given feedback ')</script> " ;
    echo "<script> location.replace('contact.html')</script> ";
    // echo "done" ;
   
 
    // header('location:login.html');
  }else {
    echo "<script> alert('Something went wrong ')</script>" ;
    echo "<script> location.replace('contact.html')</script> ";
  }
}

$conn->close();

?>