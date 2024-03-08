import { supa } from "./supabase.js";

document.addEventListener('DOMContentLoaded', (event) => {
    // Event listeners for the buttons
    document.getElementById('loginButton').addEventListener('click', login);
    document.getElementById('signupButton').addEventListener('click', signUp);
});

// Function to login using email and password
async function login() {
    const email = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    const { error } = await supa.auth.signIn({ email, password });

    const userStatusElement = document.getElementById('resultLogin');

    if (error) {
        console.error("Error during login: ", error.message);
        userStatusElement.innerHTML = `Fehler beim Anmelden: ${error.message}`;
    } else {
        console.log("Logged in as ", email);
        userStatusElement.innerHTML = `Sie sind nun angemelded als: ${supa.auth.user().email}. <a href="index.html">Zurück zur Startseite</a>`;
    }
}

// Function to sign up using email and password
async function signUp() {
    const email = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    const { error } = await supa.auth.signUp({ email, password });

    const userStatusElement = document.getElementById('resultLogin');

    if (error) {
        console.error("Error during sign up: ", error.message);
        userStatusElement.innerHTML = `Fehler beim Registrieren: ${error.message}`;
    } else {
        console.log("Signed up as ", email);
        userStatusElement.innerHTML = `Bitte bestätigen sie ihre E-Mail Adresse.`;
    }
}