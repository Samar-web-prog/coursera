(function () {
'use strict ';
angular.module("myFirstAssignement" ,[])
.controller("myFirstController",function($scope){
  $scope.Saisi="list comma-separated items they usually eat for lunch";

  $scope.clicSurBouton= function(){
    return "Hello";
   };
   $scope.var3="";
   $scope.var2="";
$scope.clicSurBouton=function(){
  $scope.var3=Som($scope.Saisi);
  if($scope.var3=="Erreur"){
    $scope.var2=="erreur";
    return (var2);


  }
}
function Som(String){
    var totalvalue = 0;
    var n=String.length;
    for(var i=0; i<=n; i++){
  if(String[i]==","){

       totalvalue += 1;

}
  }
  if(String==""){
    return "Please enter data first";
  }
  else if (totalvalue>2) {
    return "Too much";

  }
  else{
    return "Enjoy";
  }

}


});

})();
