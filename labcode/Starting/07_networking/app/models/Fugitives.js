exports.definition = {
	
    config : {
        "columns" : {
            "name" : "text",
            "captured" : "integer",
            "url" : "text",
            "capturedLat" : "real",
            "capturedLong" : "real"
        },
        "defaults" : {
            "name" : "",
            "captured" : 0,
            "url" : "",
            "capturedLat" : "",
            "capturedLong" : ""
        },
		"adapter": {
			"type": "sql",
			"collection_name": "fugitives"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

