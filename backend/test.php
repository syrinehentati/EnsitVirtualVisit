
<?php 
class Avatar {
  public $URL;
  public $name;

  public function __construct($URL,$name){
      $this->URL=$URL;
      $this->name=$Name;
  }

}

header('Content-Type: application/json');
$listAvatar = array(new Avatar("habc","keranis"),new Avatar("hello","hey"));
 echo json_encode($listAvatar);
 ?>
