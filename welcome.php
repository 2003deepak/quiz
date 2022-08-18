<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="welcome.css">
    <title>KC Online Test </title>
</head>
<body>
    <div class= "full">
        <form action="attemptexam.php" method = "post">
            <h3>Which Level Do you Want to Attempt </h3>
            <select name="dropdown">
                <option value="easy">Easy(1 Marks/Question)</option>
                <option value="medium">Medium(2 Marks/Question)</option>
                <option value="hard">Hard(5 Marks/Question)</option>
            </select>
            <br>
            <h2>Rules Of The Quiz </h2>
    
            <div class="rules">
                <ol>
                    <li>Total Marks of quiz is 50 and marks of each question depends on the level you have choosen .</li>
                <br>
                    <li>You will get points on the basis of your correct answer and no negative marks .</li>
                <br>
                    <li>Quiz will contain some question from your Background , Maths , General Science , General Knowledge .</li>
                <br>
                    <li>Quiz can't be attended twice , if attended marks of the first attempt will be registered .</li>    
                <br>
            
                </ol>
            
            </div>
            <input type="submit" value="Start Quiz" name = "submit">
        </form>
    </div>
</body>
</html>