<?php 

require_once 'product.php';
require_once 'dvd.php';
require_once 'book.php';
require_once 'furniture.php';
require_once 'database.php';
require_once 'model.php';


ini_set("display_errors", 1);
ini_set("track_errors", 1);
ini_set("html_errors", 1);
error_reporting(E_ALL);

   $sku = $_POST['sku'];
   $name = $_POST['name'];
   $price = $_POST['price'];
   $type = $_POST['type-switcher'];

   // create object of item
   if($type === "DVD"){

      $size = $_POST['size'];
      $item = new DVD($sku, $name, $price, $type, $size);
   
   } else if($type === "BOOK") {
   
      $weight = $_POST["weight"];
      $item = new BOOK($sku, $name, $price, $type, $weight);
   
   } else if ($type === "FURNITURE") {
   
      $height = $_POST["height"];
      $width = $_POST["width"];
      $length = $_POST["length"];
      $dimension = $height . 'x' . $width . 'x' . $height;
      $item = new Furniture ($sku, $name, $price, $type, $dimension);
   }


   $model = new Model();
   $model->AddProduct($item);

?>