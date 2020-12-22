var dailysummery= $("#dailysummery");
var dashtopic= $("#dashboardtopic");
var addAcarview= $('#addAcar');
var editAcarView= $('#editAcar');
var removeAcarView= $('#removeAcar');
var addToMaintainanceView= $('#addToMaintainance');
var viewAllCarsView= $('#viewAllCarshere');
var viewAllCustomershereView= $('#viewAllCustomershere');
var ViewRentReq= $('#ViewRentReq');
var calcincomeView= $('#calcincomeView');

var viewcustomersbtn=$('#viewcustomersbtn');
var viewrentalreqbtn=$('#viewrentalreqbtn');
var dashbtn=$('#dashbtn');
var editcarbtn= $('#editCar');
var addCarbtn=$('#addCar');
var removeacarbtn=$('#removeacarbtn');
var addToMaintainencebtn=$('#addToMaintainencebtn');
var viewAllarsbtn=$('#viewAllarsbtn');
var calcincomebtn=$('#calcincomebtn');

var addToMaintainencebtn=$('#addToMaintainencebtn');
var addtomainbtn=$('#addtomainbtn');


var saveAction=$('#saveAction');
var editCarAction=$('#editCarAction');
var removeCarAction=$('#removeCarAction');

var selectCar=$("#selectCar");
var selectCar2=$("#selectCar2");
var selectCar3=$("#selectCar3");
var selectCar4=$("#selectCar4");

$( document ).ready(function() {
    loadAllarshere();
});

addCarbtn.click(function () {
    hideAll();
    changeDashboardtopic("Manage Cars");
    addAcarview.show();
});


dashbtn.click(function () {
    hideAll();
    dailysummery.show();
    changeDashboardtopic("Dashboard");
});

viewcustomersbtn.click(function () {
    hideAll();
    viewAllCustomershereView.show();
    changeDashboardtopic("Manage Customers");
});

editcarbtn.click(function () {
    hideAll();
    loadAllarshere();
    editAcarView.show();
    changeDashboardtopic("Manage Cars");
});

removeacarbtn.click(function () {
    hideAll();
    removeAcarView.show();
    changeDashboardtopic("Manage Cars");
});

addToMaintainencebtn.click(function () {
    addToMaintainanceView.show();
});

viewAllarsbtn.click(function () {
    hideAll();
    viewAllCarsView.show();
    changeDashboardtopic("Manage Cars");
});

viewrentalreqbtn.click(function () {
    hideAll();
    ViewRentReq.show();
    changeDashboardtopic("View All rental requests here")
});

calcincomebtn.click(function () {
    hideAll();
    calcincomeView.show();
    changeDashboardtopic("Calculate income")
});

function hideAll() {
    dailysummery.hide();
    addAcarview.hide();
    editAcarView.hide();
    removeAcarView.hide();
    addToMaintainanceView.hide();
    viewAllCarsView.hide();
    viewAllCustomershereView.hide();
    ViewRentReq.hide();
    calcincomeView.hide();
}

function changeDashboardtopic(topic) {
    dashtopic.text(topic);
    addToMaintainanceView.show();
};

saveAction.on('click', function (e) {
    let reg_num=$('#regnuminp').val();
    let carName=$('#Car_name').val();
    let color=$('#colorinp').val();
    let brand=$('#brandinp').val();
    let type=$('#Typeinp').val();
    let transmission_type=$('#Transmissiontypeinp').val();
    let Numberofpassengersinp=$('#Numberofpassengersinp').val();
    let priceForextraKM=$('#PricefoextraKMinp').val();
    let fuelType=$('#fuelTypeinp').val();
    let km=2;
    let montlyrate=$('#Monthlyrateinp').val();
    let dailyrate=$('#Dailyrateinp').val();
    let avalibility= true;
    let freemileage= $("#freemileage").val();

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m2",
        contentType: "application/json",
        data:JSON.stringify({
            "reg_num": reg_num,
            "carname": carName,
            "color": color,
            "brand": brand,
            "avalibility": avalibility,
            "type": type,
            "transmission_type": transmission_type,
            "priceForextraKM": priceForextraKM,
            "fuelType":  fuelType,
            "km": km,
            "montlyrate": montlyrate,
            "dailyrate": dailyrate,
            "numberofpass": Numberofpassengersinp,
            "damageStatus": false,
            "freemileage": freemileage,
            "maintainenceStatus": false
        }),
        success:function (resp) {
            if (resp.message == "Success") {
                alert("Car Added successful...");
            } else {
                alert(resp.data);
            }
        }
    })

});

