angular.module('app')
.controller('CustomersCtrl', function($scope, CustomerFactory, $state){
  $scope.customers = [];
  $scope.message = 'There are no customers';

  CustomerFactory.fetchAll().then(function(customers){
    if (customers.length){
      $scope.customers = customers;
      $scope.message = '';
    }
  });

  $scope.insert = function(){
    return CustomerFactory.create($scope.newCustomer).then(function(cust){
      $state.go('customer', {id: cust.id});
    });
  };

  $scope._delete = function(customer){
    return CustomerFactory._delete(customer).then(function(){
      return CustomerFactory.fetchAll();
    });
  };
});
