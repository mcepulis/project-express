import { header } from "../components/header.js";

function externalWeb() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="2;url=https://www.w3schools.com/" />
            <title>Jėga</title>
        </head>
        <body>
            ${header()}
            <main>
            <h1>
            <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
            </h1>
            </main>
        </body>
        </html>`;
}

export { externalWeb }