$(document).ready(function() {
    let listAmenities = [];

    $('input').change(function() {
        const amenityName = $(this).attr("data-name");

        this.checked ? listAmenities.push(amenityName) : listAmenities = listAmenities.filter(item => item !== amenityName);

        $('div.amenities h4').text(listAmenities.join(', '));
    });
});