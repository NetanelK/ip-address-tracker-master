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
    var map = L.map('mapid').setView([51.505, -0.09], 2)

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
