let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

//accesssing an object from a different js file!!
let ui = new UI();

searchBtn.addEventListener( "click", (e) => {
    let userText = searchUser.value;
    if (userText != "") {
        //fetch API
        fetch(`https://api.github.com/users/${userText}`) 
          .then(result => result.json())
          .then(data => {
            //console.log(data);
            if (data.message == 'Not Found') {
                //show alert
                ui.showAlert("User Not Found!", "alert alert-danger");
            } else {
                //show profile
                ui.showProfile(data);
            }
          }) 
    } else {
        //clear profile
        ui.clrProfile();
    }
    //clear search bar
    searchUser.value = "";
});