define(
	[ 
		'backbone'
	 ], 
	 function(
		Backbone
	 ) {
	return {
		type: 'modelhelper',
		formId: function(form) {
			if(typeof(form) != undefined && form != null) {
				return form.id;
			}
			return null;
		},
		formCaption: function(form) {
			if(typeof(form) != undefined && form != null) {
				return form.caption;
			}
			return null;
		},
		formDesc: function(form) {
			if(typeof(form) != undefined && form != null) {
				return form.description;
			}
			return null;
		},
		formAttributes: function(form) {
			if(typeof(form) != undefined && form != null) {
				return form.attributes;
			}
			return null;
		},
		formDatatypes: function(form) {
			if(typeof(form) != undefined && form != null) {
				return datatypes = form.datatypes;
			}
			return null;
		},
		datatypeId: function(datatype) {
			if(typeof(datatype) != undefined && datatype != null) {
				return datatype.id;
			}
			return null;
		},
		datatypeType: function(datatype) {
			if(typeof(datatype) != undefined && datatype != null) {
				return datatype.type;
			}
			return null;
		},
		datatypeAttributes: function(datatype) {
			if(typeof(datatype) != undefined && datatype != null) {
				return datatype.attributes;
			}
			return null;
		}
	};
});

// EOF

