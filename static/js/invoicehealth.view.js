document.addEventListener("DOMContentLoaded", function () {
    var deleteHealthLinks = document.querySelectorAll(".delete");
    if (deleteHealthLinks) {
        deleteHealthLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var healthId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", healthId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var id = this.getAttribute("data-id");
            window.location.href = "/invoicehealth/" + id + "/delete/";
        });
    }
});