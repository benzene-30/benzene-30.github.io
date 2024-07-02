document.addEventListener('DOMContentLoaded', function () {
    const facultyDropdown = document.getElementById('facultyDropdown');
    const specializationsDiv = document.getElementById('specializations');
    const specializations = document.querySelectorAll('.faculty-specialization');
    const yearDiv = document.getElementById('year');
    const yearDropdown = document.getElementById('yearDropdown');
    const groupDiv = document.getElementById('group');
    const groupDropdown = document.getElementById('groupDropdown');
    const displayButton = document.getElementById('displayButton');

    facultyDropdown.addEventListener('change', function () {
        const selectedValue = this.value;

        // Hide all specialization dropdowns
        specializations.forEach(function (specialization) {
            specialization.style.display = 'none';
        });

        // Reset year and group dropdowns
        yearDropdown.selectedIndex = 0;
        groupDropdown.selectedIndex = 0;
        yearDiv.style.display = 'none';
        groupDiv.style.display = 'none';
        displayButton.style.display = 'none';

        // Show the selected specialization dropdown
        if (selectedValue) {
            const selectedSpecialization = document.getElementById(selectedValue);
            if (selectedSpecialization) {
                selectedSpecialization.style.display = 'block';
            }
        }
    });

    specializationsDiv.addEventListener('change', function (event) {
        if (event.target.classList.contains('faculty-specialization')) {
            const selectedSpecialization = event.target.value;

            // Show year dropdown only if a specialization is selected
            if (selectedSpecialization && selectedSpecialization !== '---Selectați o specializare---') {
                yearDiv.style.display = 'block';
            } else {
                yearDiv.style.display = 'none';
                groupDiv.style.display = 'none';
            }

            // Reset group dropdown
            groupDropdown.selectedIndex = 0;
        }
    });

    yearDropdown.addEventListener('change', function () {
        const selectedValue = this.value;

        // Show or hide group dropdown based on year selection
        if (selectedValue) {
            groupDiv.style.display = 'block';
            displayButton.style.display = 'none';
        } else {
            groupDiv.style.display = 'none';
            displayButton.style.display = 'none';
        }

        // Reset group dropdown
        groupDropdown.selectedIndex = 0;
    });

    groupDropdown.addEventListener('change', function () {
        if (this.value) {
            displayButton.style.display = 'block'; // Show the display button
        } else {
            displayButton.style.display = 'none'; // Hide the display button if no group is selected
        }
    });

    displayButton.addEventListener('click', function () {
        const faculty = facultyDropdown.value.trim().replace(/\s+/g, '');
        const selectedSpecializationDropdown = document.querySelector('.faculty-specialization:not([style*="display: none"])');
        const specialization = selectedSpecializationDropdown ? selectedSpecializationDropdown.options[selectedSpecializationDropdown.selectedIndex].text.trim().replace(/\s+/g, '') : '';
        const year = yearDropdown.options[yearDropdown.selectedIndex].text.trim().replace(/\s+/g, '');
        const group = groupDropdown.options[groupDropdown.selectedIndex].text.trim().replace(/\s+/g, '');

        if (!faculty || !specialization || !year || !group) {
            alert("Please make sure all selections are made.");
            return;
        }

        const fileName = `${faculty}_${specialization}_${year}_${group}.pdf`; // Assuming timetable is in PDF format
        const filePath = `orar studenți/${faculty}/${specialization}/${year}/${fileName}`; // Path to the timetable PDF

        console.log("Generated File Path:", filePath); // Clarifies if the file path was generated correctly

        // Open the PDF in a new tab
        window.open(filePath, '_blank');
    });
});
