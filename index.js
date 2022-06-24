const avatar = document.getElementById("obj-avatar");
const named = document.getElementById("obj-name");
const user = document.getElementById("obj-username");
const date = document.getElementById("obj-date");
const bio = document.getElementById("obj-bio");
const repos = document.getElementById("obj-repos");
const followers = document.getElementById("obj-followers");
const following = document.getElementById("obj-following");
const loc = document.getElementById("obj-location");
const website = document.getElementById("obj-website");
const twitter = document.getElementById("obj-twitter");
const company = document.getElementById("obj-company");

var item1 = document.getElementById("list-item1");
var item2 = document.getElementById("list-item2");
var item3 = document.getElementById("list-item3");
var item4 = document.getElementById("list-item4");

var err = document.getElementById("search-err");  

var request = new XMLHttpRequest();

request.open('GET', "https://api.github.com/users/Octocat", true)
request.onload = function () {

var data = JSON.parse(this.response)

    avatar.src = data.avatar_url;

    if (data.name === null) {
        named.innerHTML = data.login;
    } else {
        named.innerHTML = data.name;
    }
    
    user.innerHTML = "@" + data.login;
    user.setAttribute("href", "https://github.com/" + data.login);

    // Date Format //
    var origDateFormat = data.created_at;
    var expectedDateFormat = "25-Jan-2011";
    var newDateFormat = moment(origDateFormat).format('DD MMM YYYY');
    date.innerHTML = "Joined " + newDateFormat;
    //-------------/

    if (data.bio === null) {
        bio.innerHTML = "This profile has no bio";
    } else {
        bio.innerHTML = data.bio;
    }

    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;

    if (data.location === null) {
        loc.innerHTML = "Not Available";
        item1.classList.add('opacity');
    } else {
        loc.innerHTML = data.location;
        item1.classList.remove('opacity');
    }

    if (data.blog === "" ) {
        website.innerHTML = "Not Available";
        item2.classList.add('opacity');
    } else {
        website.innerHTML = data.blog;
        website.setAttribute("href", data.blog);
        item2.classList.remove('opacity');
    }

    if (data.twitter_username === null) {
        twitter.innerHTML = "Not Available";
        item3.classList.add('opacity');
    } else {
        twitter.innerHTML = "@" + data.twitter_username;
        twitter.setAttribute("href", "https://twitter.com/" + data.twitter_username);
        item3.classList.remove('opacity');
    }

    if (data.company === null) {
        company.innerHTML = "Not Available";
        item4.classList.add('opacity');
    } else {
        company.innerHTML = data.company;
        company.setAttribute("href", "https://github.com/" + data.company.slice(1));
        item4.classList.remove('opacity');
    }
};
request.send()



function getData() {  
      
    var username = document.getElementById("search").value;
    
    request.open('GET', "https://api.github.com/users/" + username, true)
    request.onload = function () {
        
    var data = JSON.parse(this.response)

        if (data.message === "Not Found") {
            err.style.display = "initial";
        } else {

        avatar.src = data.avatar_url;

        if (data.name === null) {
            named.innerHTML = data.login;
        } else {
            named.innerHTML = data.name;
        }
        
        user.innerHTML = "@" + data.login;
        user.setAttribute("href", "https://github.com/" + data.login);


        // Date Format //
        var origDateFormat = data.created_at;
        var expectedDateFormat = "25-Jan-2011";
        var newDateFormat = moment(origDateFormat).format('DD MMM YYYY');
        date.innerHTML = "Joined " + newDateFormat;
        //-------------/

        if (data.bio === null) {
            bio.innerHTML = "This profile has no bio";
        } else {
            bio.innerHTML = data.bio;
        }

        repos.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;

        if (data.location === null) {
            loc.innerHTML = "Not Available";
            item1.classList.add('opacity');
        } else {
            loc.innerHTML = data.location;
            item1.classList.remove('opacity');
        }

        if (data.blog === "" ) {
            website.innerHTML = "Not Available";
            item2.classList.add('opacity');
        } else {
            website.innerHTML = data.blog;
            website.setAttribute("href", data.blog);
            item2.classList.remove('opacity');
        }

        if (data.twitter_username === null) {
            twitter.innerHTML = "Not Available";
            item3.classList.add('opacity');
        } else {
            twitter.innerHTML = "@" + data.twitter_username;
            twitter.setAttribute("href", "https://twitter.com/" + data.twitter_username);
            item3.classList.remove('opacity');
        }

        if (data.company === null) {
            company.innerHTML = "Not Available";
            item4.classList.add('opacity');
        } else {
            company.innerHTML = data.company;
            company.setAttribute("href", data.company.slice(1));
            item4.classList.remove('opacity');
        }

        err.style.display = "none";
        }
    }
    request.send()
};






function changeMode() {
    
    var body = document.body;
    var headerTitle = document.getElementById("header-title");
    var headerButton = document.getElementById("header-button");
    const button = document.querySelector(".mode");
    var searchBar = document.getElementById("searchBar");
    var search = document.getElementById("search");
    var infos = document.getElementById("infos");
    var data = document.getElementById("grid-data");
    
    body.classList.toggle("dark-mode-body");
    headerTitle.classList.toggle("dark-mode-text");
    searchBar.classList.toggle("dark-background");
    search.classList.toggle("dark-background");
    search.classList.toggle('placeholderWhite');
    infos.classList.toggle("dark-background");
    date.classList.toggle("text-grayBlue");
    named.classList.toggle("whiteText");
    data.classList.toggle("dark-mode-body");
    repos.classList.toggle("whiteText");
    followers.classList.toggle("whiteText");
    following.classList.toggle("whiteText");
    loc.classList.toggle("whiteText");
    website.classList.toggle("whiteText");
    twitter.classList.toggle("whiteText");
    company.classList.toggle("whiteText");
    item1.classList.toggle("whiteImg");
    item2.classList.toggle("whiteImg");
    item3.classList.toggle("whiteImg");
    item4.classList.toggle("whiteImg");

    if(button.getAttribute("data") === "light" ) {
        headerButton.classList.toggle("dark-mode-text");
        headerButton.innerHTML = 'Dark <img src="./assets/icon-moon.svg" alt="icon-moon-mode">';
        button.setAttribute("data", "dark");
        headerButton.classList.remove('hoverClass2');
        headerButton.classList.add('hoverClass1');
    } else {
        headerButton.classList.toggle("dark-mode-text");
        headerButton.innerHTML = 'Light <img src="./assets/icon-sun.svg" alt="icon-light-mode">';
        button.setAttribute("data", "light");
        headerButton.classList.remove('hoverClass1');
        headerButton.classList.add('hoverClass2');
    }
};

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (dark) {
    changeMode();
}; 
    