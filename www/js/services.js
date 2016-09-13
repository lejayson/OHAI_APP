angular.module('app.services', [])

.service('$locationProperties', function() {
    var Location;
    
    return {
        getLoc: function() {
            return Location;
        },
        setLoc: function(latlng) {
            Location = latlng;
        }
    };
})

.service('$infoProperties', function() {
    var name;
	var gender;
	var description;
	var environment;
    
    return {
        getName: function() {
            return name;
        },
        setName: function(nm) {
            name = nm;
        },
		getGender: function() {
            return gender;
        },
        setGender: function(gend) {
            gender = gend;
        },
		getDesc: function() {
            return description;
        },
        setDesc: function(desc) {
            description = desc;
        },
		getEnv: function() {
            return environment;
        },
        setEnv: function(env) {
            environment = env;
        },
		getAdult: function() {
            return Adult;
        },
        setAdult: function(adl) {
            Adult = adl;
        },
		getChild: function() {
            return Children;
        },
        setChild: function(chd) {
            Children = chd;
        }
    }
});



