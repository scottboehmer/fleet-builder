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
        // Enable any features currently limited to preview mode
    }
}

togglePreviewFeatures();