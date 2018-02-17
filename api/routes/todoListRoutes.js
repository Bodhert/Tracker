module.exports = function (app) {
    var todoList = require('../controllers/todoListController');
    var location = require('../controllers/LocationController');
    var user = require('../controllers/userController');
    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    //simple test call 
    app.get('/test1', (req, res) => {
        res.send('Hello World')
    });

    app.route('/gps')
        .get(location.send_page);

    app.route('/gps/:username')
        .get(location.bring_user_locations);

    //saves the coordinates 
    app.route('/save_location')
        .post(location.create_a_location); //create location 


    //brings all the locations
    app.route('/bring_all_locations')
        .get(location.lists_all_locations); // list all the locations stored

    //creates users or log them in , otherwise fails
    app.route('/')
        .get(user.send_page)
        .post(user.create_user);

    //gets the profile of the user
    app.route('/_profile')
        .get(user._profile);
    
    //log you out of the session
    app.route('/logout')
        .get(user.logout);

    //brings the name of the current user
    app.route('/current_user')
        .get(user.current_user);
    

};