// if user age is between 18 to 44 then An alert is given that user eligible to take vaccine then this link will be open
// automatically in browser “https://selfregistration.cowin.gov.in”
let dat = prompt("Enter your DOB EX:06/24/2000(mm/dd/yyy) : ");   

function getAge() {
    var today = new Date();
    var birthDate = new Date(dat);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
let uage = getAge(dat);

if (uage >= 18 && uage <= 44) {
    alert("Age :"+ uage +" Your Eligible to take vaccine")
    window.location.href = "https://selfregistration.cowin.gov.in";
} else{
    document.write( uage + ": your not eligible for taking Vaccination");
}
