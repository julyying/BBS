function messageNotice(obj){
         if(obj.innerText=="技术交流")
         {
             window.location='discuss.html';
             var Request = new Object(); 
		     Request = GetRequest(); 
		     var clubid_1= Request['tec_page'];
		     clubid_1.className="active";
             var clubid_2=Request['ans_page'];
             clubid_2.className="noactive";
         }
         else if(obj.innerText=="问题反馈")
         {
             window.location='discuss.html';
             var Request = new Object(); 
		     Request = GetRequest(); 
		     var clubid_1= Request['tec_page'];
		     clubid_1.className="noactive";
             var clubid_2=Request['ans_page'];
             clubid_2.className="active";
         }
     }
 function GetRequest() { 
	    	var url = location.search; //获取url中"?"符后的字串 
	    	//var url="?&do=club&id=54&team=ming&pai=detai";
	    	var theRequest = new Object(); 
	    	if (url.indexOf("?") != -1) { 
	    		var str = url.substr(1); 
	    		strs = str.split("&"); 
	    		for(var i = 0; i < strs.length; i ++) { 
	    		theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
	    		} 
	    } 
	    	return theRequest; 
 } 

	    
