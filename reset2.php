<?php

include('config.php');

if(isset($_POST["submit"])){

    $firstpass =$_POST['firstpass'];
    $confirmpass =$_POST['confirmpass'];

    $sql = " SELECT username,email FROM register WHERE username = '$username' AND password = '$password' " ;
    $query = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($query);
    if($firstpass==$confirmpass){

        $sql = " update table register set password = '$confirmpass' where username = '$username' " ;
        $query = mysqli_query($conn,$sql);
        
        
}




?>