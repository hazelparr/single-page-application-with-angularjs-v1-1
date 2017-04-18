(function(){
  angular.module('app')
  .controller('RecipeDetailController', ['$location','dataService', '$scope', '$routeParams','$window', 
    function($location, dataService, $scope, $routeParams, $window){

      $scope.recipeId = $routeParams.id;
      $scope.validationMessage = null;
      $scope.recipeDetails = null;

      if ($scope.recipeId) {
        dataService.getRecipeDetails($scope.recipeId, function(response){
          $scope.recipeDetails = response.data;
          //console.log(response.data);
        });
      }

      $scope.save = function() {
        if ($scope.recipeId) {
          dataService.updateRecipe($scope.recipeId, $scope.recipeDetails, function(response){
          
            //console.log(response.data);
            $window.alert('Edit successful')
            $location.path('/');
          });
        } else {
          dataService.addRecipe($scope.recipeDetails, function(response){
            //console.log(response.data);
            $window.alert('Recipe saved')
            $location.path('/');

          })
        }
      }



      dataService.getFoodItems(function(response){
        $scope.foodItems = response.data;
        //console.log(response.data);
      });

      dataService.getCategories(function(response){
        //console.log(response.data);
        $scope.categories = response.data;
      });

      $scope.addIngredient = function() {
        if(!$scope.recipeDetails.ingredients) {
          $scope.recipeDetails.ingredients = [];
          $scope.recipeDetails.ingredients.push({});
        } else {
          $scope.recipeDetails.ingredients.push({});
        }
      }

      $scope.deleteIngredient = function(index) {
        $scope.recipeDetails.ingredients.splice(index, 1);
      }

      $scope.addStep = function() {
        if(!$scope.recipeDetails.steps) {
          $scope.recipeDetails.steps = [];
          $scope.recipeDetails.steps.push({});
        } else {
          $scope.recipeDetails.steps.push({});
        }
      }

      $scope.deleteStep = function(index) {
        $scope.recipeDetails.steps.splice(index, 1);
      }

      $scope.cancel = function() {
        $location.path('/');
      };

  }]);

})();