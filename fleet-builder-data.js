function sortByPointsAndName(components) {
    return components.sort((a,b) => a.points == b.points ? a.name.localeCompare(b.name) : b.points - a.points);
}

function planeCard(name, points, sources, link) {
    return { name: name, type: "airplane", faction: "any", points: points, sources: sources, link: link };
}

function getPlaneData() {
    return planeData;
}

function alGunCard(name, points, sources, link) {
    return { name: name, type: "al-gun", faction: "any", points: points, sources: sources, link: link };
}

function getALGunData() {
    return alGunData;
}

function admiralCard(name, points, faction, sources, link) {
    return { name: name, type: "admiral", faction: (faction ? faction : "any"), points: points, sources: sources, link: link };
}

function getAdmiralData() {
    return admiralData;
}

function captainCard(name, points, faction, shipClass, sources, link) {
    return { name: name, type: "captain", faction: faction, shipClass: shipClass, points: points, sources: sources, link: link };
}

function getCaptainData() {
    return captainData;
}

function leviathanCard(name, shipClass, shipType, faction, generic, points, sources, link) {
    return { name: name, type: "leviathan", shipClass: shipClass, shipType: shipType, faction: faction, generic: generic , points: points, sources: sources, link: link };
}

function getLeviathanData() {
    return levData;
}

