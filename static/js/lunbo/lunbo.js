function train(imgUrlArr,timeInterval){
			var transX = 0;
			var param = 1;
			var interval = 300;
			var left;
			var imgNum = imgUrlArr.length;
			var trainContent='';
			
			function loop(){
				update();
				draw();
			}
			function getTrainContent(){
				for(var i=0;i<imgNum;i++){
				trainContent += '<div class="picContainer"><img src="'+imgUrlArr[i]+'" alt="" /></div>';
			    }
				document.getElementsByClassName("train")[0].innerHTML=trainContent;
			}
			function update(){
				if(param<imgNum){
				transX += 100;
			    left = "-"+transX+"%";
				interval = 300;
				param++;
				}else{
					
				transX  = 0;
				left = 0;
				interval = 0;
				param =1;
				}	
			}
			
			function draw(){
				var viewsWindow = document.getElementsByClassName("train")[0];
				viewsWindow.style.left = left;
				viewsWindow.style.transition = interval+"ms";
				
			}
			getTrainContent();
			setInterval(loop,timeInterval);
			}