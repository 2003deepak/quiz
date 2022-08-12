<?php

include('config.php');

if(isset($_POST['submit'])){

    $firstpass = $_POST['firstpass'];
    $confirmpass = $_POST['confirmpass'];
    $username= $_POST['username'];
    $sql = " UPDATE register set password = '$confirmpass' where username = '$username' " ;

    if($firstpass == $confirmpass){

        $sql = " UPDATE register set password = '$confirmpass' where username = '$username' " ;
        $query = mysqli_query($conn,$sql);
        if($query==TRUE){
            echo '<script>echo(" Password is reset successfully ")</script> ' ;
        }else{
            echo '<script>echo(" Oops Something went wrong ")</script> ' ;
        }
        
        
    }else{

        echo '<script>echo("Both The passwords are not matching")</script> ' ;
    }
}



?>