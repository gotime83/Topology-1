Cloudwei.NodeTooltip = function(config){
	this._initialize(config);
};

Cloudwei.NodeTooltip.prototype = {

	_initialize: function(config){
		Kinetic.Group.call(this, config);
		
	}

};

Kinetic.Global.extend(Cloudwei.NodeTooltip, Kinetic.Group);