<?php
// Set CORS headers
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include 'db_connection.php';

class AdministrateurCRUD {
    private $db;

    public function __construct() {
        $db_conx = new DB_Connection();
        $this->db = $db_conx->get_connection();
    }

    // Create operation
    public function createAdministrateur($administrateur) {
        $sql = "INSERT INTO administrateur (email, pass) VALUES (:email, :pass)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':email' => $administrateur->email,
            ':pass' => $administrateur->pass
        ]);
    }

    // Read operation
    public function getAdministrateur($id) {
        $sql = "SELECT * FROM administrateur WHERE email = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Read operation - Get all administrators
    public function getAllAdministrateurs() {
        $sql = "SELECT * FROM administrateur";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update operation
    public function updateAdministrateur($id, $administrateur) {
        $sql = "UPDATE administrateur SET email = :email, pass = :pass WHERE email = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':email' => $administrateur->email,
            ':pass' => $administrateur->pass
        ]);
    }

    // Delete operation
    public function deleteAdministrateur($id) {
        $sql = "DELETE FROM administrateur WHERE email = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }
}

// Handle HTTP requests
$requestMethod = $_SERVER["REQUEST_METHOD"];
$id = $_GET['id'] ?? null;

if ($requestMethod === 'OPTIONS') {
    // Respond with appropriate headers for preflight requests
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    exit; // Terminate script execution
}

$administrateurCRUD = new AdministrateurCRUD();

switch ($requestMethod) {
    case 'GET':
        if ($id !== null) {
            $administrateur = $administrateurCRUD->getAdministrateur($id);
            if ($administrateur) {
                echo json_encode($administrateur);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Administrateur not found."));
            }
        } else {
            $administrateurs = $administrateurCRUD->getAllAdministrateurs();
            echo json_encode($administrateurs);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $created = $administrateurCRUD->createAdministrateur($data);
        if ($created) {
            http_response_code(201);
            echo json_encode(array("message" => "Administrateur created."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to create administrateur."));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"));
        $updated = $administrateurCRUD->updateAdministrateur($id, $data);
        if ($updated) {
            echo json_encode(array("message" => "Administrateur updated."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to update administrateur."));
        }
        break;
    case 'DELETE':
        $deleted = $administrateurCRUD->deleteAdministrateur($id);
        if ($deleted) {
            echo json_encode(array("message" => "Administrateur deleted."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to delete administrateur."));
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
        break;
}

?>
