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


var request = new XMLHttpRequest();

request.open('GET', "https://api.github.com/users/Octocat", true)
request.onload = function () {

    var data = JSON.parse(this.response)

    console.log(data);
    avatar.src = data.avatar_url;
    named.innerHTML = data.name;
    user.innerHTML = "@" + data.login;

    // Date Format //
    var origDateFormat = data.created_at;
    var expectedDateFormat = "25-Jan-2011";
    var newDateFormat = moment(origDateFormat).format('DD MMM YYYY');
    date.innerHTML = "Joined " + newDateFormat;
    //-------------/
    
    bio.innerHTML = data.bio;
    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;
    loc.innerHTML = data.location;
    website.innerHTML = data.blog;
    twitter.innerHTML = data.twitter_ussername;
    company.innerHTML = data.company;
};

request.send()

    function getData() {

        var username = document.getElementById("search").value;

        request.open('GET', "https://api.github.com/users/" + username, true)
        request.onload = function () {

        var data = JSON.parse(this.response)

            console.log(data);
            avatar.src = data.avatar_url;
            named.innerHTML = data.name;
            user.innerHTML = "@" + data.login;

            // Date Format //
            var origDateFormat = data.created_at;
            var expectedDateFormat = "25-Jan-2011";
            var newDateFormat = moment(origDateFormat).format('DD MMM YYYY');
            date.innerHTML = "Joined " + newDateFormat;
            //-------------/

            bio.innerHTML = data.bio;
            repos.innerHTML = data.public_repos;
            followers.innerHTML = data.followers;
            following.innerHTML = data.following;
            loc.innerHTML = data.location;
            website.innerHTML = data.blog;
            twitter.innerHTML = data.twitter_ussername;
            company.innerHTML = data.company;
        }

        request.send()
    };






    function changeMode() {

        console.log("change mode");
    };



    