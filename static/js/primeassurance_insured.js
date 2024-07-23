

document.addEventListener("DOMContentLoaded", function () {
    var deleteInsuredLinks = document.querySelectorAll(".delete");
    if (deleteInsuredLinks.length > 0) {
        deleteInsuredLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var insuredId = this.getAttribute("data-id");
                var primeassuranceId = this.getAttribute("data-primeassurance-id");

                // Using dataset to set data attributes
                var deleteButton = document.getElementById("btnDelete");
                deleteButton.dataset.id = insuredId;
                deleteButton.dataset.primeassuranceId = primeassuranceId;

                // Show the modal
                $('#deleteModal').modal('show');
            });
        });

        var btnDelete = document.getElementById("btnDelete");
        if (btnDelete) {
            btnDelete.addEventListener("click", function () {
                var insuredId = this.dataset.id;
                var primeassuranceId = this.dataset.primeassuranceId;
                window.location.href = "/primeassurance/" + primeassuranceId + "/insured/" + insuredId + "/delete/";
            });
        }
    }
});
