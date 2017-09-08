function controlalertbox(){
var kefu = document.querySelector('.kefu')
	,body = document.body
	,main = document.querySelector('main')
	,cancelkefu = document.querySelector('.cancel')
	,iknow = document.querySelector('.iknow')
var bodybg = body.style.backgroundColor
var togglebtn = document.querySelector('.control-alert')
// if other btns ...move the listener

function init(ele){
	ele.style.left = '-9999px'
	ele.style.opacity = '0'
	ele.style.transition = 'all 0'
}
 
function showalert(ele){
	ele.style.left = '50%'
	ele.style.opacity = '1'
	ele.style.transition = 'all .4s cubic-bezier(0.215, 0.610, 0.355, 1.000) -0.2s'

	body.style.backgroundColor = '#888'
	main.style.opacity = '.2'

	togglebtn.removeEventListener('click',togglekefu,false)
}
function hidealert(ele){
	ele.style.left = '-9999px'
	ele.style.opacity = '0'
	ele.style.transition ='all .4s cubic-bezier(0.755, 0.050, 0.855, 0.060) 0s'

	body.style.backgroundColor= bodybg
	main.style.opacity = '1'

	togglebtn.addEventListener('click',togglekefu,false)
}
function togglealert(ele){
	if(ele.style.opacity !== '0') {
		hidealert(ele)
	}
	else {
		showalert(ele)
	}
}
var togglekefu = function(){
	togglealert(kefu)
},
	hidekefu = function() {
		hidealert(kefu)
	},
	showkefu = function() {
		showalert(kefu)
	};

init(kefu)

togglebtn.addEventListener('click',togglekefu,false)
cancelkefu.addEventListener('click',hidekefu,false)
iknow.addEventListener('click',hidekefu,false)
}

controlalertbox()