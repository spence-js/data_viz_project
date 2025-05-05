// Create Reusable Header
const header = document.createElement('header')

header.innerHTML = `
    <div id="Header">
        <h1>Heart Attack Data Visualization</h1>
        <ul id="NavBar">
            <li>
                <a href="./index.html">Visualization</a>
            </li>
            <li>
                <a href="./docs.html">Documentation</a>
            </li>
            <li>
                <a href="https://www.kaggle.com/datasets/fatemehmohammadinia/heart-attack-dataset-tarik-a-rashid">Data Source</a>
            </li>
        </ul>
    </div>
`

document.body.appendChild(header)