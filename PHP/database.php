<?php 
    class DataBase {
        private $connection = null;
        private $args = [];
        private $statement = null;

        public function __construct($serverName, $userName, $password, $baseName){
            $this->connection = new PDO ("mysql:host=$serverName;dbname=$baseName", 
                                        $userName, $password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        public function query ($query,...$args){
            $this->statement = $this->connection->prepare($query);
            $this->args = $args;
        }

        public function getAll() {
            $this->statement->execute($this->args);
            return $this->statement->fetchAll();
        }

        public function execute() { 
			$this->statement->execute($this->args);
		}
        
    }


?>