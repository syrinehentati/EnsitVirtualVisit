<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "unitytuto";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // username and password sent from form
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Login successful
        session_start();
        $_SESSION['login_user'] = $email;
        echo "location: welcome.php" ;
    } else {
        $error = "Your Login Name or Password is invalid";
    }
}

$conn->close();
?>
