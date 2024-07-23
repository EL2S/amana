

document.addEventListener("DOMContentLoaded", function () {
    var deletePrimeassuranceLinks = document.querySelectorAll(".delete");
    if (deletePrimeassuranceLinks) {
        deletePrimeassuranceLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var primeassuranceId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", primeassuranceId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var primeassuranceId = this.getAttribute("data-id");
            window.location.href = "/primeassurance/" + primeassuranceId + "/delete/";
        });
    }
});