var request = new XMLHttpRequest();

request.open('GET', "https://api.github.com/users/Octocat", true)
request.onload = function () {

    var data = JSON.parse(this.response)
    console.log(data);
};

request.send()

    function getData() {

        var username = document.getElementById("search").value;

        request.open('GET', "https://api.github.com/users/" + username, true)
        request.onload = function () {

        var data = JSON.parse(this.response)
            console.log(data);
        }

        request.send()
    };






    function changeMode() {

        console.log("change mode");
    };