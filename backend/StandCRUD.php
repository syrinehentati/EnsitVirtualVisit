<?php
include 'db_connection.php';

class StandCRUD {
    private $db;

    public function __construct() {
            $db_conx = new DB_Connection();
            $this->db = $db_conx->get_connection();
        }

    // Create operation
    public function createStand($stand) {
        $sql = "INSERT INTO Stand (standType, nom, sujet, description, image, prix, existant, lien) VALUES (:standType, :nom, :sujet, :description, :image, :prix, :existant, :lien)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
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
