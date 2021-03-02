<?php 
    class Model {
        private $types;

        public function __construct() {
            $serverName = 'localhost';
            $userName = 'root';
            $password = '';
            $baseName = 'productlist';

            $this->DB = new DataBase($serverName, $userName, $password, $baseName);

            $this->types = ['DVD' => 'size', 'BOOK' => 'weight', 'FURNITURE' => 'dimension'];
        }

        public function AddProduct($Product) {
            
            $this->DB->query("INSERT INTO `items` (`sku`, `name`, `price`, `type`, ". $this->types[$Product->getType()] .")". "VALUES" ."(?, ?, ?, ?, ?)",
                                $Product->getSku(), $Product->getName(), $Product->getPrice(), $Product->getType(),$Product->getOption());
            $this->DB->execute();
        }
    }
    

?>