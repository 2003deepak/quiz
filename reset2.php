<?php

include('config.php');

if(isset($_POST['submit'])){

    $firstpass = $_POST['firstpass'];
    $confirmpass = $_POST['confirmpass'];
    $username= $_POST['username'];
    $sql = " select * from register where username = '$username'" ;
    $query = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($query);
    if($row){
        if($firstpass == $confirmpass){
           
            $sql1 = "update register set password = '$firstpass' where username = '$username' " ;
            $query1 = mysqli_query($conn,$sql1);
            if($query1){
                echo '<script>alert("Password is Updated , Pls Login Now")</script>' ;
                echo "<script> location.replace('login.html')</script> ";
            }else{
                echo '<script>alert("OOPS something Went wrong ")</script>' ;
            }

        }else{
            echo '<script>alert("Passwords are not matching")</script>' ;
        }
    }else{
        echo '<script>alert("Pls enter correct credentials ")</script>' ;
    }





    }

?>