<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online KC Test </title>
    <link rel="stylesheet" href="forgot.css">
</head>
<body>

    <nav>
        <a href="index.php"  target="_blank" class="Navigation" ><b> Home </b></a>
        <a href="signup.php"  target="_blank" class="Navigation"><b> SignUp </b> </a>
        <a href="login.php"  target="_blank" class="Navigation"><b> Login </b></a>
        <a href="contact.php"  target="_blank" class="Navigation"><b> Contact </b></a>
    </nav>

    <div class = "forgot">

        <form action="reset.php">

        <h1>Forgot your password ?</h1>

        <p>Username</p>
        <input type="text" name="username" placeholder="Enter Your Username">

        <p>Email Id</p>
        <input type="email" name="email" placeholder="Enter Your Registered Email ID">
        <br>
        <br>
        <input type="submit" value="Send Verification Link" name = "submit">
        <br>
        <br>

        <a href="login.php'" id = "backtosignin">Back to sign in </a>

        </form>

    </div>


</body>
</html>