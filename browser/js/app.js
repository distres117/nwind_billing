angular.module('app', ['ui.router'])
.config(function($stateProvider){
  $stateProvider
  .state('customers', {
    url:'/customers',
    controller: 'CustomersCtrl'
  })
  .state('customer', {
    url: '/customers/:id',
    resolve: {
      customer: function(){
        
      }

    }
  });
});
