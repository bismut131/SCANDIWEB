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

   // create object of item
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
      $dimension = $height . 'x' . $width . 'x' . $height;
      $item = new Furniture ($sku, $name, $price, $dimension);
   }

   $optional =  $item->getOption();

   echo $optional;

   $sql = "INSERT INTO `items` (`sku`, `name`, `price`, `type`, `size`) VALUES ('$sku','$name','$price','$type', '$optional')"; 

   if ($connection->query($sql) === TRUE) {
      echo "New record created successfully";
   } else {
      echo "Error: " . $sql . "<br>" . $connection->error;
   }

   require_once 'fetch_items.php';

   $connection->close();

?>