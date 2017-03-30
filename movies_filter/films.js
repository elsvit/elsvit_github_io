$(function() 
{
	// var DataUrl = "https://api.myjson.com/bins/1tll6";
	var DataUrl = "movies_list";
	var MainDiv = document.getElementById("mainDiv");
	var FonColor = '#ddd';
	var Setting;
	var FieldsForFilter = ['genre', 'year', 'rating', 'duration', 'votes'];
	var FieldWithComaDelimiter = ['genre'];
	var MaxFilmPostersPerPage = 40;
	var FilmPosterWidth = 140;
	var FilmPosterHeight = 200;
	var FilmPosterGap = 5;
	var FilterSortDivTop;
	var FilterSortDivLeft;
	var MaxNumInFilterField = 15;//number of checkboxes in Filter
	var SortButtonHeight = 25;
	var SortButtonWidth = 110;
	var SortCkeckboxWidth = 30;
	var SortButtonGap = 2;

	/// JS CSS: ////////////
	//css properties - another variant-use addClass & css
	$('body').css('background-color', FonColor);
	//Main block
	var CssMainDiv = {
		'display': 'inline-block',
		'width': '100%',
	};
	//block with top buttons 'All movies' and 'Filter'
	var CssTopDiv = {
		'display': 'inline-block',
		'position':'relative',
		'width': '100%',
		'height': '45px',
	};
	//css button ('All movies' and 'Filter')
	var CssTopButton = {
		'display': 'inline-block',
		'width': '90px',
		'height': '26px',
		'margin': '5px 15px',
		'border-radius': '4px',
		'background-color': '#bbb',
		'color': '#333',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold',
		'padding-top': '7px',
		'text-align': 'center',
		'box-shadow': '2px 2px 3px rgba(100,100,100,.5)'
	};
	//css top button :HOVER
	var CssTopButtonHover = {
		'cursor': 'pointer'
	};
	//Filter and Sort main block
	var CssFilterSortDiv = {
		'display': 'none', //default - 'none'
		'position': 'relative',
		'width': '98%',
		'height': 'auto',
		'margin-bottom': '10px',
	};
	var CssSortDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'padding-top':'10px',
		'padding-left':'15px',
		'width': (SortButtonWidth + SortCkeckboxWidth + SortButtonGap*3)+'px',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold'
	};
	var CssSortWrap = {
		'display': 'inline-block',
		'position': 'relative',
		'width': '100%',
		'margin': '0 auto'
	};
	var CssSortButton = {
		'display': 'inline-block',
		'position': 'relative',
		'width': SortButtonWidth + 'px',
		'height': SortButtonHeight + 'px',
		'margin-top': SortButtonGap + 'px',
		'padding-top': '5px',
		'background-color': '#bbb',
		'border-radius': '5px',
		'color': '#3a3',
		'text-align': 'center',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold',
	};
	var CssSortCheckbox = {
		'display': 'inline-block',
		'position': 'relative',
		'width': SortCkeckboxWidth + 'px',
		'margin-left': '4px',
		'padding-top': '5px',
		'background-color': '#bbb',
		'border-radius': '5px',
		'color': '#3a3',
		'text-align': 'center',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold',
	};
	var CssSortButtonHover = {
		'cursor': 'pointer',
		'color': '#bbb',
		'background-color': '#3a3'
	};
	var CssSortCheckboxHover = {
		'cursor': 'pointer',
		'color': '#bbb',
		'background-color': '#3a3'
	};
	var CssFilterDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'right',
		'width': '70%',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold'
	};
	var CssFilterMoviesButtonWrap = {
		'display': 'inline-block',
		'position': 'relative',
		'width': '27%',
		'height': '55px',
		'margin-top': '20px',
		'margin-left': '10px',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold',
	}
	var CssFilterMoviesButton = {
		'display': 'inline-block',
		'position': 'relative',
		'width': SortButtonWidth + 'px',
		'height': '48px',
		'margin': '0px auto',
		'padding': '7px',
		'border-radius': '7px',
		'background-color': '#3a3',
		'color': '#fff',
		'font-family': 'Arial',
		'font-size': '20px',
		'font-weight': 'bold',
		'text-align': 'center',
	}
	var CssFilterMoviesButtonHover = {
		'cursor': 'pointer'
	}
	var CssFilterFieldLebelDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'width': '99%',
		'color' : '#3a3',
		'font-family': 'Arial',
		'font-size': '16px',		
	}
	var CssFilterFieldDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'width': '99%',
		'margin': '3px',
		'padding': '0px',
		'background-color': '#eee',
		'border':'1px solid #bbb',
		'border-radius':'5px',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'normal'
	};
	var CssFilterDataWrapDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'margin-right': '10px'
	};
	var CssFilterDataDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'font-family': 'Arial',
		'font-size': '13px',
		'font-weight': 'normal',
	};
	var CssFilterDataAllDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'font-family': 'Arial',
		'font-size': '13px',
		'font-weight': 'bold',
	};
	var CssFilterDataLabelDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'font-family': 'Arial',
		'font-size': '13px',
		'font-weight': 'normal'
	};
	//CSS SHOW MOVIES ///////
	var CssFilmsPageButtonsLineDiv = {
		'display': 'inline-block',
		'width': '100%',
		'height': '40px',
		// 'background-color': '#ddf'
	}
	var CssFilmsPageButtonsWrapDiv = {
		'margin': '0px auto',
		'width': '320px',
		'height': '36px',
	}
	var CssFilmsPageButtonDiv = {
		'display': 'inline-block',
		'width': '27px',
		'height': '22px',
		'margin': '0 2px',
		'padding-top': '5px',
		'border-radius':'3px',
		'font-family': 'Arial',
		'font-size': '14px',
		'text-align': 'center',
		'color': '#333',
		'background-color': 'white'
	}
	var CssFilmsPageButtonDivHover = {
			'cursor': 'pointer',
			'color': '#ccc',
			'background-color': '#3a3'
	}
	var CssFilmsCurrentPageButtonDiv = {
		'display': 'inline-block',
		'width': '27px',
		'height': '22px',
		'margin': '0 2px',
		'padding-top': '5px',
		'border-radius':'3px',
		'font-family': 'Arial',
		'font-size': '14px',
		// 'font-weight': 'bold',
		'text-align': 'center',
		'color': '#eee',
		'background-color': '#3a3'
	}

	var CssShowMoviesMiddleDiv = {
		'display': 'inline-block',
		'width': '100%'
	}
	//CSS FILM POSTER ///////////
	var CssFilmPosterDiv = {
		'display': 'inline-block',
		'position':'relative',
		'float': 'left',
		'width': FilmPosterWidth + 'px',
		'height': FilmPosterHeight +'px',
		'margin': FilmPosterGap + 'px',
		'background-color': '#ccc',
		'border-radius':'5px',
		'border':'1px solid #eee',
	}
	var CssFilmPosterNameDiv = {
		'position': 'relative',
		'width': '95%',
		'height': '60px',
		'margin': '10px auto',
		'background-color': '#fff',
		'border-radius': "4px",
		'color': '#3a3',
		'font-family': 'Arial',
		'font-size': '16px',
		'font-weight': 'bold',
		'text-align': 'center',
		'vertical-align': 'middle'
	}
	var CssFilmPosterYearWrapDiv = {
		'display':'block',
		'position': 'relative',
		'width': '90%',
		'margin': '0px auto',
		// 'background-color': '#ccc'
	}
	var CssFilmPosterYearDiv = {
		'position': 'relative',
		'float': 'left',
		'margin': '2px',
		'color': '#333',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
	}
	var CssFilmPosterDurationDiv = {
		'position': 'relative',
		'float': 'right',
		'margin': '2px',
		'color': '#333',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
	}
	var CssFilmPosterGengeWrapDiv = {
		'display': 'block',
		'position': 'relative',
		'float':'left',
		'width': '95%',
		'margin': '0px auto',
	}
	var CssFilmPosterGenreTitleDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'margin': '2px',
		'width': '39px',
		'height':'14px',
		'color': '#555',
		'font-family': 'Arial',
		'font-size': '13px',
		'font-weight': 'bold',
	}
	var CssFilmPosterGenreDataDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'width': '90px',
		'height': '32px',
		'margin': '2px',
		'color': '#3a3',
		'font-family': 'Arial',
		'font-size': '13px',
		'font-weight': 'bold',
	}
	var CssFilmPosterRatingWrapDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'width': '135px',
		'height': '20px',
		'margin': '0px auto',
	}
	var CssFilmPosterRatingTitleDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'margin': '2px',
		'color': '#555',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
	}
	var CssFilmPosterRatingDataDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'left',
		'width': '50px',
		'margin': '2px',
		'color': '#3a3',
		'font-family': 'Arial',
		'font-size': '15px',
		'font-weight': 'bold',
	}
	var CssFilmPosterVotesWrapDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'right',
		'width': '135px',
		'margin': '0px auto',
	}
	var CssFilmPosterVotesTitleDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'right',
		'margin': '2px',
		'color': '#555',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
	}
	var CssFilmPosterVotesDataDiv = {
		'display': 'inline-block',
		'position': 'relative',
		'float': 'right',
		'margin': '2px',
		'color': '#555',
		'font-family': 'Arial',
		'font-size': '13px',
		'font-weight': 'bold',
	}
