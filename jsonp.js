function json2url(json){
	var arr = [];
	for(var name in json){
		arr.push(name+'='+encodeURIComponent(json[name]));
	}
	return  arr.join('&');
}
//url,data,timeout,success,error
function jsonp(options){
	options = options||{};
	options.data = options.data||{};
	options.timeout = options.timeout||0;
	if(!options.url)return;
	options.data.cb = options.data.cb||'cb';	//创建全局函数
	options.data.cb = 'jsonp_'+Math.random();
	options.data.cb = options.data.cb.replace('.','');
	window[options.data.cb] = function(json){

		options.success&&options.success(json);

		document.head.removeChild(oS);
	};

	//插入标签
	var oS = document.createElement('script');
	oS.src = options.url+'?'+json2url(options.data);
	document.head.appendChild(oS);
	var timer = null;
	if(options.timeout){
		clearTimeout(timer);
		setTimeout(function(){
			window[options.data.cb] = null;
			options.error&&options.error();

		},options.timeout);
	}
}
