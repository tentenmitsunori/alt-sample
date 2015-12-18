(() => {
	class NameActions {
			updateName(name) {
				return name
			}

			fetchNames() {
				var that = this
				$.ajax({
						url: "https://staging-app-dietcoach.finc.co.jp/v3/dashboard/weight_graph?access_token=RFW8sksqxSsu1zYsZd8-&start_weight=50&end_weight=60&start_date=2015-12-12&end_date=2016-2-3&period_days=30",
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
