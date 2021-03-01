<?php 
    class DVD extends Product {
        protected $size;

        public function __construct($sku, $name, $price, $size) {
            parent::__construct($sku, $name, $price);

            $this->setSize($size);
        }

        public function setSize($size) {
            $this->size = $size;
        }

        public function getSize() {
            return $this->size;
        }

        public function getOption() {
            return $this->getSize();
        }

        public function getType() {
            return "DVD";
        }
    }
?>