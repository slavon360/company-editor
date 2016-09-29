let mainModule=angular.module('mainModule',['ngRoute']); 

mainModule.controller('mainController',function($scope,$http){
   $http.get("data/dataCompany.json").then(function(response){
$scope.listCompanies=response.data;

})


  $scope.isReal=function(param){
let obj=param;
if(obj.allEstEarning){

return obj.allEstEarning  
}
else{
  return ''
}
  }
  $scope.dataCompany;
  $scope.font=false;
  $scope.getDataCompany=function(inform){
$scope.dataCompany=inform
$scope.font=true;
}

$scope.deleteParentCompany=function(company,event,index,listCompanies){
if(listCompanies.indexOf(company)==index && event.currentTarget.nextSibling.className=='ng-hide'){
   angular.element(event.currentTarget).parent()[0].hidden=true
}else{
  company.name='(Your company name)';company.estEarning=0;company.allEstEarning=0;
}
}
$scope.deleteChildCompany=function(child,event,index,company){
if(company.childCompanies.indexOf(child)==index && event.currentTarget.nextSibling.className=='ng-hide'){
angular.element(event.currentTarget).parent()[0].hidden=true
}
else{
  child.name='(Your company name)';child.estEarning=0;child.allEstEarning=0;
 
}
}
$scope.deleteSubchildCompany=function(child,event,index,company){
if(company.childCompanies.indexOf(child)==index && event.currentTarget.nextSibling.className=='ng-hide'){
 angular.element(event.currentTarget).parent()[0].hidden=true
}else{
  child.name='(Your company name)';child.estEarning=0;child.allEstEarning=0;
}
}


$scope.addNew=function(par){
if(angular.isArray(par.childCompanies)){
 par.childCompanies.push({name:'(name of company)',estEarning:0,allEstEarning:0}) 
}
}
$scope.addNewParent=function(par){
if(angular.isArray(par)){
 par.push({name:'(name of company)',estEarning:0,allEstEarning:0,childCompanies:[]}) 
}
$scope.addNewChild=function(par,event){
par.childCompanies=[]
par.childCompanies.push({name:'(name of company)',estEarning:0,allEstEarning:0,childCompanies:[]}) 
 let ul=angular.element('<ul>').append(angular.element('<li>').text(par.childCompanies[0].name+' '+
  par.childCompanies[0].estEarning+' '+par.childCompanies[0].allEstEarning))
}
}
})
