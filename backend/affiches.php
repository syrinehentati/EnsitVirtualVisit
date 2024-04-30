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

$sql = "select * from Affiches where existant = 1";

$result = $conn->query($sql);

if ($result->rowCount() > 0){
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        echo $row['idAffiche']." || ".
            $row['titre']." || ".
            $row['sujet']." || ".
            $row['description']." || ".
            $row['localisationAffiche']." || ".
            $row['image']." || ".
            $row['couverture']." || ".
            $row['prix']." || ".
            $row['lien'].
            "<br>";
    }
} else {
    echo "0 results ";
}

// Close the database connection
$conn = null;
?>
