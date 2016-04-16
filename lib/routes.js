if(Meteor.isClient){
	//Redirecting user to recipe book page after sign in
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	//Redirecting user to home page after sign out
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

//Redirecting user, if user is not logged
FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
	  FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		if(Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action: function() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action: function() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action: function(){
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	},
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action: function(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	},
});
