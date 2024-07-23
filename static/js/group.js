var moveRightIcon = document.getElementById('move_right');
var moveLeftIcon = document.getElementById('move_left');
var sourceSelect = document.getElementById('aut_ch');
var destinationSelect = document.getElementById('aut_rem');
var addButton = document.getElementById('add');
if (sourceSelect) {
    sourceSelect.addEventListener('change', function () {
        if (sourceSelect.selectedOptions.length > 0) {
            moveRightIcon.style.backgroundColor = 'black';
        } else {
            moveRightIcon.style.backgroundColor = '#4A4A4A';
        }
    });
}
if (destinationSelect) {
    destinationSelect.addEventListener('change', function () {
        if (destinationSelect.selectedOptions.length > 0) {
            moveLeftIcon.style.backgroundColor = 'black';
        } else {
            moveLeftIcon.style.backgroundColor = '#4A4A4A';
        }
    });
}
if (moveRightIcon) {
    moveRightIcon.addEventListener('click', function () {
        var selectedOptions = Array.from(sourceSelect.selectedOptions);
        selectedOptions.forEach(function (option) {
            destinationSelect.appendChild(option);
            option.selected = false; 
        });
        moveRightIcon.style.backgroundColor = '#AFAFAF';
    });
}
if (moveLeftIcon) {
    moveLeftIcon.addEventListener('click', function () {
        var selectedOptions = Array.from(destinationSelect.selectedOptions);
        selectedOptions.forEach(function (option) {
            sourceSelect.appendChild(option);
            option.selected = false; 
        });
        moveLeftIcon.style.backgroundColor = '#AFAFAF';
    });
}
if (addButton) {
    addButton.addEventListener('click', function () {
        Array.from(destinationSelect.options).forEach(function (option) {
            option.selected = true;
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var deleteGroupLinks = document.querySelectorAll(".delete");
    if (deleteGroupLinks) {
        deleteGroupLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var groupId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", groupId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var groupId = this.getAttribute("data-id");
            window.location.href = "/group/" + groupId + "/delete/";
        });
    }
});