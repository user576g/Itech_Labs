<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laba4</title>
<style>
div.container {
    text-align: center;   
}
#login_form > fieldset {
	display: inline;
}

#login_form > input[type=submit] {
	margin-top: 5px;
}   
    
</style>

</head>
<body>
   <?php
         $lines = file("users.dat");       
   ?>
<div class="container">
    <form id="login_form" method="post" action="index.php">
	<fieldset >
		<legend>Login</legend>
		<input name="login"/><br/>
	</fieldset><br/>
	<fieldset>
		<legend>Password</legend>
		<input type="password" name="password"/>
	</fieldset><br/>
	
	<input type="submit" name="submit">								
</form>
</div>
   
    <?php 
        if(isset($_POST['submit']))  {
            if ($_POST['login'] === trim($lines[0]) && $_POST['password'] === trim($lines[1]) ){
                echo "<p>Вы залогинены!!!</p>";
            } else {
                echo "<p>Ошибка! Неправильно введен логин и/или пароль!</p>";
            }
        }
    ?>    
</body>
</html>