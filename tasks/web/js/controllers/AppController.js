app.controller('AppController', [ function() {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"Home"
       },{
        url:"#/opzioni",
        title:"Opzioni"
       }
    ];
    vm.today = new Date();
	vm.maximizeContainer=function(id){
		var gc=document.getElementById(id);
		if (!gc) return;
		var t=gc.getBoundingClientRect().top;
		var h = window.innerHeight;
		if (h<200) h=200;
		gc.style.height=h-t-20;
	};
}]);