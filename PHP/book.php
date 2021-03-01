<?php 
    class Book extends Product {
        protected $weight;

        public function __construct ($sku, $name, $price, $weight){
            parent::__construct($sku, $name, $price);

            $this->setWeight($weight);
        }

        public function setWeight($weight) {
            $this->weight = $weight;
        }

        public function getWeight() {
            return $this -> weight;
        }

        public function getOption() {
            return $this->getWeight();
        }

        public function getType() {
            return "BOOK";
        }
    }

?>