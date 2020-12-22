var viewmorebtn=$('#viewMorebtn');

var viewmoreCars=$('#section3part2_1');
var section3part2btnofmore=$('#section3part2');

var show_hide=true;

var useremail;

viewmorebtn.on('click',function () {
    if(show_hide==false){
        viewmorebtn.text("More");
        viewmoreCars.hide();
    }else{
        viewmorebtn.text("hide");
        viewmoreCars.show();
    }
    show_hide=!show_hide;
});

$("#loginbtn2").on('click', function () {
    let email=$("#staticEmail").val();
    let password=$("#inputPassword").val();
    useremail=email;
    $.ajax({
        method:"post",
        url:"http://localhost:8080/easyCarRent/api/v1/customer/",
        contentType:"application/json",
        data:JSON.stringify({
            "username": email,
            "password": password
        }),
        success:function (resp) {
            if(resp.data==true){
                window.location.href="http://localhost:63342/EasyCarRentFrontEnd-main/frontEndEasycar/regUser/index.html";
            }else{
                alert("You can't login, Your request didn't yet acceped or incorrct your name or password")
            }
        }
    })

});
