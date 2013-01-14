Cloudwei.NodeRenderer = function(nodeData){
	this._initialize(nodeData);
};

Cloudwei.NodeRenderer.prototype = {

	_initialize: function(nodeData){
		Kinetic.Group.call(this, {});
		var imageObj = new Image();
		if(nodeData.type=='host')
			imageObj.src = '/topology/images/svg/host.svg';
		else if(nodeData.type=='switch')
			imageObj.src = '/topology/images/svg/switch.svg';
		else
			imageObj.src = '/topology/images/svg/storage.svg';
		var networkItem = new Kinetic.Image({
	    	image: imageObj,
	      	x: 0,
	      	y: 0,
	      	width: 60,
	      	height: 60,
	      	shadow: {
	        	color: '#a4a4a4',
		        blur: 10,
		        offset: [8, 8],
		        opacity: 0.2
	    	}
	    });
	    this.setWidth(60);
	    this.setHeight(60);
	    this.add(networkItem);
	}

};

Kinetic.Global.extend(Cloudwei.NodeRenderer, Kinetic.Group);