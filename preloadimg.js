/*
data-imgurl='../images'
*/
function addLoadEvent(func) {
	var oldonload = window.onload;
	
	var args = [].slice.call(arguments,1)
	
	if (typeof window.onload !== 'function') {

		window.onload = function(){
			func.apply(null,args);
		}

	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func.apply(null,args)
		}
	}
}


function preload(prefix,suffix,num){
	var images = new Array()
	var _prefix = document.body.dataset['imgurl'] + '/' + prefix
 	for(let i =0; i < num; i++){
		images[i] = new Image()
		images[i].src = _prefix + (i+1) + '.' + suffix
		//console.log(images[i].src)
	}
}



addLoadEvent(preload,'u','jpg',4)

// func1(arg1,arg2), 
// func1, 实参arg1,arg2
// 包装成一个函数
// 除了function(){

// } 