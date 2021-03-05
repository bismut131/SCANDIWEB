<?php 
    require_once 'model.php';
    require_once 'database.php';

    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    
    $sku = json_decode($content, true);

    $deleteItems = new Model();

    $deleteItems->deleteProducts($sku);
    
    echo json_encode($deleteItems->select());

    }
?>