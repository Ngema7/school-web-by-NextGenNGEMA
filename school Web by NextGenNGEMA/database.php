<?php
// Database connection
$servername = "localhost"; 
$username = "root";        
$password = "";           
$database = "ngema_db";  

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get and sanitize input
    $full_name = trim($_POST['name']);
    $phone_no  = trim($_POST['phone_no']);
    $email     = trim($_POST['email']);
    $subject   = trim($_POST['subject']);

    // Check if any field is empty
    if ($full_name && $phone_no && $email && $subject) {

        // Insert into database
        $sql = "INSERT INTO `register-form` (name, phone_no, email, subject)
                VALUES ('$full_name', '$phone_no', '$email', '$subject')";

        if (mysqli_query($conn, $sql)) {
            echo "<p style='color:green;'>Registration Successful!</p>";
        } else {
            echo "Error: " . mysqli_error($conn);
        }

    } else {
        echo "<p style='color:red;'>Please fill all fields!</p>";
    }
}

$conn->close();
?>
