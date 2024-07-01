document.addEventListener('DOMContentLoaded', function () {
    const profesorDropdown = document.getElementById('profesorDropdown');
    const displayButton = document.getElementById('displayButton');

    // Add event listener to the profesor dropdown
    profesorDropdown.addEventListener('change', function () {
        if (this.value) {
            displayButton.style.display = 'block'; // Show the display button
        } else {
            displayButton.style.display = 'none'; // Hide the display button if no professor is selected
        }
    });

    // Add event listener to the display button
    displayButton.addEventListener('click', function () {
        const profesor = profesorDropdown.value.trim().replace(/\s+/g, '');

        if (!profesor) {
            alert("Please make sure a selection is made.");
            return;
        }

        const fileName = `${profesor}.pdf`; // Assuming timetable is in PDF format
        const filePath = `orar profesori/${fileName}`; // Path to the timetable PDF

        console.log("Generated File Path:", filePath); // Clarifies if the file path was generated correctly

        // Open the PDF in a new tab
        window.open(filePath, '_blank');
    });
});
