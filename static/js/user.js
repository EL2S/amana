var moveRightIcon = document.getElementById('move_right');
var moveLeftIcon = document.getElementById('move_left');
var sourceSelect = document.getElementById('aut_ch');
var destinationSelect = document.getElementById('aut_rem');
var groupSelect = document.getElementById('group_ch');
var groupmoveRightIcon = document.getElementById('group_move_right');
var groupmoveLeftIcon = document.getElementById('group_move_left');
var groupdestinationSelect = document.getElementById('group_rem');
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
if (groupSelect) {
    groupSelect.addEventListener('change', function () {
        if (groupSelect.selectedOptions.length > 0) {
            groupmoveRightIcon.style.backgroundColor = 'black';
        } else {
            groupmoveRightIcon.style.backgroundColor = '#4A4A4A';
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
if (groupdestinationSelect) {
    groupdestinationSelect.addEventListener('change', function () {
        if (groupdestinationSelect.selectedOptions.length > 0) {
            groupmoveLeftIcon.style.backgroundColor = 'black';
        } else {
            groupmoveLeftIcon.style.backgroundColor = '#4A4A4A';
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
if (groupmoveRightIcon) {
    groupmoveRightIcon.addEventListener('click', function () {
        var selectedOptions = Array.from(groupSelect.selectedOptions);
        selectedOptions.forEach(function (option) {
            groupdestinationSelect.appendChild(option);
            option.selected = false; 
        });
        groupmoveRightIcon.style.backgroundColor = '#AFAFAF';
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
if (groupmoveLeftIcon) {
    groupmoveLeftIcon.addEventListener('click', function () {
        var selectedOptions = Array.from(groupdestinationSelect.selectedOptions);
        selectedOptions.forEach(function (option) {
            groupSelect.appendChild(option);
            option.selected = false; 
        });
        groupmoveLeftIcon.style.backgroundColor = '#AFAFAF';
    });
}
if (addButton) {
    addButton.addEventListener('click', function () {
        Array.from(destinationSelect.options).forEach(function (option) {
            option.selected = true;
        });
        Array.from(groupdestinationSelect.options).forEach(function (option) {
            option.selected = true;
        });
    });
}
var shop = document.getElementById('shop');
if(shop){
    shop.addEventListener('change', function() {
        const shopId = this.value;
        if (shopId) {
            fetch(`/get-shop-name/${shopId}/`)
                .then(response => response.json())
                .then(data => {
                    if (data.shop_name) {
                        document.querySelector('.shop_name').style.display = 'flex';
                        document.getElementById('shop_name').value = data.shop_name;
                    }
                })
                .catch(error => console.error('Error fetching shop name:', error));
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var deleteUserLinks = document.querySelectorAll(".delete");
    if (deleteUserLinks) {
        deleteUserLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                var userId = this.getAttribute("data-id");
                document.getElementById("btnDelete").setAttribute("data-id", userId);
                $('#deleteModal').modal('show');
            });
        });

        document.getElementById("btnDelete").addEventListener("click", function () {
            var userId = this.getAttribute("data-id");
            window.location.href = "/user/" + userId + "/delete/";
        });
    }
});