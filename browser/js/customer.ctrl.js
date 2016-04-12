angular.module('app')
.controller('CustomerCtrl', function($scope, customer,CustomerFactory, $state){
  $scope.customer = customer;
  $scope._delete = function(){
    CustomerFactory._delete(customer);
    $state.go('customers');
  };
  $scope.update = function(){
    CustomerFactory.update(customer);
  };
});
