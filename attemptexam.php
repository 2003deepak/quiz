<?php

include 'config.php' ;

if(isset($_POST['submit'])){

    $questionlevel = $_POST['questionlevel'];
    $username = $_POST['username'] ;
    // $_SESSION['username'] = $username ;
    $sql1 = " select * from register where username = '$username'" ;
    // echo "hello " .$_SESSION['username'];
    $query = mysqli_query($conn,$sql1);

    $row = mysqli_num_rows($query);

    if($row){

        $sql2 = "UPDATE register SET level = '$questionlevel' WHERE username = '$username';";
        if ($conn->query($sql2) === TRUE) {
            echo "<script> alert('Pls attempt Your Exam')</script>";
            if($questionlevel == "easy"){
                echo "<script> location.replace('easy.html')</script> ";
 
            }else if($questionlevel == "medium"){
                echo "<script> location.replace('medium.html')</script> ";
 
            }else{
                
                echo "<script> location.replace('hard.html')</script> ";

            }
        }else {
            echo "<script> alert('Pls try again Later')</script>" ;
      }
    }else{
        echo '<script>alert("Pls enter correct credentials ")</script>' ;
        echo "<script> location.replace('welcome.html')</script> ";
    }
}
