
$("#loginnowbtn").on('click', function (e) {
    let username=$("#inputUsername").val();
    let password=$("#inputPassword").val();

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m1",
        contentType: "application/json",
        data: JSON.stringify({
            "username":username,
            "password":password
        }),
        success:function (resp) {
            if (resp.data == true) {
                window.location.href="http://localhost:63342/EasyCarRentFrontEnd-main/frontEndEasycar/Admin/dashboard.html";
            } else {
                alert("your user name or password is incorrect");
            }
        }
    })

});