editCarAction.on('click',function (e) {
    let reg_num=$('#regnumber').val();
    let carName=$('#Car_name').val();
    let color=$('#color').val();
    let brand=$('#Brand3').val();
    let type=$('#Type').val();
    let transmission_type=$('#tratype').val();
    let priceForextraKM=$('#priceforkm').val();
    let fuelType=$('#ftype').val();
    let km=2;
    let montlyrate=$('#mothlyrate').val();
    let numberofpass=$('#numofpas').val();
    let freem=$('#freem').val();
    let dailyrate=$('#drate').val();
    let avalibility= true;

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m3",
        contentType: "application/json",
        data:JSON.stringify({
            "reg_num": reg_num,
            "carName": carName,
            "color": color,
            "brand": brand,
            "avalibility": avalibility,
            "type": type,
            "transmission_type": transmission_type,
            "priceForextraKM": priceForextraKM,
            "fuelType":  fuelType,
            "km": km,
            "montlyrate": montlyrate,
            "dailyrate": dailyrate,
            "numberofpass": numberofpass,
            "damageStatus": false,
            "freemileage": freem,
            "maintainenceStatus": false
        }),
        success:function (resp) {
            if (resp.message == "Success") {
                alert("Car Updated successful...");
            } else {
                alert(resp.data);
            }
        }
    })

});

let reg_num=$('#regnumber').val();
let carname2=$('#carName5').val();
let color=$('#color').val();
let brand=$('#Brand3').val();
let type=$('#Type').val();
let transmission_type=$('#tratype').val();
let priceForextraKM=$('#priceforkm').val();
let freemileage=$('#freemileage').val();
let Numberofpassengersinp=$('#Numberofpassengersinp').val();
let fuelType=$('#ftype').val();
let km=2;
let montlyrate=$('#mothlyrate').val();
let dailyrate=$('#drate').val();
let avalibility= true;
let damageStatus= true;

let dataList;
let indexofCarList;

let brandofViewCar=$('#brandofViewCar');
let fueltypeofViewCar=$('#fueltypeofViewCar');
let typeofViewCar=$('#typeofViewCar');
let dailyrateViewCar=$('#dailyrateViewCar');
let numodpassenViewCar=$('#numodpassenViewCar');
let monthlyViewCar=$('#monthlyViewCar');
let transmisionViewCar2=$('#transmisionViewCar');
let freemilieageViewCar=$('#freemilieageViewCar');
let priceforExtraViewCar=$('#priceforExtraViewCar');
let regnumberViewCar=$('#regnumberViewCar');
let colorViewCar=$('#colorViewCar');
let Avalibility=$('#Avalibility');
let damageStatus2=$('#damageStatus');

let searchtoView=$('#searchtoView');

let Selectcartype=$('#Selectcartype');
let Transmissiontype=$('#Transmissiontype');
let Noofpassengers=$('#Noofpassengers');
let Price=$('#Price');
let Brand=$('#Brand');
let Fueltype=$('#Fueltype');


function loadAllarshere(e) {
    selectCar.empty();
    selectCar2.empty();
    selectCar3.empty();
    $.ajax({
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m6",
        dataType: 'json',
        success:function (resp) {
            dataList=resp.data;
            for(var i in dataList){
                reg_num=dataList[i].reg_num;
                var option="<option>"+reg_num+"</option>";
                selectCar.append(option);
                selectCar2.append(option);
                selectCar3.append(option);
                selectCar4.append(option);
            }
        }
    })
}

selectCar.on('click', function (e) {

    indexofCarList=selectCar.val();
    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m5",
        dataType: 'json',
        contentType: "application/json",
        data:JSON.stringify({
            "reg_num":indexofCarList
        }),
        success:function (resp) {

             color=resp.data.color;
             brand=resp.data.brand;
             carname2=resp.data.carname;
             type=resp.data.type;
             transmission_type=resp.data.transmission_type;
             priceForextraKM=resp.data.priceForextraKM;
             fuelType=resp.data.fuelType;
             km=resp.data.km;
             montlyrate=resp.data.montlyrate;
             dailyrate=resp.data.dailyrate;
             freemileage= resp.data.freemileage;
             avalibility= resp.data.avalibility;
             damageStatus= resp.data.damageStatus;
             Numberofpassengersinp= resp.data.numberofpass;

            $('#regnumber').val(indexofCarList);
            $('#carName5').val(carname2);
            $('#color').val(color);
            $('#Brand3').val(brand);
            $('#Type').val(type);
            $('#tratype').val(transmission_type);
            $('#priceforkm').val(priceForextraKM);
            $('#ftype').val(fuelType);
            $('#mothlyrate').val(montlyrate);
            $('#drate').val(dailyrate);
            $('#numofpas').val(Numberofpassengersinp);
            $('#freem').val(freemileage);

        }
    })

});

