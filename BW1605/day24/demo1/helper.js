var JSHELPER = {
	initi: function() {
		
	},
	animate: function(obj, attrList, callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var isStop = true;
			for(var attr in attrList) {
				var curAttr = attr === "opacity" ? Math.round(parseFloat(JSHELPER.getStyle(obj, attr) * 100)) : parseInt(JSHELPER.getStyle(obj, attr));
				var speed = (attrList[attr] - curAttr) / 8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(attr === "opacity") {
					obj.style.filter = "alpha(opacity=" + (curAttr + speed) + ")";
					obj.style.opacity = (curAttr + speed) / 100;
				} else {
					obj.style[attr] = curAttr + speed + "px";
				}
				curAttr != attrList[attr] && (isStop = false);
			}
			if(isStop) {
				clearInterval(obj.timer);
				!!callback && callback();
			}
		}, 15);
	},
	$: function(params) {
		switch (params.charAt(0)) {
			case "#":
				return document.getElementById(params.substring(1));
				break;
			case ".":
				return this.getByClass(document, params.substring(1));
			default:
				return document.getElementsByTagName(params);
		}
	},
	getStyle: function(obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	getByClass: function(pn, cn) {
		var ae = pn.getElementsByTagName("*"), 
			rent = [],
			re = new RegExp('\\b' + cn + '\\b', 'i');
		for(var i = 0, len = ae.length; i < len; i++) {
			ae[i].className.search(re) != -1 && rent.push(ae[i]);
		}
		return rent;
	}
};