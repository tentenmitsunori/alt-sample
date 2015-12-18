(() => {
	class NameActions {
			updateName(name) {
				return name
			}

			fetchNames() {
				var that = this
				$.ajax({
						url: "",
					dataType: 'json',
					success:function(res){
						console.log(res);
						console.log(that)
						for(key in res["weight_graph"]["daily_goal_weights"]) {
							that.updateName(key)
						}
					} 
				})
			}
	}
	this.NameActions = alt.createActions(NameActions);
})();
