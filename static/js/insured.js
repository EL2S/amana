


document.addEventListener("DOMContentLoaded", function () {
    var deleteInsuredLinks = document.querySelectorAll(".delete");
    if (deleteInsuredLinks) {
        deleteInsuredLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var insuredId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", insuredId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var insuredId = this.getAttribute("data-id");
            window.location.href = "/insured/" + insuredId + "/delete/";
        });
    }
});