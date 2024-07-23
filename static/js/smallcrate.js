document.addEventListener("DOMContentLoaded", function () {
    var deleteSmallCrateLinks = document.querySelectorAll(".delete_smallcrate");
    if (deleteSmallCrateLinks) {
        deleteSmallCrateLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var smallcrateId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", smallcrateId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var smallcrateId = this.getAttribute("data-id");
            window.location.href = "/disbursement/smallcrate/" + smallcrateId + "/delete/";
        });
    }
});