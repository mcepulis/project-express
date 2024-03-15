import { PageTemplate } from '../lib/PageTemplate.js';

class testWWW extends PageTemplate {
    constructor() {
    super();
    this.name = 'Greetings Name Test'
    }

    main() {
        return `
        <div class="container">
            <h1>${this.name}</h1>
            <p id="resultParagraph"></p>
            <form action="" id="loginForm">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" value=""><br>
                <input type="submit" value="Submit">
            </form>
        </div>
        <script>
            document.getElementById("loginForm").addEventListener("submit", (e) => {
                e.preventDefault();
                let name = document.getElementById("fname").value;
                document.getElementById("resultParagraph").textContent = TestFunction(name);
                document.getElementById("fname").value = "";
            });

            function TestFunction(name) {
                let wordArr = ["a", "ė", "as", "ius", "is", "jus"];
                let greetArr = ["a", "e", "ai", "iau", "i", "jau"];
                let resultName = "";
                 for (let i = 0; i < wordArr.length; i++) {
                        if (name.endsWith(wordArr[i])) {
                            resultName = name.slice(0, -wordArr[i].length) + greetArr[i];
                            break;
                         } else {
                                resultName = name;
                            }
                        
            }
            return "Sveiki " + resultName[0].toUpperCase() + resultName.slice(1);
        }
        </script>`;
        
    }
}

export { testWWW };