
document.getElementById('parkingEntryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const plateNumber = document.getElementById('plateNumber').value;
    const category = document.getElementById('category').value;
    const rateCode = document.getElementById('rateCode').value;
    const rate = document.getElementById('rate').value;
    const checkinTime = document.getElementById('checkinTime').value;
    const checkoutTime = document.getElementById('checkoutTime').value;
    const totalHours = document.getElementById('totalHours').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const paidStatus = document.getElementById('paidStatus').value;
    const paymentMode = document.getElementById('paymentMode').value;


    // Construct the data object
    const data = {
        plateNumber: plateNumber,
        category: category,
        rateCode: rateCode,
        rate: rate,
        checkinTime: checkinTime,
        checkoutTime: checkoutTime,
        totalHours: totalHours,
        totalAmount: totalAmount,
        paidStatus: paidStatus,
        paymentMode: paymentMode,
        // Add other fields here
    };

    // Make a POST request using the Fetch API
    fetch('http://localhost:3000/api/vehicles/parkingEntries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Handle success response here
        })
        .catch(error => {
            console.error('Error:', error);
         
        });
});
