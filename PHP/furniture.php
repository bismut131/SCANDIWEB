<?php
	class Furniture extends Product {
		protected $dimension;

		//Configures MySQL base connection properties
		public function __construct($sku, $name, $price, $dimension) {
			parent::__construct($sku, $name, $price);

			$this->setSize($dimension);
		}

		public function setdimension($dimension) {
			$this->dimension = $dimension;
		}

		public function getdimension() {
			return $this->dimension;
		}

		public function getOption() {
			return $this->getdimension();
		}

		public function getType() {
			return 'FURNITURE';
		}
	}

?>