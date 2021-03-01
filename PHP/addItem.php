

<?php 

require_once "login.php";
require_once 'connecting.php';

   var_dump ($_POST);

   $sku = $_POST['sku'];
   $name = $_POST['name'];
   $price = $_POST['price'];
   $type = $_POST['type-switcher'];

   if($type === "DVD") {
      $size = $_POST['DVD'];
   } else if($type === "DVD")

?>