<?php 

session_start() ;

include 'config.php' ;

if(isset($_POST['submit'])){

    $username=$_POST['username'];
    $password = $_POST['password'];

    $sql = "select * from register where username = '$username' and password = '$password' " ;
    $query = mysqli_query($conn,$sql);

    $row = mysqli_num_rows($query);
    
    if($row ==1){
        echo '<script>alert("You are succesfully Logined ")</script>' ;
        echo "<script> location.replace('welcome.html')</script> ";
  
    }else{
         echo '<script>alert("Invalid username or Password ")</script>' ;
         echo "<script> location.replace('login.html')</script> ";
    }
                        
    }
        

?>