var route = {};

route.index = function(req,res){
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ray', 'Morten', 'James']
    });
};

route.about = function(req,res){
    res.render('default',{
        title: 'About us',
        classname: 'about',
    });
};

module.exports = route;