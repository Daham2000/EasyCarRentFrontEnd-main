var CustomerEmail;

$('#searchbtn').on('click', function () {
    $.ajax({
        method:"get",
        url:"http://localhost:8080/easyCarRent/api/v1/customer/m5",
        contentType:"application/json",
        success:function (resp) {

        }
    })

});

var Car_nameselecttion=$("#Car_name");

var searchCar=$("#searchAcar");
var makeRental=$("#makeRental");

// SearchCarwithClientRequrments
searchCar.on('click', function () {
    var brand=$("#Brand").val();
    var type=$("#Selectcartype").val();
    var transmission_type=$("#Brand").val();
    var fuelType=$("#Transmissiontype").val();
    var dailyrate=$("#Price").val();
    var numberofpass=$("#Noofpassengers").val();

   $.ajax({
       method:"POST",
       url:"http://localhost:8080/easyCarRent/api/v1/customer/m6",
       contentType:"application/json",
       dataType:"json",
       data:JSON.stringify({
           "brand":"Toyota",
           "type":"General",
           "transmission_type":"Auto",
           "fuelType":"Diesel",
           "dailyrate": 1231,
           "numberofpass": 2
       }),
       success:function (resp) {
           console.log(resp.data);
           Car_nameselecttion.empty();
           var datalist=resp.data;
           if (datalist==null){
               alert("No car found with your requirements");
           }else{
               for (var i=0; i<datalist.length; i++){
                   var CarName=datalist[i].carname;
                   var option="<option>"+CarName+"</option>";
                   Car_nameselecttion.append(option);
               }
           }
       }
   })
});


// MakeRentalAction
makeRental.on('click', function () {

    var r_ID="R0002";
    var pickUpVenue="Hambanthota";
    var return_venue="Galle";
    var pickupdate="2020/05/05";
    var returndate="2020/08/01";
    var rent_date="2020/05/04";
    var rent_total=5000;
    var customer="dahamakalanka200s0@gmail.com";

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/customer/m4",
        contentType: "application/json",
        dataType:"json",
        data:JSON.stringify({
            "r_ID":r_ID,
            "pickUpVenue":pickUpVenue,
            "return_venue":return_venue,
            "pickupdate":pickupdate,
            "returndate":returndate,
            "rent_date":rent_date,
            "rent_total":rent_total,
            "customer":customer
        }),
        success:function (resp) {
            if (resp.message=="Success"){
                alert("Rent is success.");
            }
        }
    })

})