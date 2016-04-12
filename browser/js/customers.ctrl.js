angular.module('app')
.controller('CustomersCtrl', function($scope, CustomerFactory){
  $scope.customers = [];
  $scope.message = 'There are no customers';

  CustomerFactory.fetchAll().then(function(customers){
    if (customers.length){
      $scope.customers = customers;
      $scope.message = '';
    }
  });

  $scope.insert = function(customer){
    CustomerFactory.create(customer);
  };
});
