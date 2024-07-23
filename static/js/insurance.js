document.addEventListener("DOMContentLoaded", function () {
    var deleteInsuranceLinks = document.querySelectorAll(".delete");
    var premium = document.getElementById("premium");
    var deposit = document.getElementById("deposit");
    var balance = document.getElementById("balance");
    var insurance_type = document.getElementById("insurance_type");
    var hiddenBalance = document.getElementById("hiddenBalance");
    var other = document.getElementById("other");
    var car = document.getElementById("car");
    var journey = document.getElementById("journey");
    var health = document.getElementById("health");
    if(insurance_type){
        function updateInsuranceType(){
            type = insurance_type.value;
            if(type === "Autre"){
                health.style.display = "none";
                other.style.display = "flex";
                car.style.display = "none";
                journey.style.display = "none";
            }else if(type === "Auto"){
                health.style.display = "none";
                other.style.display = "none";
                journey.style.display = "none";
                car.style.display = "flex";
            }else if(type === "Voyage"){
                health.style.display = "none";
                other.style.display = "none";
                journey.style.display = "flex";
                car.style.display = "none";
            }else{
                health.style.display = "flex";
                other.style.display = "none";
                journey.style.display = "none";
                car.style.display = "none";
            }
        }
        updateInsuranceType()
        insurance_type.addEventListener('change', updateInsuranceType);
    }
    if(deposit && premium){
        function updateBalance(){
            depositValue = parseInt(deposit.value);
            premiumValue = parseInt(premium.value);
            if(!isNaN(depositValue) && !isNaN(premiumValue)){
                balance.value = premiumValue - depositValue;
                hiddenBalance.value = premiumValue - depositValue;
            }else{
                balance.value = "";
                hiddenBalance.value = "";
            }
        }
        updateBalance()
        deposit.addEventListener('input', updateBalance);
        premium.addEventListener('input', updateBalance);
    }
    if (deleteInsuranceLinks) {
        deleteInsuranceLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var insuranceId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", insuranceId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var insuranceId = this.getAttribute("data-id");
            window.location.href = "/insurance/" + insuranceId + "/delete/";
        });
    }
});