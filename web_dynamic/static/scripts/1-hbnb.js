$(document).ready(function() {
    const amenities = [] // list for holding amenity IDs

    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
            // when the checkboxes are checked, store the amenity ID in the above dictionary
            const amenity_name = $(this).attr("data-name");
        } else {
            // when the checkboxes are unchecked, delete the amenity ID from the dictionary
            delete amenities[amenity_name];
        }

        // updates the h4 tag inside the div "amenities" 
        //with the new list of amenities that are checked
        amenities = Object.values(amenities).join(', ');
        $('div.amenities h4').text(amenities);
    });
});