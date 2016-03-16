(function(){
  var app = angular.module('jewelShop', [ ]);

  app.controller('ShopController', function(){
    this.products = jewels;
  }); // anon func above is what will be executed when controller is called

  app.controller('PanelController', function(){
		this.tab = 1;

    this.selectTab = function(selectedTab){
			this.tab = selectedTab;
		};

    this.isSelected = function(givenTab){
			return this.tab == givenTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now(); //Before the review is pushed onto the array, add to this.review a new property createdOn with a value Date.now().
      product.reviews.push(this.review); // push the review from the ReviewControllers’ (this.review) onto this passed-in product’s reviews array (product.reviews)
      this.review = {};
    };
  });

  app.directive('productDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive("productSpecs", function() {
      return {
          restrict: 'A',
    templateUrl: 'product-specs.html'
  };

});

  var jewels = [
  {
     name: 'Penta jewel',
      price: 5,
      description: 'moar whateva',
      canPurchase: true,
      soldOut: true,
      shine: 8,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      reviews: [{
        stars: 5,
        body: "I love this jewel!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This jewel sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
  },
  {
	   name: 'Ugly jewel',
	    price: 2.95,
	    description: 'huh?',
      canPurchase: false,
      soldOut: false,
      shine: 2,
      rarity: 3,
      color: 'black',
      faces: 10,
      reviews: [{
      stars: 3,
      body: "I think this jewel was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any jewel with 12 faces is for me!",
      author: "jewelsRock@example.org",
      createdOn: 1397490980837
    }]
  } // Right now, this data is not being displayed in the app

];


})();
