function convertToEST(row) {
    row["Start Time"] = moment.tz(row["Start Time"], "America/New_York");
    row["End Time"] = moment.tz(row["End Time"], "America/New_York");

    return row;
}

function isHappeningNow(event) {
    let currentTime = moment.tz("America/New_York");
    let result = currentTime.isBetween(event["Start Time"], event["End Time"]);
    return result;
}

function buildHapeningNow(events) {
    let html = "<div class='table rounded'>"
    html += `<div class='rounded-top row mx-0 text-center font-weight-bold th py-2'>
                <div class='col-12 text-white'>  
                    Happening Now
                </div>
            </div>`;
    
    events.forEach((event) => {
        let row = "<div class='row mx-0 text-center py-2'>";
        row += `
        <div class='col-6 font-weight-bold'>
            ${event['Start Time'].format("h:mma")} - ${event['End Time'].format("h:mma z")}
        </div>
        <div class='col-6'>
            ${event['Event']}
        </div>`;
        row += "</div>";
        html += row;
    });

    return html + "</div>";
}

$(document).ready(function () {
    fetchData('1Dgw8Iu_UupbrTwnYgy-MAAeHTHQgcgYhgHa93wQk2M4', '1').then((data) => {
        data = data.filter(item => item != null).map(row => convertToEST(row));
        
        // Update the table every 1 second
        let interval = setInterval(function () {
            let events = data.filter(event => isHappeningNow(event));
            if (events.length > 0) {
                document.getElementById("happeningNow").innerHTML = buildHapeningNow(events);
            }
        }, 1000);
    }).catch((error) => {
        console.log(error);
    })
});
