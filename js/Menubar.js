Cloudwei.Menubar = function(config){
	this.container = $('#'+config.container);
	this.container.css('position','absolute');
	this.container.css('margin',0);
	this.container.css('padding',0);
	this.diagrammer = config.diagrammer;
	this._initialize();
};

Cloudwei.Menubar.prototype = {

	_initialize: function(){
		var diagrammer = this.diagrammer;
		var cursorBtn = this._createBtn("/topology/images/menu/cursor.png");
		cursorBtn.click(function(){
			diagrammer.setCursor();
		});
		this.container.append(cursorBtn);
		var panBtn = this._createBtn("/topology/images/menu/hand.png");
		panBtn.click(function(){
			diagrammer.setPan();
		});
		this.container.append(panBtn);
		var zoomInBtn = this._createBtn("/topology/images/menu/zoom-in.png");
		zoomInBtn.click(function(){
			diagrammer.zoom(1.05);
		});
		this.container.append(zoomInBtn);
		var zoomOutBtn = this._createBtn("/topology/images/menu/zoom-out.png");
		zoomOutBtn.click(function(){
			diagrammer.zoom(0.95);
		});
		this.container.append(zoomOutBtn);
		var zoom1Btn = this._createBtn("/topology/images/menu/zoom1.png");
		zoom1Btn.click(function(){
			diagrammer.zoom(1,true);
		});
		this.container.append(zoom1Btn);
		var autofitBtn = this._createBtn("/topology/images/menu/autofit.png");
		autofitBtn.click(function(){
			diagrammer.autoFit();
		});
		this.container.append(autofitBtn);
	},
	
	_createBtn: function(img){
		var newLi = $('<li class="ui-state-default ui-corner-all"></li>');
		newLi.css('margin', '2px');
		newLi.css('position', 'relative');
		newLi.css('padding', '4px 0');
		newLi.css('cursor', 'pointer');
		newLi.css('float', 'left');
		newLi.css('list-style', 'none');
		var newBtn = $('<img src="'+img+'"></img>');
		newBtn.css('width','20px');
		newBtn.css('height','20px');
		newBtn.css('float','left');
		newBtn.css('margin','0 4px');
		newLi.append(newBtn);
		return newLi;
	},
	
	_createSelector: function(){
		var slider = $('<div style="position:relative"></div>');
		slider.slider();
		return slider;
	}
};