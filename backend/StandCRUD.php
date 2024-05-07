<?php
include 'db_connection.php';

class StandCRUD {
    private $db;
    private $allowedImagePath;

    public function __construct() {
        $db_conx = new DB_Connection();
        $this->db = $db_conx->get_connection();
        // Define the allowed path for images
        $this->allowedImagePath = 'C:\Users\syrine\OneDrive\Bureau\2eme anne GI\pfatest\backup\EnsitVirtualVisit\src\assets\images';
    }

    // Create operation
    public function createStand($stand) {
        // Define the destination folder for images
        $destinationFolder = './stands/';

        // Extract filename from the provided image path and remove spaces
        $filename = basename($stand->image);
        $filename = str_replace(' ', '', $filename);
        $imageFullPath = $this->allowedImagePath . DIRECTORY_SEPARATOR . $filename;

        // Check if the image is from the allowed path and if it exists
        if (strpos($imageFullPath, $this->allowedImagePath) === 0 && file_exists($imageFullPath)) {
            // Read image data
            $imageData = file_get_contents($imageFullPath);

            // Prepare destination file path
            $destinationImage = $destinationFolder . $filename;

            // Save image to the destination folder
            if ($imageData !== false && file_put_contents($destinationImage, $imageData) !== false) {
                // Image copied successfully
                echo "Image copied successfully to $destinationImage";
            } else {
                // Failed to copy image
                echo "Failed to copy image to $destinationImage";
                return false;
            }
        } else {
            // Image path is not allowed or image doesn't exist
            echo "Image path is not allowed or image doesn't exist";
            return false;
        }

        // Continue with the rest of your code for inserting into the database
        $sql = "INSERT INTO Stand (standType, nom, sujet, description, image, prix, existant, lien) VALUES (:standType, :nom, :sujet, :description, :image, :prix, :existant, :lien)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':standType' => $stand->standType,
            ':nom' => $stand->nom,
            ':sujet' => $stand->sujet,
            ':description' => $stand->description,
            ':image' => $filename,
            ':prix' => $stand->prix,
            ':existant' => $stand->existant,
            ':lien' => $stand->lien
        ]);
    }

    // Read operation
    public function getStand($id) {
        $sql = "SELECT * FROM Stand WHERE idStand = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Read operation - Get all stands
    public function getAllStands() {
        $sql = "SELECT * FROM Stand";
        $stmt = $this->db->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update operation
    public function updateStand($id, $stand) {
        $sql = "UPDATE Stand SET standType = :standType, nom = :nom, sujet = :sujet, description = :description, image = :image, prix = :prix, existant = :existant, lien = :lien WHERE idStand = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':standType' => $stand->standType,
            ':nom' => $stand->nom,
            ':sujet' => $stand->sujet,
            ':description' => $stand->description,
            ':image' => $stand->image,
            ':prix' => $stand->prix,
            ':existant' => $stand->existant,
            ':lien' => $stand->lien
        ]);
    }

    // Delete operation
    public function deleteStand($id) {
        $sql = "DELETE FROM Stand WHERE idStand = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }
}

// Handle HTTP requests
$requestMethod = $_SERVER["REQUEST_METHOD"];
$id = $_GET['id'] ?? null;
if ($requestMethod === 'OPTIONS') {
    // Respond with appropriate headers
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    exit; // Terminate script execution
}
$standCRUD = new StandCRUD();

switch ($requestMethod) {
    case 'GET':
        if ($id !== null) {
            $stand = $standCRUD->getStand($id);
            if ($stand) {
                echo json_encode($stand);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Stand not found."));
            }
        } else {
            // Get all stands
            $stands = $standCRUD->getAllStands();
            echo json_encode($stands);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $created = $standCRUD->createStand($data);
        if ($created) {
            http_response_code(201);
            echo json_encode(array("message" => "Stand created."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to create stand."));
        }
        break;
    case 'PUT':
        if ($id !== null) {
            $data = json_decode(file_get_contents("php://input"));
            $updated = $standCRUD->updateStand($id, $data);
            if ($updated) {
                echo json_encode(array("message" => "Stand updated."));
            } else {
                http_response_code(500);
                echo json_encode(array("message" => "Failed to update stand."));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Bad Request. ID parameter missing."));
        }
        break;
    case 'DELETE':
        if ($id !== null) {
            $deleted = $standCRUD->deleteStand($id);
            if ($deleted) {
                echo json_encode(array("message" => "Stand deleted."));
            } else {
                http_response_code(500);
                echo json_encode(array("message" => "Failed to delete stand."));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Bad Request. ID parameter missing."));
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
        break;
}

?>
