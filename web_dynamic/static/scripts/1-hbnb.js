$(document).ready(function() {
    // Initialize an empty array to store the selected amenities
    let listAmenities = [];

    // Attach a change event listener to all input elements
    $('input').change(function() {
        // Get the value of the data-name attribute of the changed input element
        const amenityName = $(this).attr("data-name");

        // If the input element is checked, add the amenityName to the listAmenities array
        // Otherwise, remove the amenityName from the listAmenities array
        this.checked ? listAmenities.push(amenityName) : listAmenities = listAmenities.filter(item => item !== amenityName);

        // Update the text of the h4 element inside the div with class "amenities" to display the selected amenities separated by commas
        $('div.amenities h4').text(listAmenities.join(', '));
    });
});