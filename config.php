<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "kconlinequiz";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

?>