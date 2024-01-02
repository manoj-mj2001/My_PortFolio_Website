document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('frmdata');
    form.addEventListener('submit', function (event) {
        submitFormData(event);
    });
});
function checkEmail()
{
    var email = document.getElementsByName("email").value;
// Validate email format using a regular expression

    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
}
}

function submitFormData(event) {
    event.preventDefault();

    // Get form values
    var name = event.target.elements['name'].value;
    var email = event.target.elements['email'].value;
    var message = event.target.elements['message'].value;

    var data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    var http = new XMLHttpRequest();
    var url = "https://manojtambake-server.onrender.com/";

    http.open('POST', url, true);

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            alert("Form Submitted Successfully");
            window.location.href = "/";
            console.log(http.responseText);
        }
    }

    http.send(data);

}