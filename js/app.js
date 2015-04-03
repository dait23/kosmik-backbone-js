var fb = new Application();

fb.Router = Backbone.Router.extend({

    routes: {
        "":                         "welcome",
        "me":                       "me",
        "sidebar":                  "sidebar",
         "viewer":                  "viewer",
          "viewer2":                  "viewer2"


     
    },

    initialize: function() {
        // Caching the Welcome View
        this.welcomeView = new fb.views.Welcome({model: fb.user});
    },

    welcome: function () {
        $('#content').html(this.welcomeView.el);
    },

    me: function () {
        this.person('me');
    }

  
   

});

$(document).on('ready', function() {
    fb.user = new fb.models.Person(); // Holds the authenticated Facebook user
    // Load HTML templates for the app
    fb.templateLoader.load(['shell','login','sidebar','picture','name','viewer','viewer2','viewer3','viewer4','viewer5','viewer6'], function () {
        fb.shell = new fb.views.Shell({el: "#shell", model: fb.user});
        //fb.login = new fb.views.Login({el: "#login", model: fb.login});
        fb.router = new fb.Router();
        Backbone.history.start();
    });
});

$(document).on('fbStatusChange', function (event, data) {
    if (data.status === 'connected') {
        FB.api('/me', function (response) {
            fb.user.set(response); // Store the newly authenticated FB user
        });
    } else {
        fb.user.set(fb.user.defaults); // Reset current FB user
    }
});

$(document).on('logout', function () {
    FB.logout();
    return false;
});

$(document).on('login', function () {
    FB.login(function(response) {
    }, {scope: 'publish_actions'});
    return false;
});

