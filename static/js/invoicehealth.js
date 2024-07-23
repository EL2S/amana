document.addEventListener('DOMContentLoaded', function() {
    const registrationNumberSelect = document.getElementById('registration_number');
    const insuredSelect = document.getElementById('insured');
    const responsableInput = document.getElementById('responsable');
    const hiddenResponsableInput = document.getElementById('hidden_responsable');
    const addButton = document.getElementById('add_liste');
    const updateButton = document.getElementById('update_liste');
    const tableBody = document.querySelector('.invoice-table-body');
    const noInvoiceRow = document.querySelector('.no-invoice-row');
    const totalAmountField = document.getElementById('amount_tt');
    const hiddenTotalAmountField = document.getElementById('hidden_amount_tt');

    let editMode = false;
    let rowToEdit = null;

    function updateInsuredAndResponsable(registrationNumber) {
        fetch(`/get-insured-info/?registration_number=${encodeURIComponent(registrationNumber)}`, {
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

            data.insured.forEach(insured => {
                const option = document.createElement('option');
                option.value = insured.insured;
                option.textContent = insured.insured;
                insuredSelect.appendChild(option);
            });

            responsableInput.value = data.responsable;
            hiddenResponsableInput.value = data.responsable;
        })
        .catch(error => console.error('Error:', error));
    }

    function calculateTotalAmount() {
        let totalAmount = 0;
        const amountCells = tableBody.querySelectorAll('.amount-th');
        amountCells.forEach(cell => {
            totalAmount += parseFloat(cell.textContent) || 0;
        });
        totalAmountField.value = totalAmount;
        hiddenTotalAmountField.value = totalAmount;
    }

    function deleteRow(event) {
        const button = event.target.closest('.btn-danger');
        if (button) {
            const row = button.closest('tr');
            row.remove();
            calculateTotalAmount();
            if (tableBody.children.length === 1) {
                noInvoiceRow.style.display = '';
            }
        }
    }

    function editRow(event) {
        const button = event.target.closest('.btn-primary');
        if (button && button.querySelector('.bi-pencil')) {
            rowToEdit = button.closest('tr');
            document.getElementById('date').value = rowToEdit.cells[0].textContent;
            document.getElementById('agency').value = rowToEdit.cells[1].textContent;
            document.getElementById('provider').value = rowToEdit.cells[2].textContent;
            document.getElementById('insured').value = rowToEdit.cells[3].textContent;
            document.getElementById('month').value = rowToEdit.cells[4].textContent;
            document.getElementById('responsable').value = rowToEdit.cells[5].textContent;
            document.getElementById('invoice_number').value = rowToEdit.cells[6].textContent;
            document.getElementById('registration_number').value = rowToEdit.cells[7].textContent;
            document.getElementById('description').value = rowToEdit.cells[8].textContent;
            document.getElementById('amount_th').value = rowToEdit.cells[9].textContent;
            editMode = true;
            updateButton.disabled = false; // Enable the update button
            addButton.disabled = true;    // Disable the add button
        }
    }

    function addRow() {
        const date = document.getElementById('date').value;
        const agency = document.getElementById('agency').value;
        const provider = document.getElementById('provider').value;
        const insured = document.getElementById('insured').value;
        const month = document.getElementById('month').value;
        const responsable = document.getElementById('responsable').value;
        const invoiceNumber = document.getElementById('invoice_number').value;
        const registrationNumber = document.getElementById('registration_number').value;
        const description = document.getElementById('description').value;
        const amountTH = parseFloat(document.getElementById('amount_th').value);

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td style="font-size: 14px;">${date}</td>
            <td style="font-size: 14px;">${agency}</td>
            <td style="font-size: 14px;">${provider}</td>
            <td style="font-size: 14px;">${insured}</td>
            <td style="font-size: 14px;">${month}</td>
            <td style="font-size: 14px;">${responsable}</td>
            <td style="font-size: 14px;">${invoiceNumber}</td>
            <td style="font-size: 14px;">${registrationNumber}</td>
            <td style="font-size: 14px;">${description}</td>
            <td style="font-size: 14px;" class="amount-th">${amountTH}</td>
            <td style="font-size: 14px;">
                <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></button>
                <button type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
            </td>
        `;

        tableBody.appendChild(newRow);
        newRow.querySelector('.btn-danger').addEventListener('click', deleteRow);
        newRow.querySelector('.btn-primary').addEventListener('click', editRow);

        noInvoiceRow.style.display = 'none';
        calculateTotalAmount();

        // Clear form fields
        document.querySelectorAll('#provider, #month, #invoice_number, #description, #amount_th').forEach(input => input.value = '');
    }

    function updateRow() {
        if (editMode && rowToEdit) {
            const date = document.getElementById('date').value;
            const agency = document.getElementById('agency').value;
            const provider = document.getElementById('provider').value;
            const insured = document.getElementById('insured').value;
            const month = document.getElementById('month').value;
            const responsable = document.getElementById('responsable').value;
            const invoiceNumber = document.getElementById('invoice_number').value;
            const registrationNumber = document.getElementById('registration_number').value;
            const description = document.getElementById('description').value;
            const amountTH = parseFloat(document.getElementById('amount_th').value);

            rowToEdit.cells[0].textContent = date;
            rowToEdit.cells[1].textContent = agency;
            rowToEdit.cells[2].textContent = provider;
            rowToEdit.cells[3].textContent = insured;
            rowToEdit.cells[4].textContent = month;
            rowToEdit.cells[5].textContent = responsable;
            rowToEdit.cells[6].textContent = invoiceNumber;
            rowToEdit.cells[7].textContent = registrationNumber;
            rowToEdit.cells[8].textContent = description;
            rowToEdit.cells[9].textContent = amountTH;

            editMode = false;
            rowToEdit = null;
            updateButton.disabled = true; // Disable the update button after updating
            addButton.disabled = false;   // Enable the add button
        }

        calculateTotalAmount();

        // Clear form fields
        document.querySelectorAll('#provider, #month, #invoice_number, #description, #amount_th').forEach(input => input.value = '');
    }

    registrationNumberSelect.addEventListener('change', function() {
        const registrationNumber = registrationNumberSelect.value;
        updateInsuredAndResponsable(registrationNumber);
    });

    addButton.addEventListener('click', addRow);
    updateButton.addEventListener('click', updateRow);

    tableBody.addEventListener('click', function(event) {
        if (event.target.closest('.btn-danger')) {
            deleteRow(event);
        }
        if (event.target.closest('.btn-primary')) {
            editRow(event);
        }
    });

    updateInsuredAndResponsable(registrationNumberSelect.value);
});


document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('.invoice-table-body');
    const form = document.querySelector('form');
    const dataField = document.getElementById('data');

    form.addEventListener('submit', function(event) {
        const invoices = [];

        // Serialize table rows into JSON
        tableBody.querySelectorAll('tr').forEach(row => {
            if (!row.classList.contains('no-invoice-row')) {
                const invoice = {
                    date: row.cells[0].textContent.trim(),
                    agency: row.cells[1].textContent.trim(),
                    provider: row.cells[2].textContent.trim(),
                    insured: row.cells[3].textContent.trim(),
                    month: row.cells[4].textContent.trim(),
                    responsible: row.cells[5].textContent.trim(),
                    invoice_number: row.cells[6].textContent.trim(),
                    registration_number: row.cells[7].textContent.trim(),
                    description: row.cells[8].textContent.trim(),
                    amount_th: parseFloat(row.cells[9].textContent.trim())
                };
                invoices.push(invoice);
            }
        });

        // Set the JSON string in the hidden input field
        dataField.value = JSON.stringify(invoices);
    });
});
