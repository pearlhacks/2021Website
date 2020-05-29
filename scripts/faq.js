function buildHTMLString(data, target) {
    let html = "<div class='row'>";
    let col1 = "<div class='col-12 col-lg-6'>";
    let col2 = "<div class='col-12 col-lg-6'>";
    data.forEach((question, i) => {
        if (i < data.length / 2) {
            col1 += `
            <btn class='collapse-wrapper'>
                <h3 class='mt-lg-2 font-weight-bold collapser collapsed' data-toggle="collapse" aria-expanded="false" data-target="#${target}${i}">${question['Question']}</h3>
                <div class="collapse" id="${target}${i}">${question['Answer']}</div>
            </btn>`
        }

        else {
            col2 += `
            <btn class='collapse-wrapper'>
                <h3 class='mt-lg-2 font-weight-bold collapser collapsed' data-toggle="collapse" aria-expanded="false" data-target="#${target}${i}">${question['Question']}</h3>
                <div class="collapse" id="${target}${i}">${question['Answer']}</div>
            </btn>`
        }
    });
    col1 += "</div>"
    col2 += "</div>"
    html += col1 + col2 + "</div>"

    return html;
}

$(document).ready(function () {
    // Beginner FAQ
    fetchData('1BGIwq8YTtXVaFZjRDPbZcZNe06KYFepPu3CG1lvyVpM', '1').then((data) => {
        document.getElementById("beginnerfaq").innerHTML = buildHTMLString(data, "beginnersfaq")
    });

     // General FAQ
     fetchData('1BGIwq8YTtXVaFZjRDPbZcZNe06KYFepPu3CG1lvyVpM', '2').then((data) => {
        document.getElementById("generalfaq").innerHTML = buildHTMLString(data, "generalfaq")
    });

     // Guidelines
     fetchData('1BGIwq8YTtXVaFZjRDPbZcZNe06KYFepPu3CG1lvyVpM', '3').then((data) => {
        document.getElementById("guidelines").innerHTML = buildHTMLString(data, "guidelines")
    });
});