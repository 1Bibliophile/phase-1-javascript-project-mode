const BASE_URL = `https://api.artic.edu/api/v1/artworks`

// Fetches Data
function fetchArt()
{
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data =>
    {
        data.data.painters.forEach(renderArt)
    })

    // Renders a single artwork to the page
    function renderArt(paint)
    {
        const artContainer = document.getElementById("painter-list")
        const liTag = document.createElement('li')

        const aTag = document.createElement('a')
        aTag.href = '#'
        aTag.innerText = paint.name

        aTag.addEventListener("click", () =>
        {
            artContainer.innerHTML = ""
            const imageTag = document.createElement('img')
            imageTag.src = paint.url

            const allArtButton = document.createElement('button')
            allArtButton.innerText = "All Paintings"

            allArtButton.addEventListener("click", () =>
            {
                artContainer.innerHTML = ''
                fetchArt()
            })
        })

        artContainer.append(allArtButton, imageTag)

        
         

        const pTag = document.createElement('p')
        pTag.innerText = paint.name
    }

    liTag.appendChild(aTag)

    artContainer.appendChild(liTag)


}

