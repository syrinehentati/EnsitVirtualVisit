<?php
include 'db_connection.php';

class JoueurCRUD {
    private $db;

    public function __construct() {
            $db_conx = new DB_Connection();
            $this->db = $db_conx->get_connection();
        }

    // Create operation
    public function createJoueur($joueur) {
        $sql = "INSERT INTO joueur (nom, email, pass, profession, dateNaissance) VALUES (:nom, :email, :pass, :profession, :dateNaissance)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':nom' => $joueur->nom,
            ':email' => $joueur->email,
            ':pass' => $joueur->pass,
            ':profession' => $joueur->profession,
            ':dateNaissance' => $joueur->dateNaissance
        ]);
    }

    // Read operation
    public function getJoueur($id) {
        $sql = "SELECT * FROM joueur WHERE email = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Read operation - Get all joueurs
    public function getAllJoueurs() {
        $sql = "SELECT * FROM joueur";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update operation
    public function updateJoueur($id, $joueur) {
        $sql = "UPDATE joueur SET nom = :nom, email = :email, pass = :pass, profession = :profession, dateNaissance = :dateNaissance WHERE email = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':nom' => $joueur->nom,
            ':email' => $joueur->email,
            ':pass' => $joueur->pass,
            ':profession' => $joueur->profession,
            ':dateNaissance' => $joueur->dateNaissance
        ]);
    }

    // Delete operation
    public function deleteJoueur($id) {
        $sql = "DELETE FROM joueur WHERE email = :id";
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

$joueurCRUD = new JoueurCRUD();

switch ($requestMethod) {
    case 'GET':
        if ($id !== null) {
            $joueur = $joueurCRUD->getJoueur($id);
            if ($joueur) {
                echo json_encode($joueur);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Joueur not found."));
            }
        } else {
            $joueurs = $joueurCRUD->getAllJoueurs();
            echo json_encode($joueurs);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $created = $joueurCRUD->createJoueur($data);
        if ($created) {
            http_response_code(201);
            echo json_encode(array("message" => "Joueur created."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to create joueur."));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"));
        $updated = $joueurCRUD->updateJoueur($id, $data);
        if ($updated) {
            echo json_encode(array("message" => "Joueur updated."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to update joueur."));
        }
        break;
    case 'DELETE':
        $deleted = $joueurCRUD->deleteJoueur($id);
        if ($deleted) {
            echo json_encode(array("message" => "Joueur deleted."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to delete joueur."));
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
        break;
}

?>
