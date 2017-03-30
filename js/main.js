
	var amountOfShowImg = 3;
	var amountOfShowSiteImg = 2;
	var idPref1 = 'img_1_';
	var idPref2 = 'img_2_';
	var urlImgs = [
		'imgs/img01.png',
		'imgs/img02.png',
		'imgs/img03.png'
	];
	var urlSiteImgs = [
		'imgs/siteimg01.png'
	];
	
	var amountImgs = urlImgs.length;
	var amountSiteImgs = urlSiteImgs.length;
	if(amountOfShowImg > amountImgs){amountOfShowImg = amountImgs;}
	if(amountOfShowSiteImg > amountSiteImgs){amountOfShowSiteImg = amountSiteImgs;}
	for(var i = 0; i < amountOfShowImg; i++)
	{
		var elImg = document.createElement("img");
		elImg.setAttribute("src", urlImgs[i]); 
		elImg.setAttribute("alt", urlImgs[i]); 
		document.getElementById(idPref1 + (1+i)).appendChild(elImg);
	}
	for(var i = 0; i < amountOfShowSiteImg; i++)
	{
		var elImg = document.createElement("img");
		elImg.setAttribute("src", urlSiteImgs[i]); 
		elImg.setAttribute("alt", urlSiteImgs[i]); 
		document.getElementById(idPref2 + (1+i)).appendChild(elImg);
	}
	function showCategory01(){
		document.getElementById('linksImgs_1').style.display = "inline-block";
		document.getElementById('linksImgs_2').style.display = "none";
	}
	function showCategory02(){
		document.getElementById('linksImgs_1').style.display = "none";
		document.getElementById('linksImgs_2').style.display = "inline-block";
	}
	function showEmail(){
		document.getElementById('footer_middle_btn_1').style.display = "none";
		document.getElementById('footer_middle_btn_1_content').innerHTML = "butenko.yv@gmail.com";
	}
