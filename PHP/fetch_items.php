<?php 

// require_once 'login.php';
// require_once 'connecting.php';
require_once 'database.php';
require_once 'model.php';


ini_set("display_errors", 1);
ini_set("track_errors", 1);
ini_set("html_errors", 1);
error_reporting(E_ALL);

$getItems = new Model();

echo json_encode($getItems->select());


?>