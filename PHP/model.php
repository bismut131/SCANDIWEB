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

        public function select () {
            $this->DB->query('SELECT * FROM items');
            $result = $this->DB->getAll();

            $data = array();

            foreach($result as $value) {
                array_push($data,$value);
            }

            return $data;
        }

        public function AddProduct($Product) {
            
            $this->DB->query("INSERT INTO `items` (`sku`, `name`, `price`, `type`, ". $this->types[$Product->getType()] .")". "VALUES" ."(?, ?, ?, ?, ?)",
                                $Product->getSku(), $Product->getName(), $Product->getPrice(), $Product->getType(),$Product->getOption());
            $this->DB->execute();
        }
    }
    

?>