<?php 
    abstract class Product {
        protected $sku;
        protected $name;
        protected $price;

        public function __construct ($sku, $name, $price) {
            $this->setSKU($sku);
            $this->setName($name);
            $this->setPrice($price);
        }

        public function getSKU() {
            return $this->sku;
        }

        public function setSKU($sku) {
            $this->sku = $sku;
        }

        public function getName() {
            return $this->name;
        }

        public function setName($name) {
            $this->name = $name;
        }

        public function getPrice() {
            return $this->$name;
        }

        public function setPrice($price) {
            $this->price = $price;
        }

        public abstract function getOption();
        public abstract function getType();
    }

?>