document.addEventListener("DOMContentLoaded", function () {
    var deleteJourneyLinks = document.querySelectorAll(".delete_journey");
    if (deleteJourneyLinks) {
        deleteJourneyLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var journeyId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", journeyId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var journeyId = this.getAttribute("data-id");
            window.location.href = "/disbursement/journey/" + journeyId + "/delete/";
        });
    }
});