const dataClass = new Data();
const links = dataClass.getLinks();

function loadLinks(){
    let linkDiv = $("#mainLinks");
    for(let i in links){
        let link = links[i];
        let linkBox = `
            <div class="linkBox flex justify-content-center align-items-end" onclick="activeLink('${link.name}')">
                <div>
                    <img class="linkImage" src="assets/images/links/${link.img}" alt="image">
                    <div class="linkTitle"> ${link.name} </div>
                </div>
            </div>
        `;
        linkDiv.append(linkBox);
    }
}

function activeLink(link){
    alert("Link para: "+link);
}