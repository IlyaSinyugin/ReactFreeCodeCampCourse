// import React from "react";
// import ReactDOM from "react-dom";



function TestComponent() {
    return(
        <div>
        <header>
                <nav>
                    <img src="react-logo.png" width="50px"></img>
                </nav>
            </header>

            <h1>
                Reasong Why I wanna learn React
            </h1>
            <ol>
                <li>It's awesome</li>
                <li>Great foundation for Frontend</li>
                <li>Vanilla JS can get overwhelming and frameworks make js easier</li>
            </ol>
            <footer>
            <small>© 2022 Sinyugin development. All rights reserved.</small>
            </footer>
            <h2>
                Testing the footer and h2 together
            </h2>
            <footer>
                another footer
            </footer>
        </div>
    )
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))