removeacarbtn.on('click', function (e) {
    loadAllarshere();
});

removeCarAction.on('click', function () {
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/easyCarRent/api/v1/admin/m4",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
            "reg_num": indexofCarList
        }),
        success: function (resp) {
            alert(resp.message);
            loadAllarshere();
        }
    });
});

selectCar2.on('click', function (e) {
    indexofCarList = selectCar2.val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/easyCarRent/api/v1/admin/m5",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
            "reg_num": indexofCarList
        }),
        success: function (resp) {

            color = resp.data.color;
            brand = resp.data.brand;
            type = resp.data.type;
            transmission_type = resp.data.transmission_type;
            priceForextraKM = resp.data.priceForextraKM;
            fuelType = resp.data.fuelType;
            km = resp.data.km;
            montlyrate = resp.data.montlyrate;
            dailyrate = resp.data.dailyrate;
            avalibility = resp.data.avalibility;

            $('#regnum2').val(indexofCarList);
            $('#color2').val(color);
            $('#b').val(brand);
            $('#Type').val(type);
            $('#tratype2').val(transmission_type);
            $('#km2').val(priceForextraKM);
            $('#ftype2').val(fuelType);
            $('#mrate2').val(montlyrate);
            $('#dailyrate2').val(dailyrate);

        }
    })
});

selectCar3.on('click', function (e) {
    indexofCarList=selectCar3.val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/easyCarRent/api/v1/admin/m5",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
            "reg_num": indexofCarList
        }),
        success: function (resp) {

            color=resp.data.color;
            brand=resp.data.brand;
            type=resp.data.type;
            transmission_type=resp.data.transmission_type;
            priceForextraKM=resp.data.priceForextraKM;
            fuelType=resp.data.fuelType;
            km=resp.data.km;
            montlyrate=resp.data.montlyrate;
            dailyrate=resp.data.dailyrate;
            freemileage= resp.data.freemileage;
            avalibility= resp.data.avalibility;
            damageStatus= resp.data.damageStatus;
            Numberofpassengersinp= resp.data.numberofpass;


            regnumberViewCar.text(indexofCarList);
            colorViewCar.text(color);
            brandofViewCar.text(brand);
            typeofViewCar.text(type);
            transmisionViewCar2.text(transmission_type);
            priceforExtraViewCar.text(priceForextraKM);
            fueltypeofViewCar.text(fuelType);
            monthlyViewCar.text(montlyrate);
            dailyrateViewCar.text(dailyrate);
            freemilieageViewCar.text(freemileage);
            Avalibility.text(avalibility);
            damageStatus2.text(damageStatus);
            numodpassenViewCar.text(Numberofpassengersinp);

        }
    })

});

searchtoView.on('click', function () {
    loadAllarshere();

    let Selectcartype3=Selectcartype.val();
    let Transmissiontype3=Transmissiontype.val();
    let Noofpassengers3=Noofpassengers.val();
    let Price3=Price.val();
    let Brand3=Brand.val();
    let Fueltype3=Fueltype.val();

    $.ajax({
        method: "post",
        url: "http://localhost:8080/easyCarRent/api/v1/admin/m8",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
            "type": Selectcartype3,
            "transmission_type": Transmissiontype3,
            "numberofpass": Noofpassengers3,
            "dailyrate": Price3,
            "brand": Brand3,
            "fuelType": Fueltype3
        }),
        success: function (resp) {

        }
    })

});

addToMaintainencebtn.on('click', function () {
    selectCar4.empty();
    loadAllarshere();
});

selectCar4.on('click', function () {

    indexofCarList=selectCar4.val();

    console.log(indexofCarList);

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m5",
        dataType: 'json',
        contentType: "application/json",
        data:JSON.stringify({
            "reg_num":indexofCarList
        }),
        success:function (resp) {

            color=resp.data.color;
            brand=resp.data.brand;
            type=resp.data.type;
            transmission_type=resp.data.transmission_type;
            priceForextraKM=resp.data.priceForextraKM;
            fuelType=resp.data.fuelType;
            km=resp.data.km;
            montlyrate=resp.data.montlyrate;
            dailyrate=resp.data.dailyrate;
            freemileage= resp.data.freemileage;
            avalibility= resp.data.avalibility;
            damageStatus= resp.data.damageStatus;
            Numberofpassengersinp= resp.data.numberofpass;

        }
    })


});

