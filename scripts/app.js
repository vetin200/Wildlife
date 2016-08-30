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
    
    


    initEventServices();

    onRoute("#/", function () {
    
    });

    onRoute("#/post-:id", function () {
      
    });

    onRoute("#/login", function () {
        
    });

    onRoute("#/register", function () {
        // Show the register page...
    });

    onRoute("#/logout", function () {
        // Logout the current user...
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
    });

    run('#/');
})();