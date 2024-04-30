<?php
include 'cors.php';
class DB_Connection {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "unitytuto";
    public $conn;

    public function __construct() {
        try {
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function get_connection() {
        return $this->conn;
    }
}

?>
