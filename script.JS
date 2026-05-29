let userinput = document.getElementById('searchInput')
let containerelement = document.getElementById('searchResults')


function createappendresult(htmlitems) {
    let {
        description,
        link,
        title
    } = htmlitems

    let bgcontainer = document.createElement('div');
    bgcontainer.classList.add('result-item')
    containerelement.appendChild(bgcontainer)

    //anchor
    let anchorElement = document.createElement('a');
    anchorElement.classList.add('result-title');
    anchorElement.href = link
    anchorElement.target = ('_blank')
    anchorElement.textContent = title
    bgcontainer.appendChild(anchorElement)


    //breakelement

    let breakelement = document.createElement('br')
    bgcontainer.appendChild(breakelement)

    //anchor

    let anchor1 = document.createElement('a')
    anchor1.classList.add('result-url')
    anchor1.href = link
    anchor1.target = ('_blank')
    anchor1.textContent = link
    bgcontainer.appendChild(anchor1)

    //break
    let breakelement1 = document.createElement('br')
    bgcontainer.appendChild(breakelement1)

    //pearagraph

    let paraElement = document.createElement('p');
    paraElement.classList.add('link-description')
    paraElement.textContent = description
    bgcontainer.appendChild(paraElement)





}



function diaplayresults(results) {
    for (let saperate of results) {
        createappendresult(saperate)

    }


}



function dispalyuserinput(event) {
    if (event.key === 'Enter') {
        userinput.textContent = ''
        containerelement.textContent = ''

        let typeinput = userinput.value;
        let option = {
            method: 'GET'
        }
        let url = 'https://apis.ccbp.in/wiki-search?search=' + typeinput
        fetch(url, option)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata
                diaplayresults(search_results)

            })
    }
}

userinput.addEventListener('keydown', dispalyuserinput)