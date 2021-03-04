<?php 

    require_once 'database.php';
    require_once 'model.php';

    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    
    $sku = json_decode($content, true);

    var_dump($sku);

    $deleteItems = new Model();

    $deleteItems->deleteProducts($sku);

    }
?>