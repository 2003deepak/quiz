<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup.css">
    <title>Online KC Quiz </title>
</head>
<body>
<header>

<!-- This is for navigation Bar  -->

    <nav>
        <a href="index.php"  target="_blank" class="Navigation" ><b> Home </b></a>
        <a href="signup.php"  target="_blank" class="Navigation"><b> SignUp </b> </a>
        <a href="login.php"  target="_blank" class="Navigation"><b> Login </b></a>
        <a href="contact.php"  target="_blank" class="Navigation"><b> Contact </b></a>
    </nav>

</header>

<div class="Signup" >
        

        

            <form action="register.php" method="post">
            
                <img src = "images/loginavatar.png" alt="Login" height="120px" id="avatar">
                <br>
                <h1>Sign Up Now </h1>
                <br>
                <p class ="textf" > <b>Username</b></p>
                <input type="text" placeholder="Enter The Username" class="text" name="username">
                <p class="textf"> <b>Password </b></p>
                <input type="password" placeholder="Enter Your Password" class="text" name="password">
                <br>
                <p class="textf"><b>Email Id </b></p>
                <input type="email" placeholder="Enter Your Email Id" class="text" name="email">
                <br>
                <br>
                <p class = "textf"><b>Stream</b> </p>

                    
                <select name = "stream" class= "dropdown">
                    <option value = "BCOM">BCOM (Any specialization)</option>
                    <option value = "BSC">BSC (Any specialization)</option>
                    <option value = "BA">BA ( Any specialization)</option>
                </select>

                <br>
                <p class="textf"><b>Gender</b></p>
                
                <!-- This is the Button for submitting and reset  -->
                <input type="radio" value = "Male" name="gender">Male
                <br>
                <input type="radio" value = "Female" name="gender">Female
                <br>
                <br>

               
                <input type= "submit" value = "Sign Up " name = "save" class="signupbtn"></button>
                <p id = "learn"><b>Do You Have an Account ? </b><a href="login.php">Login</a></p>

                
            </form>
                
         
        </div> 
        

        
    
</body>
</html>