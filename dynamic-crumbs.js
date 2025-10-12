function overrideCrumbs()
{
    const override = window.location.hash;
    if (override) {
        let crumbs = document.getElementById("crumbs-links");
        
        let links = [];
        crumbs.childNodes.forEach((child) => {
            if (child.href) {
                links.push({link: child.href, contents: child.innerHTML});
            }
        });

        let nav = document.getElementById("nav-menu");
        let depth = nav.dataset.depth;
        let prefix = "";
        if (depth) {
            for (let i = 0; i < Number(depth); i++) {
                prefix = "../" + prefix;
            }
        }

        let selfLink = document.createElement("a");
        selfLink.innerHTML = links[links.length - 1].contents;
        selfLink.href = links[links.length - 1].link;

        switch (override) {
            case "#builder":
                // Only override crumbs to link back to builder in app mode
                if (window.matchMedia('(display-mode: minimal-ui)').matches) {
                    crumbs.innerHTML = '';
                    let builderLink = document.createElement("a");
                    builderLink.innerText = "Fleet Builder";
                    builderLink.href = `${prefix}index.htm`;
                    crumbs.append(builderLink);
                    crumbs.append(" • ");
                    crumbs.append(selfLink);
                }
                break;
            case "#american":
            case "#austro-hungarian":
            case "#british":
            case "#french":
            case "#german":
            case "#italian":
            case "#japanese":
            case "#russian":
            case "#scandinavian":
            case "#swiss":
                crumbs.innerHTML = '';
                let catalogLink = document.createElement("a");
                catalogLink.innerText = "Catalog";
                catalogLink.href = `${prefix}catalog.htm`;
                crumbs.append(catalogLink);
                crumbs.append(" • ");
                let factionLink = document.createElement("a");
                switch (override) {
                    case "#american": factionLink.innerText = "United States of America"; break;
                    case "#austro-hungarian": factionLink.innerText = "Austro-Hungarian Empire"; break;
                    case "#british": factionLink.innerText = "British Empire"; break;
                    case "#french": factionLink.innerText = "French Republic"; break;
                    case "#german": factionLink.innerText = "German Empire"; break;
                    case "#italian": factionLink.innerText = "Kingdom of Italy"; break;
                    case "#japanese": factionLink.innerText = "Japanese Empire"; break;
                    case "#russian": factionLink.innerText = "Russian Empire"; break;
                    case "#scandinavian": factionLink.innerText = "Scandinavian Union"; break;
                    case "#swiss": factionLink.innerText = "Swiss Mercenaries"; break;
                }
                factionLink.href = `${prefix}factions/${override.substring(1)}.htm`;
                crumbs.append(factionLink);
                crumbs.append(" • ");
                crumbs.append(selfLink);
                break;
            default:
                break;
        }
    }
}

overrideCrumbs();