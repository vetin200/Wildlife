class UserController{
    constructor(userView,requester,baseUrl,appKey){
        this._userView = userView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/user/" + appKey + "/";
    }

    showLoginPage(isLoggedIn){
        this._userView.showLoginPage(isLoggedIn);
    }
    showRegisterPage(isLoggedIn){
        this._userView.showRegisterPage(isLoggedIn);
    }
    login(requestData){

    }
    register(requestData){
        if(requestData.username.length < 5){
            showPopup('error', "Username must consist of at least 5 symbols.");
            return;
        }
    }
    logout(){

    }
}