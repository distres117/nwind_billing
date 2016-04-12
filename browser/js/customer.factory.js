angular.module('app')
.factory('CustomerFactory', function($state, $http){
  return {
    _delete: function(customer){
      return $http.delete('/api/customers/' + customer.id).then(function(res){
        return res.data;
      });
    },
    update: function(id, customer){
      return $http.put('/api/customers/' + id, customer).then(function(res){
        return res.data;
      });
    },
    fetchAll: function(){
      return $http.get('/api/customers').then(function(res){
        return res.data;
      });
    },
    fetchById: function(id){
      return $http.get('/api/customers/' + id).then(function(res){
        return res.data;
      });
    },
    create: function(customer){
      return $http.post('/api/customers', customer).then(function(res){
        return res.data;
      });
    }
  };
});
