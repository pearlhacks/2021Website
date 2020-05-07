function buildHTMLString(data, header) {
    let html = "<div class='table mt-4'>";
    html += `<div class='row text-center font-weight-bold th text-light py-2 text-uppercase'>
                <div class='col-12'>  
                    ${header}
                </div>
            </div>`;
    data.forEach((event) => {
        let row = "<div class='row text-center py-2'>";
        row += `
        <div class='col-3 font-weight-bold'>
            ${event['Time']}
        </div>
        <div class='col-6'>
            ${event['Event']}
        </div>
        <div class='col-3'>
            ${event['Location']}
        </div>`;
        row += "</div>";
        html += row;
    });
    
    return html + "</div>";
}

$(document).ready(function () {
    // Friday
    let schedule = "";
    fetchData('1Dgw8Iu_UupbrTwnYgy-MAAeHTHQgcgYhgHa93wQk2M4', '1').then((data) => {
        schedule += buildHTMLString(data, "Friday");
        // Saturday
        fetchData('1Dgw8Iu_UupbrTwnYgy-MAAeHTHQgcgYhgHa93wQk2M4', '2').then((data) => {
            schedule += buildHTMLString(data, "Saturday");
            // Sunday
            fetchData('1Dgw8Iu_UupbrTwnYgy-MAAeHTHQgcgYhgHa93wQk2M4', '3').then((data) => {
                schedule += buildHTMLString(data, "Sunday");
                document.getElementById("schedule").innerHTML = schedule;
            });
        });
    });
    

});