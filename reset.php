<?php

session_start();

include('config.php');

if(isset($_POST['submit'])){

    $username= $_POST['username'];
    $email=$_POST['email'];

    $sql = " select * from register where email = '$email' " ;
    $query = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($query);
    if($row){

       
        $subject = "Password Reset Link ";
        $body = "Hi $username , click here to reset your password 
        http://localhost/onlinequiz/passwordreset2.php" ;

        send_password_res
        $sender_email = "From: yadavsuraj7449@gmail.com";
        if(mail($email, $subject , $body ,$sender_email)){
            
            echo " <script>alert('Verification Link has been sent ')</script> " ;
        }else{
            echo " <script>alert('Something went wrong ')</script> " ;
        }
    }else{
        echo ' <script>alert("Pls enter correct credentials ")</script> ' ;
    }

    // echo "alert('Clicked')";



}
$conn->close();
?>