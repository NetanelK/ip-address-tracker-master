$(document).ready(function () {
    //     $("#button").click(function () {
    //         console.log($.trim($("#ip_search").val()))

    //         searchIP($.trim($("#ip_search").val()))
    //     })
    //     $.get(`https://geo.ipify.org/api/v1?apiKey=at_nB9Ch3A0bIOZRkaT8W9uouZLh83m2`, function (responseText) {
    //         updateSite({
    //             ip: responseText.ip,
    //             location: `${responseText.location.city}, ${responseText.location.country} ${responseText.location.postalCode}`,
    //             timezone: responseText.location.timezone,
    //             isp: responseText.isp,
    //             lat: responseText.location.lat,
    //             lng: responseText.location.lng
    //         })
    //     });
    var mymap = L.map('mapid').setView([51.505, -0.09], 13)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var icon = L.icon({
        iconUrl: './images/icon-location.svg',

        iconSize: [46, 56], // size of the icon
        // shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76]
    })

    var marker = L.marker([51.505, -0.09], { icon: icon }).addTo(mymap)

})

function searchIP(ip) {
    $.get(`https://geo.ipify.org/api/v1?apiKey=at_nB9Ch3A0bIOZRkaT8W9uouZLh83m2&ipAddress=${ip}`, function (responseText) {
        updateSite({
            ip: responseText.ip,
            location: `${responseText.location.city}, ${responseText.location.country} ${responseText.location.postalCode}`,
            timezone: responseText.location.timezone,
            isp: responseText.isp,
            lat: responseText.location.lat,
            lng: responseText.location.lng
        })
    });
}

function updateSite(data) {
    for (var name in data) {
        console.log(name, data[name])
        $(`#${name}`).text(data[name]);
    };
}
