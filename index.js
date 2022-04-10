// import React from "react";
// import ReactDOM from "react-dom";

function Header() {
    return(
        <header>
            <nav>
                <img src="react-logo.png" width="50px"></img>
            </nav>
        </header>
    )

}

function Footer() {
    return(
        <footer>
            <small>© 2022 Sinyugin development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return(
        <div>
            <h1>
                Reason Why I wanna learn React
            </h1>
            <ol>
                <li>It's awesome</li>
                <li>Great foundation for Frontend</li>
                <li>Vanilla JS can get overwhelming and frameworks make js easier</li>
            </ol>
        </div>
    )
}

function Page() {
    return(
        <div>
        <Header />
        <MainContent />
        <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))

