<?php 

    require_once 'login.php';
    $connection = new mysqli($hn, $un, $pw, $db);
    if($connection->connect_error) die("Fatal Error");  
    
?>