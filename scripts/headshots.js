function buildHTMLString(data) {
    let html = "<div class='d-flex flex-wrap justify-content-center'>";
    data.forEach((director) => {
        html += 
        `<div class='text-center'>
            <div style="background: url('${director['Headshot URL']}');" class='headshot rounded-circle m-3'>
            </div>
            <h3 class='m-0'>
            ${director['Name']}
            </h3>
            ${director['Title']}
        </div>`;
    });
    html += "</div>"

    return html;
}

$(document).ready(function () {
    // Director Info
    fetchData('17j3aAtsRJnVuc1V-LDJRF_HLASZNO-J1gPudoXgmbWU', '1').then((data) => {
        document.getElementById("directorinfo").innerHTML = buildHTMLString(data)
    });
});