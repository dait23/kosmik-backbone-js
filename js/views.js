fb.views.Shell = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('shell'));
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        new fb.views.Login({model: this.model, el: '#login'});
        new fb.views.Sidebar({model: this.model, el: '#sidebar'});
        new fb.views.Picture({model: this.model, el: '#frame'});
        new fb.views.Name({model: this.model, el: '#name'});
        new fb.views.Viewer({model: this.model, el: '#viewer'});
        new fb.views.Viewer2({model: this.model, el: '#viewer2'});
        new fb.views.Viewer3({model: this.model, el: '#viewer3'});
        new fb.views.Viewer4({model: this.model, el: '#viewer4'});
        new fb.views.Viewer5({model: this.model, el: '#viewer5'});
        new fb.views.Viewer6({model: this.model, el: '#viewer6'});
        return this;
    },

    events: {
        'mousedown li': 'mouseDown',
        'mouseup li': 'mouseUp',
        'click .btn-fb': 'login'
    },

    mouseDown: function (e) {
        $(e.currentTarget).addClass('active');
    },

    mouseUp: function () {
        $('li').removeClass('active');
    },

    login: function () {
        $(document).trigger('login');
        return false;
    },

    sidebar: function () {
        $(document).trigger('sidebar');
        return false;
    },
    picture: function () {
        $(document).trigger('frame');
        return false;
    },
    Name: function () {
        $(document).trigger('name');
        return false;
    }

});


fb.views.Login = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('login'));
        this.model.on("change", this.render, this);
        this.render();
    },


    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .login': 'login',
        'click .logout': 'logout'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    },

    logout: function (e) {
        $(document).trigger('logout');
        return false;
    }

});

////

fb.views.Sidebar = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('sidebar'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }


});

fb.views.Picture = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('picture'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }


});


fb.views.Name = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('name'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }


});


fb.views.Viewer = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('viewer'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .login': 'login'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    }


});

fb.views.Viewer2 = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('viewer2'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .login': 'login'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    }


});

fb.views.Viewer3 = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('viewer3'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .login': 'login'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    }


});

fb.views.Viewer4 = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('viewer4'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .login': 'login'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    }


});

fb.views.Viewer5 = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('viewer5'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .login': 'login'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    }


});

fb.views.Viewer6 = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(fb.templateLoader.get('viewer6'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .login': 'login'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    }


});










