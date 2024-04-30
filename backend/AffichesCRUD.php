<?php
include 'db_connection.php';

class AffichesCRUD {
    private $db;

    public function __construct() {
        $db_conx = new DB_Connection();
        $this->db = $db_conx->get_connection();
    }

    // Create operation
    public function createAffiche($affiche) {
        $sql = "INSERT INTO affiches (titre, sujet, description, localisationAffiche, image, couverture, prix, existant, lien) VALUES (:titre, :sujet, :description, :localisationAffiche, :image, :couverture, :prix, :existant, :lien)";
        $stmt = $this->db->prepare($sql);

        $imageUrl = $affiche->image ?? null;
        $filename = basename($imageUrl);
        $destinationFolder = './affiches/';
        $destinationFile = $destinationFolder . $filename;
        $imageData = file_get_contents($imageUrl);

        if ($imageData !== false) {
            $result = file_put_contents($destinationFile, $imageData);
            if ($result !== false) {
                echo "Image copied successfully to $destinationFile";
            } else {
                echo "Failed to copy image to $destinationFile";
            }
        } else {
            echo "Failed to retrieve image data from $imageUrl";
        }

        // Retrieve and process couverture image
        $couvertureUrl = $affiche->couverture ?? null;
        $couvertureFilename = basename($couvertureUrl);
        $destinationCouvertureFile = $destinationFolder . $couvertureFilename;
        $couvertureData = file_get_contents($couvertureFilename);

        if ($couvertureData !== false) {
            $couvertureResult = file_put_contents($destinationCouvertureFile, $couvertureData);
            if ($couvertureResult !== false) {
                echo "Image couverture copied successfully to $destinationCouvertureFile";
            } else {
                echo "Failed to copy image couverture to $destinationCouvertureFile";
            }
        } else {
            echo "Failed to retrieve image couverture data from $couvertureUrl";
        }

        return $stmt->execute([
            ':titre' => $affiche->titre,
            ':sujet' => $affiche->sujet,
            ':description' => $affiche->description,
            ':localisationAffiche' => $affiche->localisationAffiche,
            ':image' => $filename,
            ':couverture' => $couvertureFilename,
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