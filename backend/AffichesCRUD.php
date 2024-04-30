<?php
include 'db_connection.php';

class AffichesCRUD {
    private $db;

   

        private $allowedImagePath;
    
        public function __construct() {
            $db_conx = new DB_Connection();
            $this->db = $db_conx->get_connection();
            // Define the allowed path for images
            $this->allowedImagePath = 'C:\Users\syrine\OneDrive\Bureau\2eme anne GI\pfatest\toangular\EnsitVirtualVisit\src\assets\images';
        }
    
        public function createAffiche($affiche) {
            // Define the destination folder for images
            $destinationFolder = './affiches/';
    
            // Extract filename from the provided image path
            $filename = basename($affiche->image);
            $imageFullPath = $this->allowedImagePath . DIRECTORY_SEPARATOR . $filename;
    
            // Extract filename from the provided couverture path
            $filenamecouverture = basename($affiche->couverture);
            $couvertureFullPath = $this->allowedImagePath . DIRECTORY_SEPARATOR . $filenamecouverture;
    
            // Check if the image and couverture are from the allowed path and if they exist
            if (strpos($imageFullPath, $this->allowedImagePath) === 0 && file_exists($imageFullPath) &&
                strpos($couvertureFullPath, $this->allowedImagePath) === 0 && file_exists($couvertureFullPath)) {
                // Read image data
                $imageData = file_get_contents($imageFullPath);
                $couvertureData = file_get_contents($couvertureFullPath);
    
                // Prepare destination file paths
                $destinationImage = $destinationFolder . $filename;
                $destinationCouverture = $destinationFolder . $filenamecouverture;
    
                // Save images to the destination folder
                if (($imageData !== false && file_put_contents($destinationImage, $imageData) !== false) &&
                    ($couvertureData !== false && file_put_contents($destinationCouverture, $couvertureData) !== false)) {
                    // Images copied successfully
                    echo "Images copied successfully to $destinationImage and $destinationCouverture";
                } else {
                    // Failed to copy images
                    echo "Failed to copy images to $destinationImage and $destinationCouverture";
                    return false;
                }
            } else {
                // Image paths are not allowed or images don't exist
                echo "Image paths are not allowed or images don't exist";
                return false;
            }
    
            // Continue with the rest of your code for inserting into database
            $sql = "INSERT INTO affiches (titre, sujet, description, localisationAffiche, image, couverture, prix, existant, lien) VALUES (:titre, :sujet, :description, :localisationAffiche, :image, :couverture, :prix, :existant, :lien)";
            $stmt = $this->db->prepare($sql);
    
            return $stmt->execute([
                ':titre' => $affiche->titre,
                ':sujet' => $affiche->sujet,
                ':description' => $affiche->description,
                ':localisationAffiche' => $affiche->localisationAffiche,
                ':image' => $filename,
                ':couverture' => $filenamecouverture,
                ':prix' => $affiche->prix,
                ':existant' => $affiche->existant,
                ':lien' => $affiche->lien
            ]);
        }
    // Read operation
    public function getAffiche($id) {
        $sql = "SELECT * FROM affiches WHERE idAffiche = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Read operation - Get all affiches
    public function getAllAffiches() {
        $sql = "SELECT * FROM affiches";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update operation
    public function updateAffiche($id, $affiche) {
        $sql = "UPDATE affiches SET titre = :titre, sujet = :sujet, description = :description, localisationAffiche = :localisationAffiche, image = :image, couverture = :couverture, prix = :prix, existant = :existant, lien = :lien WHERE idAffiche = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':titre' => $affiche->titre,
            ':sujet' => $affiche->sujet,
            ':description' => $affiche->description,
            ':localisationAffiche' => $affiche->localisationAffiche,
            ':image' => $affiche->image,
            ':couverture' => $affiche->couverture,
            ':prix' => $affiche->prix,
            ':existant' => $affiche->existant,
            ':lien' => $affiche->lien
        ]);
    }

    // Delete operation
    public function deleteAffiche($id) {
        $sql = "DELETE FROM affiches WHERE idAffiche = :id";
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
$affichesCRUD = new AffichesCRUD();

switch ($requestMethod) {
    case 'GET':
        if ($id !== null) {
            $affiche = $affichesCRUD->getAffiche($id);
            if ($affiche) {
                echo json_encode($affiche);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Affiche not found."));
            }
        } else {
            $affiches = $affichesCRUD->getAllAffiches();
            echo json_encode($affiches);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $created = $affichesCRUD->createAffiche($data);
        if ($created) {
            http_response_code(201);
            echo json_encode(array("message" => "Affiche created."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to create affiche."));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"));
        $updated = $affichesCRUD->updateAffiche($id, $data);
        if ($updated) {
            echo json_encode(array("message" => "Affiche updated."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to update affiche."));
        }
        break;
    case 'DELETE':
        $deleted = $affichesCRUD->deleteAffiche($id);
        if ($deleted) {
            echo json_encode(array("message" => "Affiche deleted."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to delete affiche."));
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
        break;
}
?>
