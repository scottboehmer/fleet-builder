function togglePreviewFeatures() {
    function isPreviewEnabled() {
        try {
            var p = localStorage.getItem("preview-mode");
            if (p === "true") {
                return true;
            }
        } catch (ex) {
            console.log("Error accessing local storage.");
        }
        return false;
    }

    if (isPreviewEnabled()) {
        Array.from(document.getElementsByClassName("breach")).forEach(element => {
            element.classList.remove("hidden");
        });

        Array.from(document.getElementsByClassName("slots-preview")).forEach(element => {
            element.classList.add("slots");
        });

        Array.from(document.getElementsByClassName("shot-difficulty")).forEach(element => {
            element.classList.remove("hidden");
        });
    }
}

togglePreviewFeatures();