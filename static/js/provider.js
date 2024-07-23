

document.addEventListener("DOMContentLoaded", function () {
    var deleteProviderLinks = document.querySelectorAll(".delete");
    if (deleteProviderLinks) {
        deleteProviderLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var providerId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", providerId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var providerId = this.getAttribute("data-id");
            window.location.href = "/provider/" + providerId + "/delete/";
        });
    }
});