<?php 
include 'DB_Connection.php';

// Handle HTTP requests
$requestMethod = $_SERVER["REQUEST_METHOD"];
$id = $_GET['id'] ?? null;
// Handle preflight OPTIONS request
if ($requestMethod === 'OPTIONS') {
    // Respond with appropriate headers
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    exit; // Terminate script execution
}
// Instantiate the DB_Connection class
$db_connection = new DB_Connection();
$conn = $db_connection->get_connection();

// Check if the 'url' parameter is set
if (isset($_GET['url'])) {
    // Get the URL parameter value
    $url = $_GET['url'];

    // Prepare a SQL statement to select avatar details based on the URL
    $sql = "SELECT * FROM Avatar WHERE url = :url";

    // Prepare the statement
    $stmt = $conn->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':url', $url);

    // Execute the prepared statement
    $stmt->execute();

    // Check if there are any results
    if ($stmt->rowCount() > 0) {
        // Output data of each row
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo  $row['avatarName'] . " || " .
                  $row['description'] . " || " .
                  $row['jokes'] . " || " .
                  $row['existant'] . " || " .
                  $row['sexe'] . " || " .
                  $row['mail'] . "<br>";
        }
    } else {
        echo "No results found for the provided URL.";
    }
} else {
    // Prepare a SQL statement to select avatar details where mail is empty
    $sql = "SELECT * FROM Avatar WHERE mail = '' ORDER BY RAND()";

    // Execute the SQL statement
    $result = $conn->query($sql);

    // Check if there are any results
    if ($result->rowCount() > 0) {
        // Output data of each row
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo  $row['url'] . " || " .
                  $row['avatarName'] . " || " .
                  $row['description'] . " || " .
                  $row['jokes'] . " || " .
                  $row['existant'] . " || " .
                  $row['sexe'] . " || " .
                  $row['mail'] . "<br>";
        }
    }

    echo "-*-*-";
    
    // Prepare a SQL statement to select avatar details where mail is not empty
    $sql = "SELECT * FROM Avatar WHERE mail != '' ORDER BY RAND()";

    // Execute the SQL statement
    $result = $conn->query($sql);

    // Check if there are any results
    if ($result->rowCount() > 0) {
        // Output data of each row
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo  $row['url'] . " || " .
                  $row['avatarName'] . " || " .
                  $row['description'] . " || " .
                  $row['jokes'] . " || " .
                  $row['existant'] . " || " .
                  $row['sexe'] . " || " .
                  $row['mail'] . "<br>";
        }
    }
}

// Close connection
$conn = null;
?>