////END Js CSS ///////////////

	//START:
	//load data from dataUrl
	$.getJSON(DataUrl, function(){
	})
	.done(function(data){
		console.log("success");
	//if data receive(done) - create main window
		startMain(MainDiv, data);
	})
	.fail(function(){
		console.log("error load data");
	})

	function startMain(MainDiv, data)
	{
		createGeneralDiv(MainDiv);
		var filterObj = new FilterObj(data, MaxNumInFilterField, FieldsForFilter, FieldWithComaDelimiter);
		var filmsObj = new FilmsObj(data, MaxFilmPostersPerPage);
		filmsObj.showFilms(0, false);//show first page('0') without filter('false')

		startFilterBtnEvent();
		startAllMoviesBtnBtnEvent(filmsObj);
		startSortEvent(filterObj);
		startFilterEvent(filterObj);
		startFilterMoviesButtonEvent(filmsObj, filterObj);
		startPageBtnsEvent(filmsObj);

	}
	/// EVENT FUNCTION //////////
	function startFilterBtnEvent()
	{
		$('#filterBtn').click(function(){
			$('#filterSortDiv').toggle();
		});
	}
	function startAllMoviesBtnBtnEvent(filmsObj)
	{
		$('#allMoviesBtn').click(function(){
			$('#filterSortDiv').hide();
			filmsObj.hideCurentFilms();
			filmsObj.showFilms(0, false);
		});
	}

	function startSortEvent(filterObj)
	{
		$('#sortDiv').bind('mouseover',function(e){
			var id = e.target.id;
			if(id.substr(0, 7) == 'sortBtn'){
				$('#'+id).css(CssSortButtonHover);
			}
		});
		$('#sortDiv').bind('mouseout',function(e){
			var id = e.target.id;
			if(id.substr(0, 7) == 'sortBtn'){
				$('#'+id).css(CssSortButton);	
			}
		});
		$('#sortDiv').bind('mouseover',function(e){
			var id = e.target.id;
			if(id.substr(0, 7) == 'sortChk'){
				$('#'+id).css(CssSortCheckboxHover);
			}
		});
		$('#sortDiv').bind('mouseout',function(e){
			var id = e.target.id;
			if(id.substr(0, 7) == 'sortChk'){
				$('#'+id).css(CssSortCheckbox);	
			}
		});
		$('#sortDiv').bind('click',function(e){
			var id = e.target.id;
			if(id.substr(0, 7) == 'sortBtn'){
				var fieldName  = id.substr(7);
				var num = findInArr(fieldName, filterObj.field);
				if(fieldName == 'Bottom'){
					for(var numField in filterObj.field)
					{
						name = filterObj.field[numField];
						filterObj[name].sortSwitch = false;
						sortSwitchOff(name);
					}
				}else	if(num !== -1){
					if(filterObj[fieldName].sortSwitch == false){
						filterObj[fieldName].sortSwitch  = true;
						sortSwitchOn(fieldName);
					}else{
						filterObj[fieldName].sortSwitch = false;
						sortSwitchOff(fieldName);
					}
				}
			}else if(id.substr(0, 7) == 'sortChk'){
				var fieldName  = id.substr(7);
				var num = findInArr(fieldName, filterObj.field);
				if(num !== -1){
					if(filterObj[fieldName].sortSwitch == true){
						if(filterObj[fieldName].sortType == 'az'){
							filterObj[fieldName].sortType = 'za';
							$('#'+id).html('za');
						}else{
							filterObj[fieldName].sortType = 'az';
							$('#'+id).html('az');
						}				
					}
				}
			}
		});

	}
	function startFilterEvent(filterObj)
	{
		$('#filterDiv').bind('click',function(e){
			var id = e.target.id;
			var lastIdPart, fieldName, num, pos_;
			if(id.substr(0, 11) == 'checkBoxDiv'){
				lastIdPart = id.substr(11);
				pos_ = lastIdPart.indexOf('_');
				if( pos_ !== -1){
					fieldName = lastIdPart.slice(0, pos_);
					num = lastIdPart.substr(pos_ + 1);
					if(num == 'all'){
						if(filterObj[fieldName].filterAll == 'true'){
							filterObj.clearAllSwitches(fieldName);
						}else{
							filterObj.setAllSwitches(fieldName);
						}
					}else{
						if(filterObj[fieldName].filterOn[num] == 'true'){
							filterObj[fieldName].filterOn[num] = 'false';
							filterObj.switchFilterCheckbox(fieldName, num, false);
							if(filterObj[fieldName].filterAll == 'true'){
								filterObj[fieldName].filterAll = 'false';
								filterObj.switchFilterCheckbox(fieldName, 'all', false);
							}
						}else{
							filterObj[fieldName].filterOn[num] = 'true';
							filterObj.switchFilterCheckbox(fieldName, num, true);
						}
					}
				}
			}
		});
	}
	function startFilterMoviesButtonEvent(filmsObj, filterObj)
	{
		$('#filterMovies').bind('mouseover',function(e){
				$('#filterMovies').css(CssFilterMoviesButtonHover);
		});
		$('#filterMovies').bind('mouseout',function(e){
				$('#filterMovies').css(CssFilterMoviesButton);	
		});
		$('#filterMovies').bind('click',function(e){
			var checkEmpty = filterObj.checkEmptyFilterField();
			if(checkEmpty === false){
				// CurrentFilterFilms
				filmsObj.showFilteredFilms(filterObj);
				$('#filterSortDiv').hide();	
			}else{
				//warning about empty field. Another variant set 'All'
				alert(checkEmpty + ' is empty!!! Please choose some checkbox.')
			}
		});
	}
	function startPageBtnsEvent(filmsObj)
	{
		$('.filmsPageButtonsLineDiv').bind('mouseover',function(e){
				var id = e.target.id;
				var num = id.substr(10);
				if(num !== 4){
					$('#'+id).css('cursor','pointer');
				}
		});
		$('.filmsPageButtonsLineDiv').bind('mouseout',function(e){
				var id = e.target.id;
				var num = id.substr(10);
				if(num !== 4){
					$('#'+id).css('cursor','default');
				}					
		});
		$('.filmsPageButtonsLineDiv').bind('click',function(e){
			var id = e.target.id;
			var btnNum = id.substr(10);
			filmsObj.changePage(btnNum);
		});


	}
	////////////END EVENT////////////

	/// Create GENERAL DIVS  ///
	function createGeneralDiv(MainDiv)
	{
		$(MainDiv).css(CssMainDiv);
		createTop(MainDiv); //create top buttons 'All Movies' 'Filter'
		//create Filter & Sort div
		var filterSortDiv = $('<div/>', {
			id: 'filterSortDiv',
			css: CssFilterSortDiv
		});
		$(MainDiv).append(filterSortDiv);
		//CREATE FILTER:
		var filterDiv = $('<div/>', {
			id: 'filterDiv',
			css: CssFilterDiv
		});
		$('#filterSortDiv').append(filterDiv);
		//CREATE SORT div:
		var sortDiv = $('<div/>', {
			id: 'sortDiv',
			text: 'Sort by',
			css: CssSortDiv
		});
		$('#filterSortDiv').append(sortDiv);
		//CREATE FILTER MOVIES BUTTON
		var filterMoviesButtonWrap = $('<div/>', {
			id: 'filterMoviesWrap',
			css: CssFilterMoviesButtonWrap
		});
		$('#filterSortDiv').append(filterMoviesButtonWrap);
		var filterMoviesButton = $('<div/>', {
			id: 'filterMovies',
			text: 'Filter Movies',
			css: CssFilterMoviesButton
		});
		$('#filterMoviesWrap').append(filterMoviesButton);
		//create pages + middle + pages
		createShowMoviesDiv(MainDiv);
	}

	//create top buttons 'All Movies' 'Filter'
	function createTop(MainDiv)
	{
		//create top
		var topDiv = $('<div/>', {
			id: 'topDiv',
			css: CssTopDiv
		});
		$(MainDiv).append(topDiv);
		//create "All Movies" button
		var allMoviesBtn = $('<div/>', {
			id: 'allMoviesBtn',
			text: 'All Movies',
			css: CssTopButton
		});
		$(topDiv).append(allMoviesBtn);
		$(allMoviesBtn).on('hover', $(allMoviesBtn).css(CssTopButtonHover));
		//create "Filter" button
		var filterBtn = $('<div/>', {
			id: 'filterBtn',
			text: 'Filter',
			css: CssTopButton
		});
		$(topDiv).append(filterBtn);
		$(filterBtn).css('float', 'right');
		$(filterBtn).on('hover', $(filterBtn).css(CssTopButtonHover));
	}

	function createShowMoviesDiv(MainDiv)
	{
		var filmsTopPageButtonsLineDiv = $('<div/>', {
			id: 'filmsTopPageButtonsLineDiv',
			css: CssFilmsPageButtonsLineDiv
		});
		$(MainDiv).append(filmsTopPageButtonsLineDiv);
		var filmsTopPageButtonsWrapDiv = $('<div/>', {
			id: 'filmsTopPageButtonsWrapDiv',
			css: CssFilmsPageButtonsWrapDiv
		});
		$('#filmsTopPageButtonsLineDiv').append(filmsTopPageButtonsWrapDiv);
		var showMoviesMiddleDiv = $('<div/>', {
			id: 'showMoviesMiddleDiv',
			css: CssShowMoviesMiddleDiv
		});
		$(MainDiv).append(showMoviesMiddleDiv);
		var filmsBotPageButtonsLineDiv = $('<div/>', {
			id: 'filmsBotPageButtonsLineDiv',
			css: CssFilmsPageButtonsLineDiv
		});
		$(MainDiv).append(filmsBotPageButtonsLineDiv);
		var filmsBotPageButtonsWrapDiv = $('<div/>', {
			id: 'filmsBotPageButtonsWrapDiv',
			css: CssFilmsPageButtonsWrapDiv
		});
		$('#filmsBotPageButtonsLineDiv').append(filmsBotPageButtonsWrapDiv);
		//CssFilmsPageButtonDiv
		for(var i = 0; i < 9; i++)
		{
			//CssFilmsCurrentPageButtonDiv
			if(i !== 4){
				var filmsPageButtonTopDiv = $('<div/>', {
					id: 'pageBtnTop' + i,
					class: 'filmsPageButtonsLineDiv',
					css: CssFilmsPageButtonDiv
				});
				$('#filmsTopPageButtonsWrapDiv').append(filmsPageButtonTopDiv);
				var filmsPageButtonBotDiv = $('<div/>', {
					id: 'pageBtnBot' + i,
					class: 'filmsPageButtonsLineDiv',
					css: CssFilmsPageButtonDiv
				});
				$('#filmsBotPageButtonsWrapDiv').append(filmsPageButtonBotDiv);
			}else{
				var filmsPageButtonTopDiv = $('<div/>', {
					id: 'pageBtnTop' + i,
					css: CssFilmsCurrentPageButtonDiv
				});
				$('#filmsTopPageButtonsWrapDiv').append(filmsPageButtonTopDiv);
				var filmsPageButtonBotDiv = $('<div/>', {
					id: 'pageBtnBot' + i,
					css: CssFilmsCurrentPageButtonDiv
				});
				$('#filmsBotPageButtonsWrapDiv').append(filmsPageButtonBotDiv);				
			}

		}
	}

	/////END CREATE GENERAL DIVS


	//general functions:
	function findInArr(needle, arr)
	{
		var num = 0;
		var arrLength = arr.length;
		for(var i = 0; i < arrLength; i++)
		{
			if(needle === arr[i]){
				return i;
			}
		}
		return -1;
	}
	function sortNumReverse(num1, num2)
	{
		return num2 - num1;
	}
	function sortNum(num1, num2)
	{
		return num1 - num2;
	}
	function sortSwitchOn(needle)
	{
		$('#sortChk' + needle).html('az');
	}
	function sortSwitchOff(needle)
	{
		$('#sortChk' + needle).html('');
	}

	/// FilterObj functions: //////////////////////////
	function cloneObj(obj)
	{
		var newObj = JSON.stringify(obj);
		newObj = JSON.parse(newObj);
		return newObj;
	}
		//select all fields (if they use coms-split)
	function selectFieldsToArr(values, fieldsField)
	{
		var arr = [];
		var num = 0;
		var lengthValues = values.length;
		for(var i = 0; i < lengthValues; i++)
		{
			if(values[i][fieldsField])
			{
				if(findInArr(fieldsField, FieldWithComaDelimiter) !== -1){
					var arrComa = [];
					arrComa = (values[i][fieldsField]+'').split(',');
					for(var val in arrComa)
					{
						arr[num++] = arrComa[val].trim();
					}
				}else{
					arr[num++] = values[i][fieldsField];
				}
			}
		}
		return arr;
	}
	function setRealTypeData(arrTemp, fieldsType)
	{
		if(fieldsType === 'number'){return fieldsType;}
		var arrLen = arrTemp.length;
		var val = 0, step = 5, nums = 5;
		while(val < arrLen && val <= nums*step)//nums of tests - 5? step 5
		{
			if(arrTemp[val] - 0 == arrTemp[val]){
				val += step;
			}else{
				return fieldsType;
			}
		}
		if(val > nums*step){return 'number';}
		return fieldsType;
	}

	/// end functions for FilterObj

	function FilterObj(data, MaxNumInFilterField, FieldsForFilter, FieldWithComaDelimiter)
	{
		this.field = [];
		this.label = [];
		this.type = [];
		this.realType = {};
		this.filterAll = [];
		this.fieldsForFilter = FieldsForFilter;
		this.fieldWithComaDelimiter = FieldWithComaDelimiter;

		for(var i in data.fields)
		{
			var fieldI = data.fields[i];
			this.field[i] = fieldI.field;
			this.label[i] = fieldI.label;
			this.type[i] = fieldI.type;
			this[fieldI.field] = {};
			this[fieldI.field]['data'] = [];
			this[fieldI.field]['data2'] = [];
			this[fieldI.field]['filterOn'] = [];
			this[fieldI.field]['sortSwitch'] = false;
			this[fieldI.field]['sortType'] = 'az';//kind of sorting az or za or ' '(unsorted)
			this[fieldI.field]['filterAll'] = 'true';
		}
		for(var i in this.type){//set default realType
			this.realType[this.field[i]] = this.type[i];
		}
		var self = this;
		var fieldsLength = this.field.length;
		var fieldsField;
		for(var i = 0; i < fieldsLength; i++)
		{
			fieldsField = this.field[i];
			//if field is in FieldsForFilter:
			if(findInArr(fieldsField, FieldsForFilter) !== -1){
				var arrTemp = [], arrUnique = [], arrSwitch = [];
				arrTemp = selectFieldsToArr(data.values, fieldsField);
				//sort data:
				var typeData = setRealTypeData(arrTemp, this.type[i]);
				this.realType[this.field[i]] = typeData;
				if( typeData === 'number'){
					arrTemp.sort(sortNum);
				}else{
					arrTemp.sort();
				}
				if(typeData === 'number'){
					selectUniqueNums(fieldsField, arrTemp, MaxNumInFilterField); //add unique position or	
				}else{
					selectUnique(fieldsField, arrTemp); //add unique position or	
				}
			}
		}

		createFilterSortDiv(data.fields);
		// createFilterSortDiv(fields, filterObj);// create filter & sort div
		// create filter & sort div
		function createFilterSortDiv(fields)//, filterObj)
		{
			//create sort buttons
			var fieldsLength = fields.length;
			for(var i = 0; i < fieldsLength; i++)
			{
				var name = fields[i].field;
				var text = fields[i].label;
				var sortWrap = $('<div/>', {
					id: 'sortWrp' + name,
					css: CssSortWrap
				});
				$('#sortDiv').append(sortWrap);
				var sortButton = $('<div/>', {
					id: 'sortBtn' + name,
					text: text,
					css: CssSortButton
				});
				$(sortWrap).append(sortButton);
				var switchSort = fields[i].switch;
				if(switchSort == 'true'){
					text = 'az';	
				}else{
					text ='';
				}
				var sortCheckbox = $('<div/>', {
					id: 'sortChk' + name,
					text: text,
					css: CssSortCheckbox
				});
				$(sortWrap).append(sortCheckbox);
			}
			//clear sort button:
			var sortWrap = $('<div/>', {
				id: 'sortWrpBottom',
				css: CssSortWrap
			});
			$('#sortDiv').append(sortWrap);
			var sortBottomButton = $('<div/>', {
				id: 'sortBtnBottom',
				text: 'Clear All',
				css: CssSortButton 
			});
			$(sortWrap).append(sortBottomButton);

			//FILTER FIELDS
			var filterFields = FieldsForFilter.length;
			for(var i = 0; i < filterFields; i++)
			{
				//CssFilterFieldDiv
				var name = FieldsForFilter[i];
				var label = findLebel(name, fields);
				if(label === false){label = name;}
				var  filterFieldLebelDiv = $('<div/>', {
					text: label,
					css: CssFilterFieldLebelDiv
				});	
				$('#filterDiv').append(filterFieldLebelDiv);		
				var  filterFieldDiv = $('<div/>', {
					id: 'filterFieldDiv' + FieldsForFilter[i],
					css: CssFilterFieldDiv
				});	
				$('#filterDiv').append(filterFieldDiv);	
				var arrLength = self[name].data.length;
				var dataVal;
				var filterAll = self[name].filterAll;
				var filterDataWrapDiv = $('<div/>',{
						css: CssFilterDataWrapDiv
					});
					$(filterFieldDiv).append(filterDataWrapDiv);
				var checkBoxAllDiv = $('<label />').html('All')
					.prepend($('<input/>').attr({
						type: 'checkbox',
						id: 'checkBoxDiv' + name +'_all',
						css: CssFilterDataAllDiv
					}));
				$(filterDataWrapDiv).append(checkBoxAllDiv);
				$('#checkBoxDiv' + name + '_all').css({
					'vertical-align': '-2px'
				});
				if(filterAll == 'true' ){
					$('#checkBoxDiv' + name + '_all').prop('checked', filterAll);
				}
				for(var j = 0; j < arrLength; j++)
				{
					dataVal = self[name].data[j];
					if(self.realType[name] === 'number'){
						if(self[name].data2 && (self[name].data2[j] !== dataVal)){
							dataVal += '-' + self[name].data2[j];
						}						
					}
					filterAll = self[name].filterOn[j];
					var filterDataWrapDiv = $('<div/>',{
						css: CssFilterDataWrapDiv
					});
					$(filterFieldDiv).append(filterDataWrapDiv);
					checkBoxDiv = $('<label />').html(dataVal).attr({
						css: CssFilterDataLabelDiv
					}).prepend($('<input/>').attr({
						type: 'checkbox',
						id: 'checkBoxDiv' + name + '_' + j,
						css: CssFilterDataDiv
					}));
					$(filterDataWrapDiv).append(checkBoxDiv);
					$('#checkBoxDiv' + name + '_' + j).css({
						'vertical-align': '-2px',
					});
					$('#checkBoxDiv' + name + '_' + j).prop('checked', filterAll);
				}			
			}
		}
		function findLebel(name, fields)
		{
			var fieldsLength = fields.length;
			for(var i = 0; i < fieldsLength; i++)
			{
				var nameFields = fields[i].field;
				if(name == nameFields){
					return fields[i].label;
				}
			}
			return false;
		}

		//add unique position and their amounts
		function selectUniqueNums(field, inpArr, MaxNumInFilterField)
		{
			var uniqueArr1 = [], uniqueArr2 = [], switchArr = [];
			var num = 0, pos = 0, step;
			var newNum = true, lastVal, lastPos;
			var arrLength = inpArr.length;
			while(pos < arrLength)
			{
				if(inpArr[pos]){
					step = Math.floor((arrLength - pos)/(MaxNumInFilterField - num));
					if(newNum === true){
						switchArr[num] = 'true';
						uniqueArr1[num] = inpArr[pos];
						uniqueArr2[num] = inpArr[pos];
						newNum = false;
						pos += step;
						if(pos >= arrLength){
							lastPos = arrLength-1;
							while(lastPos > pos - step)
							{
								if(inpArr[lastPos]){//if inpArr[lastPos] != undefined, null etc
									if(uniqueArr1[num] !== inpArr[lastPos]){//if vals different - add: "- lastVal"
										uniqueArr2[num] = inpArr[lastPos];
									break;
									}		
								}
								lastPos--;
							}
						}
					}else{
						newNum = true;
						lastVal =  inpArr[pos];
						if(uniqueArr1[num] !== inpArr[pos]){//if vals different - add: "- lastVal"
							uniqueArr2[num] = lastVal;
						}
						do{
							pos++;
						}while(lastVal === inpArr[pos]);
						num++;
					}
				}
			}	
			self[field]['data'] = uniqueArr1.reverse();//reverse for numbers dara
			self[field]['data2'] = uniqueArr2.reverse();//reverse for numbers dara
			self[field]['filterOn'] = switchArr;
		}
		function selectUnique(field, inpArr)
		{
			var uniqueArr = [], switchArr = [];
			var num = 0, sum = 0;
			var arrLength = inpArr.length;
			for(var i = 0; i <  arrLength; i++)
			{
				if(inpArr[i]){
					if(num === 0 || uniqueArr[num-1] !== inpArr[i]){
						switchArr[num] = 'true';
						uniqueArr[num++] = inpArr[i].trim();
					}
				}
			}	
			self[field]['data'] = uniqueArr;
			self[field]['filterOn'] = switchArr;
		}
		this.clearAllSwitches = function(fieldName)
		{
			self[fieldName].filterAll = 'false';
			self.switchFilterCheckbox(fieldName, 'all', false);
			for(var val in self[fieldName]['filterOn'])
			{
				self[fieldName]['filterOn'][val] = 'false';
				self.switchFilterCheckbox(fieldName, val, false);
			}
		};
		this.setAllSwitches = function(fieldName)
		{
			self[fieldName].filterAll = 'true';
			self.switchFilterCheckbox(fieldName, 'all', true);
			for(var val in self[fieldName]['filterOn'])
			{
				self[fieldName]['filterOn'][val] = 'true';
				self.switchFilterCheckbox(fieldName, val, true);
			}
		};
		this.switchFilterCheckbox = function(fieldName, num, key)
		{
			$('#checkBoxDiv' + fieldName + '_' + num).prop('checked', key);//key = true/false
		};
		this.checkEmptyFilterField = function()
		{
			for(var val in FieldsForFilter)
			{
				var nameField = FieldsForFilter[val];
				var sum = 0;
				for(var i in self[nameField]['filterOn']){
					if(self[nameField]['filterOn'][i] == 'true'){
						sum++;
						break;
					}
				}
				if(sum == 0){
					return this['label'][val];
				}
			}
			return false;
		};
		//
		function checkFieldValue(fieldForCheck, valueForCheck)
		{
			var realType = self.realType[fieldForCheck];
			var num;
			if(realType === 'number'){
				var arr = self[fieldForCheck]['data'];
				var arr2 = self[fieldForCheck]['data2'];
				var arrLength = arr.length;
				for(var i = 0; i < arrLength; i++)
				{
					if(valueForCheck-0 >= arr[i]-0 && valueForCheck-0 <= arr2[i]-0 && self[fieldForCheck]['filterOn'][i] == 'true'){
						return true;
					}
				}
				return false;
			}else{
				var valueArr = [];
				if(findInArr(fieldForCheck ,self.fieldWithComaDelimiter) !== -1){
					valueArr = valueForCheck.split(',');
					for(var i = 0; i < valueArr.length; i++)
					{
						num = findInArr(valueArr[i].trim(), self[fieldForCheck]['data']) - 0;
						if( num !== -1 && self[fieldForCheck]['filterOn'][num] == 'true'){
							return true;
						}		
					}
				}else{
					num = findInArr(valueForCheck, self[fieldForCheck]['data']) - 0;
					if( num !== -1 && self[fieldForCheck]['filterOn'][num] == 'true'){
						return true;
					}
				}
				return false;
			}
		}
		this.checkFilm = function(filmObj)
		{
			var fieldForCheck, valueForCheck, check;
			for(var i in this.fieldsForFilter)
			{
				fieldForCheck = this.fieldsForFilter[i];
				valueForCheck = filmObj[fieldForCheck];
				if(valueForCheck){
					check = checkFieldValue(fieldForCheck, valueForCheck);
					if(check == false){return false;}	
				}else{
					return false;
				}
			}
			return true;
		}
		this.getSortingFields = function()
		{
			var sortingFieldsArr = [];
			var i = 0, field;
			for(var val in this.field)
			{
				field = this.field[i];
				if(this[field].sortSwitch == true){
					sortingFieldsArr[i++] = field; 
				}
			}
			if(sortingFieldsArr.length = 0){
				return false;
			}
			return sortingFieldsArr;
		}
		function sortFilmsObj(currentFilmsForSortArr, field)
		{
			var obj;
			var arr = currentFilmsForSortArr;
			function sortNums(objA, objB)
			{
				return (objA[field] - 0) - (objB[field] - 0); 
			}
			function reverseNums(objA, objB)
			{
				return (objB[field] - 0) - (objA[field] - 0); 
			}
			function sortStrings(objA, objB)
			{
				if(objA[field] > objB[field]){return 1;}
				return -1; 
			}
			function reverseStrings(objA, objB)
			{
				if(objA[field] > objB[field]){return -1;}
				return 1;
			}
				if(self.realType[field] == 'number' && self[field].sortType == 'za'){
					arr.sort(reverseNums);
				}else if(self.realType[field] == 'number' && self[field].sortType == 'az'){
					arr.sort(sortNums);
				}else if(self[field].sortType == 'za'){
					arr.sort(reverseStrings);
				}else {
					arr.sort(sortStrings);
				}
			return arr;	
		}
		this.getSortedFilmsNumArr = function(currentFilmsForSortArr)
		{
			var sortedArr = [];
			var field;
			for(var val in this.field)
			{
				field = this.field[val];
				if(this[field].sortSwitch == true){
					currentFilmsForSortArr = sortFilmsObj(currentFilmsForSortArr, field)
				}
			}
			var length = currentFilmsForSortArr.length;
			for(var i = 0; i < length; i++)
			{
				sortedArr[i] = currentFilmsForSortArr[i].num;
			}
			return sortedArr;
		}
	} /// END FilterObj /////////////////////////

