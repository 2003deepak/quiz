<?php

include('config.php');

if(isset($_POST["submit"])){

    $email =$_POST['email'];
    $username =$_POST['username'];

    $sql = " SELECT username,email FROM register WHERE username = '$username' AND password = '$password' " ;
    $query = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($query);
    if($rows >0){

        send_password_reset($email,$username);
        echo ' <script>alert("Verification Link has been sent ")</script> ' ;


    }else{
        echo ' <script>alert("Pls enter correct details")</script> ' ;

    }
}




?>