const levData = sortByPointsAndName([
    leviathanCard("Kamchatka", "Vladivostok", 4, "russian", false , 440, ["Vladivostok Battleship Pack"], "elements/1.htm"),
    leviathanCard("Siberia", "Vladivostok", 4, "russian", false , 430, ["Vladivostok Battleship Pack"], "elements/2.htm"),
    leviathanCard("Aleksandr III", "Aleksandr", 4, "russian", false , 420, ["Russian Fleet Box"], "elements/3.htm"),
    leviathanCard("Mariya", "Aleksandr", 4, "russian", false , 440, ["Russian Fleet Box"], "elements/4.htm"),
    leviathanCard("Ivan", "Aleksandr", 4, "russian", false , 430, ["Aleksandr Battleship Pack"]),
    leviathanCard("Peter", "Aleksandr", 4, "russian", false , 410, ["Aleksandr Battleship Pack"]),
    leviathanCard("Izmail", "Cathrine", 3, "russian", false , 320, ["Cathrine Battlecruiser Pack"], "elements/7.htm"),
    leviathanCard("Kazarskii", "Cathrine", 3, "russian", false , 300, ["Cathrine Battlecruiser Pack"], "elements/8.htm"),
    leviathanCard("Romanov", "Cathrine", 3, "russian", false , 330, ["Kickstarter Ship Cards"], "elements/9.htm"),
    leviathanCard("Aurora", "Kiev", 2, "russian", false , 210, ["Russian Fleet Box"], "elements/10.htm"),
    leviathanCard("Rurik", "Kiev", 2, "russian", false , 210, ["Russian Fleet Box"], "elements/11.htm"),
    leviathanCard("Bayan", "Kiev", 2, "russian", false , 230, ["Kiev Cruiser Pack"]),
    leviathanCard("Kirov", "Kiev", 2, "russian", false , 220, ["Kiev Cruiser Pack"]),
    leviathanCard("Alexandra", "Kiev", 2, "russian", false , 240, ["Anastasia Cruiser Pack"], "elements/14.htm"),
    leviathanCard("Pallada", "Pallada", 2, "russian", false , 240, ["Pallada Cruiser Pack"], "elements/15.htm"),
    leviathanCard("Triteia", "Pallada", 2, "russian", false , 230, ["Pallada Cruiser Pack"], "elements/16.htm"),
    leviathanCard("Anastasia", "Berkut", 1, "russian", false , 150, ["Russian Fleet Box"], "elements/17.htm"),
    leviathanCard("Vsadnik", "Berkut", 1, "russian", false , 170, ["Russian Fleet Box"], "elements/18.htm"),
    leviathanCard("Berkut", "Berkut", 1, "russian", false , 190, ["Russian Fleet Box"], "elements/19.htm"),
    leviathanCard("Sterliad", "Berkut", 1, "russian", false , 160, ["Russian Fleet Box"], "elements/20.htm"),
    leviathanCard("Sud'ba", "Berkut", 1, "russian", false , 180, ["Berkut Destroyer Pack"]),
    leviathanCard("Nadeyat'sya", "Berkut", 1, "russian", false , 140, ["Berkut Destroyer Pack"]),
    leviathanCard("Pelikan", "Novik", 1, "russian", false , 140, ["Novik Destroyer Pack"], "elements/23.htm"),
    leviathanCard("Kit", "Novik", 1, "russian", false , 170, ["Novik Destroyer Pack"], "elements/24.htm"),
    leviathanCard("USG Virginia", "Frontier", 2, "american", false , 230, ["Frontier Cruiser Pack"], "elements/25.htm"),
    leviathanCard("USG Kansas", "Frontier", 2, "american", false , 240, ["Frontier Cruiser Pack"], "elements/26.htm"),
    leviathanCard("SML Hohenberg", "Adler", 2, "austro-hungarian", false , 200, ["Adler Cruiser Pack"], "elements/27.htm"),
    leviathanCard("SML Habsburg", "Adler", 2, "austro-hungarian", false , 190, ["Adler Cruiser Pack"], "elements/28.htm"),
    leviathanCard("Ishikawa", "Kawa", 2, "japanese", false , 220, ["Kawa Cruiser Pack"], "elements/29.htm"),
    leviathanCard("Tokushima", "Kawa", 2, "japanese", false , 240, ["Kawa Cruiser Pack"], "elements/30.htm"),
    leviathanCard("HML Leviathan", "Leviathan", 4, "british", false , 420, ["Leviathan Battleship Pack", "2012 Ship Cards"], "elements/31.htm"),
    leviathanCard("HML Medusa", "Leviathan", 4, "british", false , 430, ["Leviathan Battleship Pack", "2012 Ship Cards"], "elements/32.htm"),
    leviathanCard("HML Munster", "Connaught", 4, "british", false , 440, ["British Fleet Box"], "elements/33.htm"),
    leviathanCard("HML Wales", "Connaught", 4, "british", false , 450, ["British Fleet Box"], "elements/34.htm"),
    leviathanCard("HML Leinster", "Connaught", 4, "british", false , 410, ["Connaught Battleship Pack"]),
    leviathanCard("HML Cornwall", "Connaught", 4, "british", false , 430, ["Connaught Battleship Pack"]),
    leviathanCard("HML Spion Kop", "Defender", 3, "british", false , 320, ["Defender Battlecruiser Pack", "2012 Ship Cards"], "elements/37.htm"),
    leviathanCard("HML Mafeking", "Defender", 3, "british", false , 340, ["Defender Battlecruiser Pack", "2012 Ship Cards"], "elements/38.htm"),
    leviathanCard("HML Tiger", "Defender", 3, "british", false , 320, ["Kickstarter Ship Cards"], "elements/39.htm"),
    leviathanCard("HML Cairo", "Destrier", 2, "british", false , 230, ["British Fleet Box"], "elements/40.htm"),
    leviathanCard("HML Prometheus", "Destrier", 2, "british", false , 240, ["British Fleet Box"], "elements/41.htm"),
    leviathanCard("HML Sydney", "Destrier", 2, "british", false , 220, ["Destrier Cruiser Pack"]),
    leviathanCard("HML Malay", "Destrier", 2, "british", false , 210, ["Destrier Cruiser Pack"]),
    leviathanCard("HML Punjab", "Destrier", 2, "british", false , 240, ["Amil Dhar Cruiser Pack"], "elements/44.htm"),
    leviathanCard("HML Courser", "Destrier", 2, "british", false , -1, ["2012 Ship Cards"], "elements/45.htm"),
    leviathanCard("HML New Zealand", "County", 2, "british", false , 200, ["County Cruiser Pack", "2012 Ship Cards"], "elements/46.htm"),
    leviathanCard("HML Essex", "County", 2, "british", false , 170, ["County Cruiser Pack", "2012 Ship Cards"], "elements/47.htm"),
    leviathanCard("HML Hertfordshire", "County", 2, "british", false , -1, ["2012 Ship Cards"], "elements/48.htm"),
    leviathanCard("HML Anfield", "D-Class", 1, "british", false , 160, ["British Fleet Box", "2012 Ship Cards"], "elements/49.htm"),
    leviathanCard("HML Beagle", "D-Class", 1, "british", false , 170, ["British Fleet Box", "2012 Ship Cards"], "elements/50.htm"),
    leviathanCard("HML Dublin", "D-Class", 1, "british", false , 180, ["British Fleet Box", "2012 Ship Cards"], "elements/51.htm"),
    leviathanCard("HML Belfast", "D-Class", 1, "british", false , 150, ["British Fleet Box", "2012 Ship Cards"], "elements/52.htm"),
    leviathanCard("HML Crow", "D-Class", 1, "british", false , 150, ["D-Class Destroyer Pack", "2012 Ship Cards"], "elements/53.htm"),
    leviathanCard("HML Raven", "D-Class", 1, "british", false , 160, ["D-Class Destroyer Pack", "2012 Ship Cards"], "elements/54.htm"),
    leviathanCard("HML Trafford", "D-Class", 1, "british", false , -1, ["2012 Ship Cards"], "elements/55.htm"),
    leviathanCard("HML Monitor", "G-Class", 1, "british", false , 170, ["G-Class Destroyer Pack"], "elements/56.htm"),
    leviathanCard("HML Surveyor", "G-Class", 1, "british", false , 160, ["G-Class Destroyer Pack"], "elements/57.htm"),
    leviathanCard("Augusto", "Cesare", 4, "italian", false , 430, ["Cesare Battleship Pack"], "elements/58.htm"),
    leviathanCard("Giulio", "Cesare", 4, "italian", false , 440, ["Cesare Battleship Pack"], "elements/59.htm"),
    leviathanCard("Pompeii", "Vulcano", 4, "italian", false , 410, ["Italian Fleet Box"], "elements/60.htm"),
    leviathanCard("Vesuvius", "Vulcano", 4, "italian", false , 450, ["Italian Fleet Box"], "elements/61.htm"),
    leviathanCard("Etna", "Vulcano", 4, "italian", false , 420, ["Vulcano Battleship Pack"]),
    leviathanCard("Stromboli", "Vulcano", 4, "italian", false , 430, ["Vulcano Battleship Pack"]),
    leviathanCard("Sabatini", "Vulcano", 4, "italian", false , 480, ["Kickstarter Ship Cards"], "elements/64.htm"),
    leviathanCard("Sardegna", "Mare Nostrum", 3, "italian", false , 300, ["Mare Nostrum Battlecruiser Pack"], "elements/65.htm"),
    leviathanCard("Sicilia", "Mare Nostrum", 3, "italian", false , 280, ["Mare Nostrum Battlecruiser Pack"], "elements/66.htm"),
    leviathanCard("Marco Polo", "Avventuriero", 2, "italian", false , 220, ["Italian Fleet Box"], "elements/67.htm"),
    leviathanCard("Giovanno Caboto", "Avventuriero", 2, "italian", false , 220, ["Italian Fleet Box"], "elements/68.htm"),
    leviathanCard("Cristoforo Colombo", "Avventuriero", 2, "italian", false , 200, ["Avventuriero Cruiser Pack"]),
    leviathanCard("Amerigo Vespucci", "Avventuriero", 2, "italian", false , 230, ["Avventuriero Cruiser Pack"]),
    leviathanCard("Irredentismo", "Avventuriero", 2, "italian", false , 240, ["Castillo Cruiser Pack"], "elements/71.htm"),
    leviathanCard("Augustus", "Gloria", 2, "italian", false , 220, ["Gloria Cruiser Pack"], "elements/72.htm"),
    leviathanCard("Julius", "Gloria", 2, "italian", false , 230, ["Gloria Cruiser Pack"], "elements/73.htm"),
    leviathanCard("Andromeda", "Constellazione", 1, "italian", false , 180, ["Italian Fleet Box"], "elements/74.htm"),
    leviathanCard("Aquarius", "Constellazione", 1, "italian", false , 160, ["Italian Fleet Box"], "elements/75.htm"),
    leviathanCard("Sagittario", "Constellazione", 1, "italian", false , 170, ["Italian Fleet Box"], "elements/76.htm"),
    leviathanCard("Cassiopeia", "Constellazione", 1, "italian", false , 210, ["Italian Fleet Box"], "elements/77.htm"),
    leviathanCard("Aries", "Constellazione", 1, "italian", false , 180, ["Constellazione Destroyer Pack"]),
    leviathanCard("Scorpio", "Constellazione", 1, "italian", false , 130, ["Constellazione Destroyer Pack"]),
    leviathanCard("Rubicon", "Fiume", 1, "italian", false , 150, ["Fiume Destroyer Pack"], "elements/80.htm"),
    leviathanCard("Tevere", "Fiume", 1, "italian", false , 170, ["Fiume Destroyer Pack"], "elements/81.htm"),
    leviathanCard("SML Preußen", "Prussia", 4, "german", false , 460, ["Prussia Battleship Pack"], "elements/82.htm"),
    leviathanCard("SML Pommern", "Prussia", 4, "german", false , 470, ["Prussia Battleship Pack"], "elements/83.htm"),
    leviathanCard("SML Kaiser", "Kaiser", 4, "german", false , 420, ["German Fleet Box"], "elements/84.htm"),
    leviathanCard("SML Kaiserin", "Kaiser", 4, "german", false , 420, ["German Fleet Box"], "elements/85.htm"),
    leviathanCard("SML Friedrich der Große", "Kaiser", 4, "german", false , 410, ["Kaiser Battleship Pack"]),
    leviathanCard("SML Wilhelm", "Kaiser", 4, "german", false , 430, ["Kaiser Battleship Pack"]),
    leviathanCard("SML Sachsen", "Saxony", 3, "german", false , 290, ["Saxony Battlecruiser Pack"], "elements/88.htm"),
    leviathanCard("SML Frankfurt", "Saxony", 3, "german", false , 280, ["Saxony Battlecruiser Pack"], "elements/89.htm"),
    leviathanCard("SML Von Zieten", "Saxony", 3, "german", false , 290, ["Kickstarter Ship Cards"], "elements/90.htm"),
    leviathanCard("SML Greif", "Greif", 2, "german", false , 250, ["Red Baron Cruiser Pack"], "elements/91.htm"),
    leviathanCard("SML Brandenburg", "Greif", 2, "german", false , 200, ["Starter Box"], "elements/92.htm"),
    leviathanCard("SML Hannover", "Greif", 2, "german", false , 190, ["Starter Box"], "elements/93.htm"),
    leviathanCard("SML Bayern", "Greif", 2, "german", false , 220, ["German Fleet Box"]),
    leviathanCard("SML Lübeck", "Greif", 2, "german", false , 210, ["German Fleet Box"]),
    leviathanCard("SML Hamburg", "Greif", 2, "german", false , 240, ["Greif Cruiser Pack"]),
    leviathanCard("SML Danzig", "Greif", 2, "german", false , 220, ["Greif Cruiser Pack"]),
    leviathanCard("SML Rheinland", "Koenigsburg", 2, "german", false , 230, ["Koenigsberg Cruiser Pack"]),
    leviathanCard("SML Königsberg", "Koenigsburg", 2, "german", false , 200, ["Koenigsberg Cruiser Pack"]),
    leviathanCard("SML Löwe", "Falke", 1, "german", false , 180, ["Starter Box"], "elements/100.htm"),
    leviathanCard("SML Seelöwe", "Falke", 1, "german", false , 160, ["Starter Box"], "elements/101.htm"),
    leviathanCard("SML Dachs", "Falke", 1, "german", false , 190, ["German Fleet Box"]),
    leviathanCard("SML Vielfraß", "Falke", 1, "german", false , 180, ["German Fleet Box"]),
    leviathanCard("SML Geier", "Falke", 1, "german", false , 190, ["German Fleet Box"]),
    leviathanCard("SML Falke", "Falke", 1, "german", false , 180, ["German Fleet Box"]),
    leviathanCard("SML Hund", "Falke", 1, "german", false , 120, ["Falke Destroyer Pack"]),
    leviathanCard("SML Wolf", "Falke", 1, "german", false , 140, ["Falke Destroyer Pack"]),
    leviathanCard("SML Bremen", "Bremen", 1, "german", false , 140, ["Bremen Destroyer Pack"], "elements/108.htm"),
    leviathanCard("SML Essen", "Bremen", 1, "german", false , 150, ["Bremen Destroyer Pack"], "elements/109.htm"),
    leviathanCard("Paris", "Paris", 4, "french", false , 460, ["Paris Battleship Pack", "2012 Ship Cards"], "elements/110.htm"),
    leviathanCard("Jean Bart", "Paris", 4, "french", false , 400, ["Paris Battleship Pack", "2012 Ship Cards"], "elements/111.htm"),
    leviathanCard("Dunkerque", "Bastille", 4, "french", false , 420, ["Bastille Battleship Pack"], "elements/112.htm"),
    leviathanCard("Louvois", "Bastille", 4, "french", false , 430, ["Bastille Battleship Pack"], "elements/113.htm"),
    leviathanCard("Calais", "Bastille", 4, "french", false , 420, ["French Fleet Box"], "elements/114.htm"),
    leviathanCard("Bellegarde", "Bastille", 4, "french", false , 410, ["French Fleet Box"], "elements/115.htm"),
    leviathanCard("Béarn", "Conquent", 3, "french", false , 320, ["Conquent Battlecruiser Pack", "2012 Ship Cards"], "elements/116.htm"),
    leviathanCard("Ardent", "Conquent", 3, "french", false , 300, ["Conquent Battlecruiser Pack", "2012 Ship Cards"], "elements/117.htm"),
    leviathanCard("La Fantasque", "Conquent", 3, "french", false , -1, ["2012 Ship Cards"], "elements/118.htm"),
    leviathanCard("Legion d'Honneur", "Faucon", 2, "french", false , 230, ["Rene Fonck Cruiser Pack"], "elements/119.htm"),
    leviathanCard("Jeanne d'Arc", "Faucon", 2, "french", false , 200, ["Starter Box"], "elements/120.htm"),
    leviathanCard("Bretagne", "Faucon", 2, "french", false , 220, ["Starter Box"], "elements/121.htm"),
    leviathanCard("Borgnet", "Faucon", 2, "french", false , 210, ["Kickstarter Ship Cards"], "elements/122.htm"),
    leviathanCard("Epervier", "Faucon", 2, "french", false , 250, ["French Fleet Box"], "elements/123.htm"),
    leviathanCard("Chasseuse", "Faucon", 2, "french", false , 220, ["French Fleet Box"], "elements/124.htm"),
    leviathanCard("Corse", "Faucon", 2, "french", false , 200, ["Faucon Cruiser Pack"], "elements/125.htm"),
    leviathanCard("Geneve", "Faucon", 2, "french", false , 220, ["Faucon Cruiser Pack"], "elements/126.htm"),
    leviathanCard("Lave", "Liberté", 2, "french", false , 200, ["Liberte Cruiser Pack", "2012 Ship Cards"], "elements/127.htm"),
    leviathanCard("Pontbriand", "Liberté", 2, "french", false , 250, ["Liberte Cruiser Pack", "2012 Ship Cards"], "elements/128.htm"),
    leviathanCard("Barracuda", "Poisson", 1, "french", false , 150, ["Poisson Destroyer Pack"], "elements/129.htm"),
    leviathanCard("Faulx", "Poisson", 1, "french", false , 160, ["Poisson Destroyer Pack"], "elements/130.htm"),
    leviathanCard("La Gloire", "Grenouille", 1, "french", false , 170, ["Starter Box", "2012 Ship Cards"], "elements/131.htm"),
    leviathanCard("Aquitaine", "Grenouille", 1, "french", false , 170, ["Starter Box", "2012 Ship Cards"], "elements/132.htm"),
    leviathanCard("Normandie", "Grenouille", 1, "french", false , 170, ["Grenouille Destroyer Pack", "2012 Ship Cards"], "elements/133.htm"),
    leviathanCard("L'Honneur", "Grenouille", 1, "french", false , 180, ["Grenouille Destroyer Pack", "2012 Ship Cards"], "elements/134.htm"),
    leviathanCard("Pelletier", "Grenouille", 1, "french", false , 170, ["French Fleet Box", "2012 Ship Cards"], "elements/135.htm"),
    leviathanCard("Montcalm", "Grenouille", 1, "french", false , 160, ["French Fleet Box", "2012 Ship Cards"], "elements/136.htm"),
    leviathanCard("Montpellier", "Grenouille", 1, "french", false , 180, ["French Fleet Box", "2012 Ship Cards"], "elements/137.htm"),
    leviathanCard("Grenadier", "Grenouille", 1, "french", false , 160, ["French Fleet Box", "2012 Ship Cards"], "elements/138.htm"),
    leviathanCard("HSwML Ragnar", "Viking", 2, "scandinavian", false , 210, ["Operation Ragnar"], "elements/139.htm"),
    leviathanCard("HSwML Ulfbert", "Viking", 2, "scandinavian", false , 220, ["Operation Ragnar"], "elements/140.htm"),
    leviathanCard("HSwML Åland", "Baltiska", 1, "scandinavian", false , 180, ["Operation Ragnar"], "elements/141.htm"),
    leviathanCard("HSwML Gotland", "Baltiska", 1, "scandinavian", false , 160, ["Operation Ragnar"], "elements/142.htm"),
    leviathanCard("Speer", "Koenigsburg", 2, "swiss", false , 220, ["Operation Hannibal"], "elements/143.htm"),
    leviathanCard("Morgenstern", "Koenigsburg", 2, "swiss", false , 230, ["Operation Hannibal"], "elements/144.htm"),
    leviathanCard("Schwert", "Falke", 1, "swiss", false , 180, ["Operation Hannibal"], "elements/145.htm"),
    leviathanCard("Lanze", "Falke", 1, "swiss", false , 200, ["Operation Hannibal"], "elements/146.htm"),
    leviathanCard("Troop Transport", "Hansa", 8, "any", true , -1, ["Operation Ragnar"], "elements/147.htm"),
    leviathanCard("Aerial Fortress", "Hindenburg", 5, "german", true , -1, ["Operation Hannibal"], "elements/205.htm"),
    leviathanCard("Aerial Fortress", "Vauban", 5, "french", true , -1, ["Operation Hannibal"], "elements/206.htm")
]);

