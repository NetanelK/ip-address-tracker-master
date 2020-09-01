var mymap = null, icon = null


$(document).ready(function () {
    // var mymap = L.map('mapid', {
    //     center: [51.505, -0.09],
    //     zoom: 13,
    //     zoomControl: false
    // });
    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(mymap);
    $("#button").click(function () {
        console.log($.trim($("#ip_search").val()))

        searchIP($.trim($("#ip_search").val()))
    })
    $.get(`https://geo.ipify.org/api/v1?apiKey=at_nB9Ch3A0bIOZRkaT8W9uouZLh83m2`, function (responseText) {
        // mymap.remove()

        mymap = L.map('mapid'), {
            center: [responseText.location.lat, responseText.location.lng],
            zoom: 13,
            zoomControl: false
        }
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
        icon = L.icon({
            iconUrl: './images/icon-location.svg',

            iconSize: [46, 56], // size of the icon
            // shadowSize: [50, 64], // size of the shadow
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor: [-3, -76]
        })
        var marker = L.marker([responseText.location.lat, responseText.location.lng], { icon: icon }).addTo(mymap)

        updateSite({
            ip: responseText.ip,
            location: `${responseText.location.city}, ${responseText.location.country} ${responseText.location.postalCode}`,
            timezone: `UTC ${responseText.location.timezone}`,
            isp: responseText.isp
        }, {
            lat: responseText.location.lat,
            lng: responseText.location.lng
        })
    });
})

function searchIP(ip) {
    $.get(`https://geo.ipify.org/api/v1?apiKey=at_nB9Ch3A0bIOZRkaT8W9uouZLh83m2&ipAddress=${ip}`, function (responseText) {
        // mymap.remove()
        updateSite({
            ip: responseText.ip,
            location: `${responseText.location.city}, ${responseText.location.country} ${responseText.location.postalCode}`,
            timezone: `UTC ${responseText.location.timezone}`,
            isp: responseText.isp
        }, {
            lat: responseText.location.lat,
            lng: responseText.location.lng
        })
    });
}

function updateSite(data, location) {
    for (var name in data) {
        console.log(name, data[name])
        $(`#${name}`).text(data[name]);

    };

    mymap.remove()
    mymap = L.map('mapid', {
        center: [location.lat, location.lng],
        zoom: 13,
        zoomControl: false
    })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var marker = L.marker([location.lat, location.lng], { icon: icon }).addTo(mymap)
}
