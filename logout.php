<?php

session_start();

session_destroy();

echo "<script> alert('You are successfully Logged Out')</script> ";

echo "<script> location.replace('login.html')</script> ";





?>