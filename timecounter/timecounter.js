/*
	to  count the time difference and console.log different message
*/

// var  msgmap = ['one',
// 'two',
// 'three',
// 'four',
// 'five'
// ]

// function gettimenum(){

// var a = (new Date()).getTime()

// return a

// }
//var lasttime = 0, clickcount = 0 
function  Timecounter (ele){
	this.ele = ele
	this.init()
	
}

Timecounter.prototype.init = function() {
	this.lasttime = 0
	this.currtime = 0 
	this.clickcount =0
	this.dt =0
	this.count()
};


Timecounter.prototype.count = function() {
	var self = this
	this.ele.click(function(){
		
		var now = (new Date()).getTime()

		self.currtime = now - 1502417000000

		self.dt = self.currtime - self.lasttime

		self.lasttime = self.currtime

		if(self.dt<5000){

			self.clickcount ++			

		}
		else {
			
			this.clickcount = 1
						
		}

	    console.log(self.clickcount)


	})
}

new Timecounter($('.timer1'))