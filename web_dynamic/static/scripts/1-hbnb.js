$(document).ready(function() {
    var amenities = {}; // dictionary for holding amenity IDs

    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
            // when the checkboxes are checked, store the amenity ID in the above dictionary
            amenities[amenityID] = amenityName;
        } else {
            // when the checkboxes ire unchecked, delete the amenity ID from the dictionary
            delete amenities[amenityID];
        }

        // updates the h4 tag inside the div "amenities" with the new list of amenities checked
        var amenitiesList = Object.values(amenities).join(', ');
        $('div.Amenities h4').text(amenitiesList);
    });
});
