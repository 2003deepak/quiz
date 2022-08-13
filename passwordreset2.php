<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online KC Test </title>
    <link rel="stylesheet" href="passwordreset.css">
</head>
<body>

    <nav>
        <a href="index.php"  target="_blank" class="Navigation" ><b> Home </b></a>
        <a href="signup.php"  target="_blank" class="Navigation"><b> SignUp </b> </a>
        <a href="login.php"  target="_blank" class="Navigation"><b> Login </b></a>
        <a href="contact.php"  target="_blank" class="Navigation"><b> Contact </b></a>
    </nav>

    <div class = "forgot">

        <form action="reset2.php" method = "post">

        <h1>Reset Your Password </h1>


        <p>Username</p>
        <input type="text" name="username" placeholder="Enter Your Username">

        <p>Password</p>
        <input type="password" name="firstpass" placeholder="Enter Your Password">

        <p>Confirm Password</p>
        <input type="text" name="confirmpass" placeholder="Enter Your Confirm Password ">
        <br>
        <br>
        <input type="submit" value="Set Password " name = "submit">
        <br>
        <br>

        <a href="login.php'" id = "backtosignin">Back to sign in </a>

        </form>

    </div>

</body>
</html>