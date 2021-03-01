<?php
	class Furniture extends Product {
		protected $dimension;

		//Configures MySQL base connection properties
		public function __construct($sku, $name, $price, $dimension) {
			parent::__construct($sku, $name, $price);

			$this->setDimension($dimension);
		}

		public function setDimension($dimension) {
			$this->dimension = $dimension;
		}

		public function getDimension() {
			return $this->dimension;
		}

		public function getOption() {
			return $this->getDimension();
		}

		public function getType() {
			return 'Furniture';
		}
	}

?>