const planeData = sortByPointsAndName([
    planeCard("Fighter, Green", 20, ["Starter Box", "Plane Token Pack"], "elements/148.htm"),
    planeCard("Fighter, Veteran", 30, ["Starter Box", "Plane Token Pack"], "elements/149.htm"),
    planeCard("Bomber, Green", 20, ["Starter Box", "Plane Token Pack"], "elements/150.htm"),
    planeCard("Bomber, Veteran", 40, ["Starter Box", "Plane Token Pack"], "elements/151.htm"),
    planeCard("Spotter, Green", 30, ["Plane Token Pack"], "elements/152.htm"),
    planeCard("Spotter, Veteran", 40, ["Plane Token Pack"], "elements/153.htm"),
    planeCard("Heavy Bomber, Green", 40, ["Plane Token Pack"], "elements/154.htm"),
    planeCard("Heavy Bomber, Veteran", 60, ["Plane Token Pack"], "elements/155.htm"),
    planeCard("Turret Fighter, Green", 20, ["Plane Token Pack"], "elements/156.htm"),
    planeCard("Turret Fighter, Veteran", 30, ["Plane Token Pack"], "elements/157.htm"),
    planeCard("Interceptor, Green", 20, ["Plane Token Pack"], "elements/158.htm"),
    planeCard("Interceptor, Veteran", 30, ["Plane Token Pack"], "elements/159.htm"),
    planeCard("Torpedo Bomber, Green", 30, ["Plane Token Pack"], "elements/160.htm"),
    planeCard("Torpedo Bomber, Veteran", 40, ["Plane Token Pack"], "elements/161.htm")
]);

