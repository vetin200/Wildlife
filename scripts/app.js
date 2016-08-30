(function () {

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_HypamKTc"; 
    let appSecret = "90742269d0564799aa821880d54a36c7"; 
    let _guestCredentials = "a14bc3ff-f358-48a4-aa1a-64c82682f477.AoFQG/y7NF//KKAFUrmQ/R4TsiaADzR1N7AUI1Vztg4=";
    
    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials);
    let requester = new Requester(authService);
    authService.initAuthorizationType("Kinvey");

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    let homeView = new HomeView(mainContentSelector, selector);
    let homeController = new HomeController(homeView, requester, baseUrl,appKey);
    
    let userView = new UserView(mainContentSelector, selector);
    let userController = new UserController(userView, requester, baseUrl, appKey);
    
    let postView = new PostView(mainContentSelector, selector);
    let postController = new PostController(postView, requester, baseUrl, appKey);

    initEventServices();

    onRoute("#/", function () {
        if (!authService.isLoggedIn()){
            homeController.showGuestPage();
        }
        else{
            homeController.showUserPage();
        }
    });

    onRoute("#/post-:id", function () {
        let top = $("#post-" + this.params['id']).position().top;
        $(window).scrollTop(top);
    });

    onRoute("#/login", function () {
        userController.showLoginPage(authService.isLoggedIn());
    });

    onRoute("#/register", function () {
        userController.showRegisterPage(authService.isLoggedIn());
    });

    onRoute("#/logout", function () {
        userController.logout();
    });

    onRoute('#/posts/create', function () {
        let data = {
            fullName: sessionStorage ['fullName']
        };

        postController.showCreatePostPage(data, authService.isLoggedIn());
    });

    bindEventHandler('login', function (ev, data) {
        userController.login(data);
    });

    bindEventHandler('register', function (ev, data) {
        userController.register(data)
    });

    bindEventHandler('createPost', function (ev, data) {
        postController.createPost(data);
    });

    run('#/');
})();