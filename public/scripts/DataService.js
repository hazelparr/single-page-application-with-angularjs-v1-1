(function(){
    'use strict';

    angular.module('app')
    .service('dataService', ['$http', function($http){
 

      this.getRecipes = function(callback) {
        $http.get('/api/recipes').then(callback)
      }


      this.getCategories = function(callback) {
        $http.get('/api/categories').then(callback)
      }

      this.getRecipeDetails = function(id, callback) {
        $http.get('/api/recipes/' + id ).then(callback)
      }

      this.getFoodItems = function(callback) {
        $http.get('/api/fooditems').then(callback)
      }

      this.getRecipePerCat = function(cat, callback) {
        $http.get('/api/recipes?category=' + cat).then(callback)
      }

      this.updateRecipe = function(id, recipeData, callback) {
        $http.put('/api/recipes/' + id, recipeData).then(callback)
      }

      this.addRecipe = function(recipeData, callback) {
        $http.post('/api/recipes', recipeData).then(callback)
      }

      this.deleteRecipe = function(id, callback) {
        $http.delete('/api/recipes/' + id).then(callback)
      }

  }])
    
})();