const captainData = sortByPointsAndName([
    captainCard("Anastasia Romanova", 10, "russian", "Kiev", ["Anastasia Cruiser Pack"], "elements/200.htm"),
    captainCard("Amil Dhar", 20, "british", "Destrier", ["Amil Dhar Cruiser Pack"], "elements/201.htm"),
    captainCard("Rene Fonck", 20, "french", "Faucon", ["Rene Fonck Cruiser Pack"], "elements/202.htm"),
    captainCard("Manfred von Richthofen", 30, "german", "Greif", ["Red Baron Cruiser Pack"], "elements/203.htm"),
    captainCard("Castillo Romano", 20, "italian", "Avventuriero", ["Castillo Romano Cruiser Pack"], "elements/204.htm")
]);

const admiralData = sortByPointsAndName([
    admiralCard("Airman", 10, "any", ["Kickstarter Admiral Cards"], "elements/165.htm"),
    admiralCard("Lieutenant", 20, "any", ["Kickstarter Admiral Cards"], "elements/166.htm"),
    admiralCard("Commander", 30, "any", ["Kickstarter Admiral Cards"], "elements/167.htm"),
    admiralCard("Rear Admiral", 40, "any", ["Kickstarter Admiral Cards"], "elements/168.htm"),
    admiralCard("Sky Admiral", 50, "any", ["Kickstarter Admiral Cards"], "elements/169.htm"),
    admiralCard("Improved Keel", 10, "any", ["Starter Box"], "elements/170.htm"),
    admiralCard("Breaking the Keel", 20, "any", ["Starter Box"], "elements/171.htm"),
    admiralCard("Type Reduction", 30, "any", ["Starter Box"], "elements/172.htm"),
    admiralCard("Tesla Support", 40, "any", ["Starter Box"], "elements/173.htm"),
    admiralCard("Repair Bonus", 50, "any", ["Starter Box"], "elements/174.htm"),
    admiralCard("Reinforced Keel", 10, "italian", ["Italian Fleet Box"], "elements/175.htm"),
    admiralCard("Positioning Expert", 20, "italian", ["Italian Fleet Box"], "elements/176.htm"),
    admiralCard("Maneuvering Expert", 30, "italian", ["Italian Fleet Box"], "elements/177.htm"),
    admiralCard("Torpedo Monitor", 40, "italian", ["Italian Fleet Box"], "elements/178.htm"),
    admiralCard("Master of Torpedoes", 50, "italian", ["Italian Fleet Box"], "elements/179.htm"),
    admiralCard("Extra Airmen", 10, "british", ["British Fleet Box"], "elements/180.htm"),
    admiralCard("Tight Spin Evasions", 20, "british", ["British Fleet Box"], "elements/181.htm"),
    admiralCard("Keel Cracking", 30, "british", ["British Fleet Box"], "elements/182.htm"),
    admiralCard("Artillery Expert", 40, "british", ["British Fleet Box"], "elements/183.htm"),
    admiralCard("Master of Weapons", 50, "british", ["British Fleet Box"], "elements/184.htm"),
    admiralCard("Rapid Repair", 10, "russian", ["Russian Fleet Box"], "elements/185.htm"),
    admiralCard("Precision Shots", 20, "russian", ["Russian Fleet Box"], "elements/186.htm"),
    admiralCard("Quick Crew Deployment", 30, "russian", ["Russian Fleet Box"], "elements/187.htm"),
    admiralCard("Double Shifts", 40, "russian", ["Russian Fleet Box"], "elements/188.htm"),
    admiralCard("Master of Repair", 50, "russian", ["Russian Fleet Box"], "elements/189.htm"),
    admiralCard("Makeshift Engine", 10, "french", ["French Fleet Box"], "elements/190.htm"),
    admiralCard("High Impact Torpedos", 20, "french", ["French Fleet Box"], "elements/191.htm"),
    admiralCard("Torpedo Crews", 30, "french", ["French Fleet Box"], "elements/192.htm"),
    admiralCard("Torpedo Sights", 40, "french", ["French Fleet Box"], "elements/193.htm"),
    admiralCard("Engineering Expert", 50, "french", ["French Fleet Box"], "elements/194.htm"),
    admiralCard("Focused Gunners", 10, "german", ["German Fleet Box"]),
    admiralCard("Hard Burn", 20, "german", ["German Fleet Box"]),
    admiralCard("Armored Hulls", 30, "german", ["German Fleet Box"]),
    admiralCard("Chaff Experts", 40, "german", ["German Fleet Box"]),
    admiralCard("Balanced Vessels", 50, "german", ["German Fleet Box"])
]);

const alGunData = sortByPointsAndName([
    alGunCard("Semi-Mobile Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"], "elements/162.htm"),
    alGunCard("Mobile Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"], "elements/163.htm"),
    alGunCard("High-Mobility Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"], "elements/164.htm")
]);
