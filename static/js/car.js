document.addEventListener("DOMContentLoaded", function () {
    var deleteCarLinks = document.querySelectorAll(".delete_car");
    if (deleteCarLinks) {
        deleteCarLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var carId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", carId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var carId = this.getAttribute("data-id");
            window.location.href = "/disbursement/car/" + carId + "/delete/";
        });
    }
});