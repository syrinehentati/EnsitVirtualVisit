<?php
include 'db_connection.php';

class AvatarCRUD {
    private $db;

    public function __construct() {
        $db_conx = new DB_Connection();
        $this->db = $db_conx->get_connection();
    }

    // Create operation
    public function createAvatar($avatar) {
        $sql = "INSERT INTO avatar (url, avatarName, description, existant, sexe, mail) VALUES (:url, :avatarName, :description, :existant, :sexe, :mail)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':url' => $avatar->url,
            ':avatarName' => $avatar->avatarName,
            ':description' => $avatar->description,
            ':existant' => $avatar->existant,
            ':sexe' => $avatar->sexe,
            ':mail' => $avatar->mail
        ]);
    }

    // Read operation
    public function getAvatar($id) {
        $sql = "SELECT * FROM avatar WHERE url = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Read operation - Get all avatars
    public function getAllAvatars() {
        $sql = "SELECT * FROM avatar";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update operation
    public function updateAvatar($id, $avatar) {
        $sql = "UPDATE avatar SET url = :url, avatarName = :avatarName, description = :description, existant = :existant, sexe = :sexe, mail = :mail WHERE url = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':url' => $avatar->url,
            ':avatarName' => $avatar->avatarName,
            ':description' => $avatar->description,
            ':existant' => $avatar->existant,
            ':sexe' => $avatar->sexe,
            ':mail' => $avatar->mail
        ]);
    }

    // Delete operation
    public function deleteAvatar($id) {
        $sql = "DELETE FROM avatar WHERE url = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }

    // New method to get avatar by email
    public function getAvatarByEmail($email) {
        $sql = "SELECT * FROM avatar WHERE mail = :email";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':email' => $email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}

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
$avatarCRUD = new AvatarCRUD();

switch ($requestMethod) {
    case 'GET':
        if ($id !== null) {
            $avatar = $avatarCRUD->getAvatar($id);
            if ($avatar) {
                echo json_encode($avatar);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Avatar not found."));
            }
        } elseif (isset($_GET['email'])) {
            $email = $_GET['email'];
            $avatar = $avatarCRUD->getAvatarByEmail($email);
            if ($avatar) {
                echo json_encode($avatar);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Avatar not found for the provided email."));
            }
        } else {
            $avatars = $avatarCRUD->getAllAvatars();
            echo json_encode($avatars);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $created = $avatarCRUD->createAvatar($data);
        if ($created) {
            http_response_code(201);
            echo json_encode(array("message" => "Avatar created."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to create avatar."));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"));
        $updated = $avatarCRUD->updateAvatar($id, $data);
        if ($updated) {
            echo json_encode(array("message" => "Avatar updated."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to update avatar."));
        }
        break;
    case 'DELETE':
        $deleted = $avatarCRUD->deleteAvatar($id);
        if ($deleted) {
            echo json_encode(array("message" => "Avatar deleted."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to delete avatar."));
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
        break;
}
?>