addtomainbtn.on('click', function () {
    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m3",
        contentType: "application/json",
        data:JSON.stringify({
            "reg_num": indexofCarList,
            "color": color,
            "brand": brand,
            "avalibility": avalibility,
            "type": type,
            "transmission_type": transmission_type,
            "priceForextraKM": priceForextraKM,
            "fuelType":  fuelType,
            "km": km,
            "montlyrate": montlyrate,
            "dailyrate": dailyrate,
            "numberofpass": Numberofpassengersinp,
            "damageStatus": false,
            "freemileage": freemileage,
            "maintainenceStatus": true
        }),
        success:function (resp) {
            if (resp.message == "Success") {
                alert("Car Updated successful...");
            } else {
                alert(resp.data);
            }
        }
    })

});

var markasdamaged=$("#markasdamaged");

markasdamaged.on('click', function () {
    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m3",
        contentType: "application/json",
        data:JSON.stringify({
            "reg_num": indexofCarList,
            "color": color,
            "brand": brand,
            "avalibility": avalibility,
            "type": type,
            "transmission_type": transmission_type,
            "priceForextraKM": priceForextraKM,
            "fuelType":  fuelType,
            "km": km,
            "montlyrate": montlyrate,
            "dailyrate": dailyrate,
            "numberofpass": Numberofpassengersinp,
            "damageStatus": true,
            "freemileage": freemileage,
            "maintainenceStatus": true
        }),
        success:function (resp) {
            if (resp.message == "Success") {
                alert("Car Updated successful...");
            } else {
                alert(resp.data);
            }
        }
    })

});

var viewcustomersbtn=$("#viewcustomersbtn");
var allCusbody=$("#allCusbody");

viewcustomersbtn.on('click', function () {
    allCusbodyrow=$("#allCusbody tr");
    loadAllunVerifyedCustomers();
});

function loadAllunVerifyedCustomers() {
    allCusbody.empty();
    $.ajax({
        method:"get",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m9",
        contentType: "application/json",
        success:function (resp) {
            var list=resp.data;
            for(var i in resp.data){

                let Customer_id=list[i].customer_id;
                let Cus_name=list[i].cus_name;
                let Cus_NIC=list[i].cus_NIC;
                let Password=list[i].password;
                let DateandTime=list[i].dateandTime;
                let accept_status=list[i].accept_status;
                let Contact_num=list[i].contact_num;

                var row=`<tr><td>${Cus_name}</td><td>${Cus_NIC}</td><td></td><td>${accept_status}</td><td>${Contact_num}
                        </td><td></td><td></td><td>${"Not"}</td><td>${Customer_id}</td></tr>`;

                allCusbody.append(row);

            }

        }
    })

}

var verifybtn=$("#verifybtn");

var enmail3;

var customer_id;
var cus_name;
var cus_NIC;
var password;
var dateandTime;
var accept_status;
var contact_num;

$("#allCusbody" ).on( "click", "tr", function( event ) {

    $(this).find("td").each(function(){
        enmail3=($(this).html());
    });

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/admin/m11",
        dataType:"json",
        contentType:"application/json",
        data:JSON.stringify({
            "customer_id":enmail3,
        }),
        success:function (resp) {
            if(resp.message=="Success"){
                customer_id=resp.data.customer_id,
                    cus_name=resp.data.cus_name,
                    cus_NIC=resp.data.cus_NIC,
                    password=resp.data.password,
                    dateandTime=resp.data.dateandTime,
                    accept_status=resp.data.accept_status,
                    contact_num=resp.data.contact_num
            }else{
                alert("Can not load ...");
            }
        }
    })

});


verifybtn.on("click",function () {

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/easyCarRent/api/v1/customer/m2",
        contentType:"application/json",
        data:JSON.stringify({
            "customer_id":customer_id,
            "cus_name":cus_name,
            "cus_NIC":cus_NIC,
            "password":password,
            "dateandTime":dateandTime,
            "accept_status":true,
            "contact_num":contact_num
        }),
        success:function (resp) {
            if(resp.message=="Success"){
                alert("Customer Verified successfull");
            }else{
                alert("Verification unsuccesful...");
            }
        }
    })
    loadAllunVerifyedCustomers();
});










