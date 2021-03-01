

<?php 

require_once "login.php";
require_once 'connecting.php';
require_once 'product.php';
require_once 'dvd.php';
require_once 'book.php';
require_once 'furniture.php';

   var_dump ($_POST);

   $sku = $_POST['sku'];
   $name = $_POST['name'];
   $price = $_POST['price'];
   $type = $_POST['type-switcher'];

   if($type === "DVD"){
      $size = $_POST['size'];
      $item = new DVD($sku, $name, $price, $size);
   } else if($type === "BOOK") {
      $weight = $_POST["weight"];
      $item = new BOOK($sku, $name, $price, $weight);
   } else if ($type === "FURNITURE") {
      $height = $_POST["height"];
      $width = $_POST["width"];
      $length = $_POST["length"];
      $dimension = $height . 'x' . $width . 'x' $length;
      $item = new Furniture ($sku, $name, $price, $dimension);
   }

   var_dump($item);

?>