///////FilmObj functions: /////
	function Film(num, data)
	{
		var field;
		for(var val in data.fields)
		{
			field = data.fields[val]['field'];
			if(data.values[num][field]){
				this[field] = data.values[num][field];
			}
		}
	}
	function Poster(filmObj, num)
	{
		this.num = num;
		var filmPosterDiv = $('<div/>', {
			id: 'filmPoster' + num,
			css: CssFilmPosterDiv
		});
		$('#showMoviesMiddleDiv').append(filmPosterDiv);
		// poster Title: film name
		var text = filmObj.name;
		var filmPosterNameDiv = $('<div/>', {
			text: text,
			css: CssFilmPosterNameDiv
		});
		$(filmPosterDiv).append(filmPosterNameDiv);
		//poster year n duration wrap
		var filmPosterYearWrapDiv = $('<div/>', {
			css: CssFilmPosterYearWrapDiv
		});
		$(filmPosterDiv).append(filmPosterYearWrapDiv);
		//year
		var text = filmObj.year;
		var filmPosterYearDiv = $('<div/>', {
			text: text,
			css: CssFilmPosterYearDiv
		});
		$(filmPosterDiv).append(filmPosterYearDiv);
		//duration
		var text = filmObj.duration;
		var filmPosterDurationDiv = $('<div/>', {
			text: text + ' min',
			css: CssFilmPosterDurationDiv
		});
		$(filmPosterDiv).append(filmPosterDurationDiv);
		//poster genre wrap
		var filmPosterGengeWrapDiv = $('<div/>', {
			css: CssFilmPosterGengeWrapDiv
		});
		$(filmPosterDiv).append(filmPosterGengeWrapDiv);
		//genre title
		var filmPosterGenreTitleDiv = $('<div/>', {
			text: 'Genre',
			css: CssFilmPosterGenreTitleDiv
		});
		$(filmPosterDiv).append(filmPosterGenreTitleDiv);
		//genre
		var text = filmObj.genre;
		var filmPosterGenreDataDiv = $('<div/>', {
			text: text,
			css: CssFilmPosterGenreDataDiv
		});
		$(filmPosterDiv).append(filmPosterGenreDataDiv);
		//poster Rating wrap
		var filmPosterRatingWrapDiv = $('<div/>', {
			css: CssFilmPosterRatingWrapDiv
		});
		$(filmPosterDiv).append(filmPosterRatingWrapDiv);
		//rating title
		var filmPosterRatingTitleDiv = $('<div/>', {
			text: 'Rating',
			css: CssFilmPosterRatingTitleDiv
		});
		$(filmPosterDiv).append(filmPosterRatingTitleDiv);
		//rating
		var text = filmObj.rating;
		var flmPosterRatingDataDiv = $('<div/>', {
			text: text,
			css: CssFilmPosterRatingDataDiv
		});
		$(filmPosterDiv).append(flmPosterRatingDataDiv);
		//poster Votes wrap
		var filmPosterVotesWrapDiv = $('<div/>', {
			css: CssFilmPosterVotesWrapDiv
		});
		$(filmPosterDiv).append(filmPosterVotesWrapDiv);
		//rating title
		var filmPosterVotesTitleDiv = $('<div/>', {
			text: 'Votes',
			css: CssFilmPosterVotesTitleDiv
		});
		$(filmPosterDiv).append(filmPosterVotesTitleDiv);
		//rating
		var text = filmObj.votes;
		var filmPosterVotesDataDiv = $('<div/>', {
			text: text,
			css: CssFilmPosterVotesDataDiv
		});
		$(filmPosterDiv).append(filmPosterVotesDataDiv);
		this.delete = function()
		{
			$('#filmPoster' + this.num).remove();
		}
	}

	function FilmsObj(data, MaxFilmPostersPerPage)
	{
		this.film = {};
		this.poster = {};
		this.currentPage = 0;
		this.postersPerPage = MaxFilmPostersPerPage;
		this.filmsNumber = data.values.length;
		// this.arrShowFilms = [];
		this.currentFilteredFilms = [];
		this.useFilter = false;
		self = this;
		
		for(var val in data.fields)
		{
			var field = data.fields[val]['field'];
			this[field] = {};
			this[field]['label'] = data.fields[val]['label'];
		}
		for(var i = 0; i < this.filmsNumber; i++)
		{
			this.film[i] = new Film(i, data);
		}

		function setLinesBtns(page, pageNums) 	//pageBtnTop
		{
			//!!!!!! page start from 1 (0=1, 1=2 etc)
			if(page >= 4){showLinesBtns(0, '<<');
			}else{hideLinesBtns(0);}
			if(page >= 3){showLinesBtns(1, '<');
			}else{hideLinesBtns(1);}
			if(page >= 2){showLinesBtns(2, page - 1);//0
			}else{hideLinesBtns(2);}
			if(page >= 1){showLinesBtns(3, page);//previous
			}else{hideLinesBtns(3);}
			if(pageNums >= 1){showLinesBtns(4, page + 1);//PAGE
			}else{hideLinesBtns(4);}
			if(pageNums - page > 1){showLinesBtns(5, page + 2);
			}else{hideLinesBtns(5);}
			if(pageNums - page > 2){showLinesBtns(6, page + 3);
			}else{hideLinesBtns(6);}
			if(pageNums - page > 3){showLinesBtns(7, '>');
			}else{hideLinesBtns(7);}
			if(pageNums - page > 4){showLinesBtns(8, '>>');
			}else{hideLinesBtns(8);}
		}
		function showLinesBtns(num, text)
		{
			$('#pageBtnTop' + num).html(text);
			$('#pageBtnBot' + num).html(text);
			$('#pageBtnTop' + num).show();
			$('#pageBtnBot' + num).show();
		}
		function hideLinesBtns(num)
		{
			$('#pageBtnTop' + num).html(' ');
			$('#pageBtnBot' + num).html(' ');
			$('#pageBtnTop' + num).hide();
			$('#pageBtnBot' + num).hide();
		}

		this.showFilms = function(page, useFilter)
		{
			self.useFilter = useFilter;
			self.currentPage = page;
			var pos = page * self.postersPerPage;
			var pagesForShow, length;
			var i = 0;
			if(useFilter){
				length = self.currentFilteredFilms.length;
				while(i < self.postersPerPage && pos < length)
				{
					self.poster[i] = new Poster(self.film[this.currentFilteredFilms[pos]], pos);	
					i++;
					pos++;
				}
				pagesForShow = Math.ceil( length / self.postersPerPage);
			}else{
				length = self.filmsNumber;
				while(i < self.postersPerPage && pos < length)
				{
					self.poster[i] = new Poster(self.film[pos], pos);	
					i++;
					pos++;
				}
				pagesForShow = Math.ceil(length  / self.postersPerPage);		
			}
			setLinesBtns(page, pagesForShow);
		}

		this.hideCurentFilms = function()
		{
			for(var i in this.poster)
			{
				this.poster[i].delete();
			}
		}
		this.changePage = function(btnNum)
		{
			var page;
			switch(btnNum-0)
			{
			case 0:
				page = 0;
				break;	
			case 1:
				page = self.currentPage - 3;
				break;	
			case 2:
				page = self.currentPage - 2;
				break;	
			case 3:
				page = self.currentPage - 1;
				break;	
			case 5:
				page = self.currentPage + 1;
				break;	
			case 6:
				page = self.currentPage + 2;
				break;	
			case 7:
				page = self.currentPage + 3;
				break;	
			case 8:
				if(self.useFilter){
					page = Math.ceil(self.currentFilteredFilms.length / self.postersPerPage) - 1;
					if(page < 0){page = 0;}
				}else{
					page = Math.ceil(self.filmsNumber / self.postersPerPage) - 1;
				}
				break;				
			}
			self.hideCurentFilms();
			self.showFilms(page, self.useFilter);
		}
		
		this.showFilteredFilms = function(filterObj)
		{
			self.currentFilteredFilms = [];
			this.useFilter = true;
			var length = this.filmsNumber;
			var pos = 0, check;
			for(var i = 0; i < length; i++)
			{
				check = filterObj.checkFilm(this.film[i]);
				if(check === true){
					self.currentFilteredFilms[pos++] = i;
				}
			}
			var sortingFieldsArr = filterObj.getSortingFields();
			if(sortingFieldsArr !== false){
				var currentFilmsForSortArr = [];
				var num;
				var arrLength = self.currentFilteredFilms.length;
				for(var i = 0; i < arrLength; i++)
				{
					currentFilmsForSortArr[i] = {};
					num = self.currentFilteredFilms[i];
					currentFilmsForSortArr[i]['num'] = num;
					for(var field in this.film[num]){
						currentFilmsForSortArr[i][field] = this.film[num][field];
					}
				}
				self.currentFilteredFilms = filterObj.getSortedFilmsNumArr(currentFilmsForSortArr);
			}
		
			self.hideCurentFilms();
			self.showFilms(0, true);
				
		}
	} /// END FilmObj

//////////////////////////////////
});