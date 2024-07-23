document.addEventListener('DOMContentLoaded', function() {
    var registrationNumberSelect = document.getElementById('registration_number');
    var insuredSelect = document.getElementById('insured');
    var responsableInput = document.getElementById('responsible');
    var hiddenResponsableInput = document.getElementById('hidden_responsible');

    var initialInsured = document.getElementById('initial_insured').value.trim();

    function updateInsuredAndResponsable(registrationNumber) {
        fetch('/get-insured-info/?registration_number=' + encodeURIComponent(registrationNumber), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': '{{ csrf_token }}'
            },
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(data => {
            insuredSelect.innerHTML = '';

            data.insured.forEach(function(insured) {
                var option = document.createElement('option');
                option.value = insured.insured;
                option.textContent = insured.insured;
                insuredSelect.appendChild(option);
            });

            if (initialInsured !== '') {
                var found = false;
                for (var i = 0; i < insuredSelect.options.length; i++) {
                    if (insuredSelect.options[i].value === initialInsured) {
                        insuredSelect.value = initialInsured;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    var option = document.createElement('option');
                    option.value = initialInsured;
                    option.textContent = initialInsured;
                    insuredSelect.appendChild(option);
                    insuredSelect.value = initialInsured;
                }
            }

            responsableInput.value = data.responsable;
            hiddenResponsableInput.value = data.responsable;
        })
        .catch(error => console.error('Error:', error));
    }

    var initialRegistrationNumber = registrationNumberSelect.value;
    updateInsuredAndResponsable(initialRegistrationNumber);

    registrationNumberSelect.addEventListener('change', function() {
        var registrationNumber = registrationNumberSelect.value;
        updateInsuredAndResponsable(registrationNumber);
    });
});
