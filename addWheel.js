function addWheel(obj,fn){
	function fnWheel(ev){
		var oEvent = ev||event;
		var down = false;
		//chrome IE
		if(oEvent.wheelDelta){
			if(oEvent.wheelDelta<0){
				down = true;
			}else{
				down = false;
			}
		//firefox
		}else{
			if(oEvent.detail>0){
				down = true;
			}else{
				down = false;
			}

		}

		fn(down);
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	}


	obj.addEventListener&&obj.addEventListener('DOMMouseScroll',fnWheel,false);
	obj.onmousewheel = fnWheel;
}
