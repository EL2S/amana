document.addEventListener("DOMContentLoaded", function () {
    var deletSubscribersLinks = document.querySelectorAll(".delete");
    if (deletSubscribersLinks) {
        deletSubscribersLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var subscribersId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", subscribersId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var subscribersId = this.getAttribute("data-id");
            window.location.href = "/mediaplussubscribers/" + subscribersId + "/delete/";
        });
    }
});