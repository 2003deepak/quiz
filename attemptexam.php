<?php
include 'config.php' ;

if(isset($_POST['submit'])){

    $level = $_POST['dropdown'] ;
    $sql = "INSERT INTO register (`level`) VALUES ('$level');

    if ($conn->query($sql) === TRUE) {
        echo '<script> alert("done")</script>';
    }else {
        echo '<script> alert("not ready")</script>' ;
      }
    }



?>