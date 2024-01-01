document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('frmdata');
    form.addEventListener('submit', function (event) {
        submitFormData(event);
    });
});


function submitFormData(event) {
    event.preventDefault();

    // Get form values
    var name = event.target.elements['name'].value;
    var email = event.target.elements['email'].value;
    var message = event.target.elements['message'].value;

    // Log form values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

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