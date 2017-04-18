(function(){
  angular.module('app')
  .controller('RecipesController', ['$location','dataService', '$scope', '$window', '$route',
    function($location, dataService, $scope, $window, $route){

    $scope.selectedCat = null;
    $scope.recipePerCat = null;


    
    $scope.getRecipes = function() {
      dataService.getRecipes(function(response){
        $scope.recipes = response.data;
      });
    }

    dataService.getCategories(function(response){
      console.log(response.data);
      $scope.categories = response.data;
    });

    dataService.getRecipes(function(response){
      console.log(response.data);
      $scope.recipes = response.data;
    });

    $scope.getRecipePerCat = function(cat){
      if(cat === undefined) {
        $scope.recipePerCat = null;
      } else {

        dataService.getRecipePerCat(cat, function(response){
        console.log(response.data.length);
          $scope.recipePerCat = response.data.length;
        });
      }
    }

    $scope.delete = function(id) {
      if ($window.confirm('Are you sure?')) {
        dataService.deleteRecipe(id, function(){
          $window.alert('Recipe Deleted');
          $route.reload();
        });
      }
    }

    $scope.addRecipe = function() {
        $location.path('/add');
    }



  }]);

})();