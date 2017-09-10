define('modules/js/main', function(require, exports, module) {

  var banner = {
  	init:function(){
  		require(['modules/js/jquery','modules/js/swiper'],function($,swiper){
  			$(function(){ 
  				var mySwiper = new Swiper ('.swiper-container', {
  			    loop: false,
  			    
  			    // 分页器
  			    pagination: '.swiper-pagination',
  			   
  			  })        
  			})
  		})
  	}
  }
  
  exports.banner = banner;

});
