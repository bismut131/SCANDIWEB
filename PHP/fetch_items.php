<?php 

require_once 'login.php';
require_once 'connecting.php';

$query = "SELECT * FROM items";
$result = $connection->query($query);

$data = array();

while($row = $result -> fetch_assoc()) {
    array_push($data,$row);
}

echo json_encode($data);


?>