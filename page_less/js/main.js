
	var amountOfFilterImg = 2;
	var idPref1 = 'img_1_';
	var idPref2 = 'img_2_';
	var urlImgs = [
		'imgs/img01.png',
		'imgs/img02.png',
		'imgs/img03.png',
		'imgs/img04.png'
	];
	//mega filter :)
	var urlImgs2 = urlImgs.slice(0, amountOfFilterImg);
	
	var amountImgs = urlImgs.length;
	if(amountOfFilterImg > amountImgs){amountOfFilterImg = amountImgs;}
	for(var i = 0; i < amountImgs; i++)
	{
		var elImg = document.createElement("img");
		elImg.setAttribute("src", urlImgs[i]); 
		elImg.setAttribute("alt", urlImgs[i]); 
		document.getElementById(idPref1 + (1+i)).appendChild(elImg);
	}
	for(var i = 0; i < amountOfFilterImg; i++)
	{
		var elImg = document.createElement("img");
		elImg.setAttribute("src", urlImgs[i]); 
		elImg.setAttribute("alt", urlImgs[i]); 
		document.getElementById(idPref2 + (1+i)).appendChild(elImg);
	}
	function showCategory01(){
		document.getElementById('filterImgs_1').style.display = "inline-block";
		document.getElementById('filterImgs_2').style.display = "none";
	}
	function showCategory02(){
		document.getElementById('filterImgs_1').style.display = "none";
		document.getElementById('filterImgs_2').style.display = "inline-block";
	}
