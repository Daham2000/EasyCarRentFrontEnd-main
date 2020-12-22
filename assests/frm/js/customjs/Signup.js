var Cus_name=$("#fname").val()+" "+$("#lname").val();
var email=$('#Email').val();
var Contact_num=$('#number').val();
var accept_status=false;
var password=$('#Password').val();
var Passwordconfirm=$('#Passwordconfirm').val();
var NICnum=$('#NICnum').val();
var localdatatime=new Date().toString();

var SignupAction=$("#SignupAction");
var checkaggrement=$("#checkaggrement");
var passwordstatus=$("#passwordstatus");

$("#checkaggrement").change(function () {

     password=$('#Password').val();
     Passwordconfirm=$('#Passwordconfirm').val();

    if(password!=Passwordconfirm){
        passwordstatus.text("Password didn't match");
        passwordstatus.css("color","red");
        $('#checkaggrement').prop('checked', false);
    }else{
        passwordstatus.text("");
    }
});

$("#SignupAction").on('click', function () {

     Cus_name=$("#fname").val()+" "+$("#lname").val();
     email=$('#Email').val();
     Contact_num=$('#number').val();
     accept_status=false;
     password=$('#Password').val();
     NICnum=$('#NICnum').val();
     localdatatime=new Date().toString();

   $.ajax({
       method:"POST",
       url:"http://localhost:8080/easyCarRent/api/v1/guest/m1",
       contentType:"application/json",
       data:JSON.stringify({
           "customer_id":email,
           "cus_name":Cus_name,
           "cus_NIC":NICnum,
           "password":password,
           "dateandTime":localdatatime,
           "accept_status":accept_status,
           "contact_num":Contact_num
       }),
       success:function (resp) {

           if(resp.message=="Success"){
               alert("You have successful sign up with Easycar Rental, We all verify your request soon...");
           }else{
                alert("Sign up unsuccesful...");
           }
       }
   })
});


