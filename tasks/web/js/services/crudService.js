app.service('crudService', function($http, limitToFilter) {
	// ref.: http://docs.couchdb.org/en/2.0.0/http-api.html
	var S='http://localhost:5984/taskspozzod/';
    var onError = function(response){
        console.log("Errore di chiamata: ", response)
	};
	return {
		get: function(U,callback) {
			if (!U) return [{'error':'Nessun URL specificato.'}];
			$http.get(S+U).success(callback);
		},
		set: function(D,callback) {
			if (!D) return [{'error':'Nessun dato da inserire.'}];
			if (D._id=='new' || D._id==null) delete (D._id)
			if (D._id){
				//if (D._rev) delete(D._rev);
				$http.put(S+D._id,D).success(callback);  
			}else{
				$http.post(S,D).success(callback).error(onError);  
			}
		},
		fnd: function(D,callback){
			if (!D) return [{'error':'Nessun criterio specificato.'}];
			$http({
				url : S+'/_find/',
				method : 'POST',
				data : {"selector":D},
				dataType : 'json'
			}).then(callback, onError);			
		},
		del: function(D,callback) {
			if (!D) return [{'error':'Nessun dato da inserire.'}];
			if (!confirm('I dati selezionati verranno eliminati. Confermi?')){return};
			D._deleted=true
			$http.post(S,D).success(callback).error(onError);  
		}
	}
});