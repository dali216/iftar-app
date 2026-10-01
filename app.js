let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();

    deferredPrompt = event;

    document.getElementById("installBtn").style.display = "block";
});

async function installApp() {
    if (!deferredPrompt) {
        alert(
            "Sur iPhone : Safari → Partager → Ajouter à l’écran d’accueil"
        );
        return;
    }

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

    document.getElementById("installBtn").style.display = "none";
}

function startApp() {
    alert("Application prête 🚀");
}


// Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker actif"))
            .catch(error => console.error(error));
    });
}