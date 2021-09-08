const programs = document.querySelector("#program-div");

let programHtml = '';
programInfo.forEach(element => {
    programHtml += ` 
    <div class="container session-box col-10 col-md-2">
    <div class="row align-items-center session-content">
    <div class="imgdiv col-2 col-md-12">
    <img src="${element.icon}" alt="${element.session}">
    </div>
    <div class="session col-2 col-md-12">
    <p>${element.session}</p>
    </div>
    <div class="activity col-8 col-md-12">
    <p>${element.activity}</p>
    </div>
    </div>
    </div>
    `
});

programs.innerHTML = programHtml;