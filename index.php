<?php
session_start(); // Start the session to manage user login state

// Include database connection file
include('db_connection.php'); // Make sure to create this file to handle database connection

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $username_or_email = $_POST['username_or_email'];
    $password = $_POST['password'];
    
    // Perform your login logic here
    // Example: Check user credentials in the database
    // ...

    if ($login_successful) {
        $_SESSION['user'] = $username_or_email; // Set session variable
        header('Location: dashboard.php'); // Redirect to a dashboard or homepage
        exit();
    } else {
        $login_error = "Invalid username or password.";
    }
}

// Handle registration form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Perform your registration logic here
    // Example: Insert new user into the database
    // ...

    if ($registration_successful) {
        header('Location: login.php'); // Redirect to login page
        exit();
    } else {
        $registration_error = "Registration failed. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="styles.css">
    <title>Janakpur Cinema Login In</title>
    <link rel="shortcut icon" type="x-icon" href="https://i.ibb.co/zPMMNQN/Screenshot-276.png">
</head>
<body>
 <div class="wrapper">
    <nav class="nav">
        <div class="nav-logo">
          <img src="https://i.ibb.co/L6wD9jQ/Picsart-24-08-15-13-52-49-077.png" alt="">
        </div>
        <div class="nav-menu" id="navMenu">
            <ul>
                <li><a href="https://pradeepsah29.github.io/cinema/#" class="link active">Home</a></li>
                <li><a href="#" class="link">About</a></li>
            </ul>
        </div>
        <div class="nav-button">
            <button class="btn white-btn" id="loginBtn" onclick="login()">Sign In</button>
            <button class="btn" id="registerBtn" onclick="register()">Sign Up</button>
        </div>
        <div class="nav-menu-btn">
            <i class="bx bx-menu" onclick="myMenuFunction()"></i>
        </div>
    </nav>

    <!-- Form Box -->
    <div class="form-box">
        <!-- Login Form -->
        <div class="login-container" id="login">
            <div class="top">
                <span>Don't have an account? <a href="#" onclick="register()">Sign Up</a></span>
                <header>Login</header>
            </div>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>
                <div class="input-box">
                    <input type="text" name="username_or_email" class="input-field" placeholder="Username or Email" required>
                    <i class="bx bx-user"></i>
                </div>
                <div class="input-box">
                    <input type="password" name="password" id="login-password" class="input-field" placeholder="Password" required>
                    <i class="bx bx-lock-alt" id="toggle-login-password"></i>
                </div>
                <div class="input-box">
                    <input type="submit" name="login" class="submit" value="Sign In">
                </div>
                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="login-check" name="remember_me">
                        <label for="login-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
                <?php if (isset($login_error)): ?>
                    <div class="error"><?php echo $login_error; ?></div>
                <?php endif; ?>
            </form>
        </div>

        <!-- Registration Form -->
        <div class="register-container" id="register">
            <div class="top">
                <span>Have an account? <a href="#" onclick="login()">Login</a></span>
                <header>Sign Up</header>
            </div>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                <div class="two-forms">
                    <div class="input-box">
                        <input type="text" name="firstname" class="input-field" placeholder="Firstname" required>
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" name="lastname" class="input-field" placeholder="Lastname" required>
                        <i class="bx bx-user"></i>
                    </div>
                </div>
                <div class="input-box">
                    <input type="email" name="email" class="input-field" placeholder="Email" required>
                    <i class="bx bx-envelope"></i>
                </div>
                <div class="input-box">
                    <input type="password" name="password" id="register-password" class="input-field" placeholder="Password" required>
                    <i class="bx bx-lock-alt" id="toggle-register-password"></i>
                </div>
                <div class="input-box">
                    <input type="submit" name="register" class="submit" value="Register">
                </div>
                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="register-check" name="remember_me">
                        <label for="register-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label><a href="#">Terms & conditions</a></label>
                    </div>
                </div>
                <?php if (isset($registration_error)): ?>
                    <div class="error"><?php echo $registration_error; ?></div>
                <?php endif; ?>
            </form>
        </div>
    </div>
</div>   

<script>
    function myMenuFunction() {
        var i = document.getElementById("navMenu");

        if(i.className === "nav-menu") {
            i.className += " responsive";
        } else {
            i.className = "nav-menu";
        }
    }

    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    // Toggle Password Visibility
    document.getElementById('toggle-login-password').addEventListener('click', function () {
        const passwordField = document.getElementById('login-password');
        const toggleIcon = this;
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.remove('bx-lock-alt');
            toggleIcon.classList.add('bx-show');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.remove('bx-show');
            toggleIcon.classList.add('bx-lock-alt');
        }
    });

    document.getElementById('toggle-register-password').addEventListener('click', function () {
        const passwordField = document.getElementById('register-password');
        const toggleIcon = this;
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.remove('bx-lock-alt');
            toggleIcon.classList.add('bx-show');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.remove('bx-show');
            toggleIcon.classList.add('bx-lock-alt');
        }
    });
</script>

</body>
</html>
