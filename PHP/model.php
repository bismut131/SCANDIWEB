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

        public function showAlert($alert) {
            header('Content-type:application/json');
			echo json_encode($alert);
			die();
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

        public function getProductFromBase($sku) {
            $this->DB->query("SELECT * FROM items WHERE sku=?", $sku);
            return $this->DB->getAll();
        }

        public function AddProduct($Product) {
            
            $this->DB->query("INSERT INTO `items` (`sku`, `name`, `price`, `type`, ". $this->types[$Product->getType()] .")". "VALUES" ."(?, ?, ?, ?, ?)",
                                $Product->getSku(), $Product->getName(), $Product->getPrice(), $Product->getType(),$Product->getOption());
            $this->DB->execute();
        }
    }
    

?>