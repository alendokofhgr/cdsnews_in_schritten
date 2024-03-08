import { supa } from "./supabase.js";


document.addEventListener('DOMContentLoaded', (event) => {
    console.log("scriptIndex.js loaded");
    
    updateUserStatus(supa.auth.user());

    // Listen for authentication state changes
    supa.auth.onAuthStateChange((event, session) => {
        updateUserStatus(supa.auth.user());
    });
});

function updateUserStatus(user) {
    if (user) {
        addInnerHTMLWhenLoggedIn();
    } else {
        addInnerHTMLWhenLoggedOut();
    }
}

function addInnerHTMLWhenLoggedIn() {
    let loginButtonContainer=document.getElementById('login_button_container');

    loginButtonContainer.innerHTML = `
        <a id="logoutLink" href="#">
            <img src="img/benutzerbildGruen.svg" width="45px" height="45px" id="user_icon">
            <div id="logout_button" style="font-size:10px">Abmelden</div>
        </a>`

    document.getElementById('logoutLink').addEventListener('click', logout);

    //Hidden News Article, Schritt 11
    let firstNewsArticle = document.getElementById('erster_artikel');
    firstNewsArticle.innerHTML = `<a class="mini_marker" href="single.html">Lernen</a>
    <h2><a class="marker" href="single.html">Interne Weiterbildung: Flipchart-Training</a></h2>`
}

function addInnerHTMLWhenLoggedOut() {
    let loginButtonContainer=document.getElementById('login_button_container');

    loginButtonContainer.innerHTML = `
        <a href="login.html">
            <img src="img/benutzerbildRot.svg" width="45px" height="45px" id="user_icon">
            <div id="login_button" style="font-size:10px">Anmelden</div>
        </a>`

    //Hidden News Article, Schritt 11
    let firstNewsArticle = document.getElementById('erster_artikel');
    firstNewsArticle.innerHTML = `
    <h2><a class="marker" href="#">Premium Artikel. Bitte zuerst anmelden!</a></h2>`
}


async function logout() {
    const { error } = await supa.auth.signOut();
    if (error) {
        console.error("Error during logout:", error);
    } else {
        updateUserStatus(null);
        console.log("User logged out successfully.");
    }
}
