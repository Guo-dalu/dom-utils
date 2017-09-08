function showele(ele,other){
	ele.style.top = '50%'
	ele.style.opacity = '1'
	ele.style.transition = 'all .6s cubic-bezier(0.215, 0.610, 0.355, 1.000) -0.2s'
	other.style.opacity = '.2'
	other.style.transition ='all .6s cubic-bezier(0.215, 0.610, 0.355, 1.000) -0.2s'
	setTimeout(function(){
		hideele(ele,other)
	}, 3200)
		
}

function hideele(ele,other){
	ele.style.top = '70%'
	console.log(ele)
	ele.style.opacity = '0'
	ele.style.transition ='all .4s cubic-bezier(0.755, 0.050, 0.855, 0.060) 0s'
	other.style.opacity = '1'
	other.style.transition ='all .4s cubic-bezier(0.755, 0.050, 0.855, 0.060) 0s'
}

var ji = document.querySelector('.ji'),
	main = document.querySelector('main')

window.onload = function(){
	setTimeout(function(){
		showele(ji,main);
	},500)
}


