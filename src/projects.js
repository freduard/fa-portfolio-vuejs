const getImg = (name) => {
    const path = `/src/assets/images/${name}`; //your imgfile
    const modules = import.meta.globEager("/src/assets/images/*"); 
    return modules[path].default;
}

export const projects = [
    {
        id: 1,
        date: "5 November, 2021",
        title: "Ryan Reynolds E-Portfoolio",
        image: getImg("ryan_reynolds.jpg"),
        github: "https://tak19leemet.itmajakas.ee/team3-portfolio/",
        figma: "https://www.figma.com/file/NeiL7NSUinwE0dAxOEQsNG/Desktop",
        online: "https://tak19leemet.itmajakas.ee/team3-portfolio/",
        p1: "Esimese projektina oli vaja 3 päeva jooksul oma meeskonnaga valmis teha E-Portfolio kas reaalse inimese või väljamõeldud tegelase kohta. Projekti lõpptulemus tuli üldjoontes üpris hästi välja. Vahetevahel oli abi vaja CSS'i osas, kuna ma ei saanud siis elementide paigutamisest ja õige koodi struktuuri kirjutamisest nii hästi veel aru, sest olin selle teema õppimisega alles alustanud.",
        p2: "Tagasi vaadates oleksin võinud lehekülje HTML struktuuri juba algselt paremini kodeerida ja organiseerida, kuna lõpuks oli kõik üpris segane ja oli raske koodist aru saada. Arvestades sellega, et see oli mu päris esimene kord kui ma üldse veebilehte arendasin, olen tulemusega rahul."
    },
    {
        id: 2,
        date: "Detsember 15, 2021",
        title: "Virtuaalne Instrument",
        image: getImg("arduino_chello.jpg"),
        github: "https://github.com/freduard/tiim-5",
        figma: "https://www.figma.com/file/MS84o0iRUgXWLZkr4FUfv8/Tiim5?node-id=0%3A1",
        online: "",
        p1: "Teise projektina pidime tegema virtuaalse muusikainstrumendi, milleks kasutasime Arduinot, veebisaiti ja serverit. Selleks ühendasime Arduino veebisaidiga ja seda serveri abil, kogu töö hõlmas endas ka programmeerimis Javas, JavaScriptis ja Phythonis, mille tulemusena sai virtuaalselt tšellot mängida. Ühendamine toimus serveriga, mis jooksis teise arvuti peal.",
        p2: "Noote sai mängida nii veebisaidi kui ka Arduino peal. Veebisaidil oli ka juba enamjaolt ette tehtud kood, mis visualiseeris hääli JavaScriptiga. Mina tegelesin peamiselt JavaScriptiga ja Githubiga, et need noodid töötaksid. Kahjuks ei tulnud asi välja nii nagu oodatud. Hääl hakkis ja kogu süsteem jooksis väga aeglaselt.",
        p3: "Samuti oli probleeme meeskonnaga, kuna puudus juht, kes kogu tööd oleks suunanud ja koordineerinud. Lisaks mõned meeskonnaliikmed lahkusid poole töö pealt, mis tegi vajaliku tulemuse saavutamise väga raskeks. Kokkuvõttes andis see kõik juurde vajalikku praktilist kogemust meeskonnatöö osas.",
    },
    {
        id: 3,
        date: "Märts 4, 2022",
        title: "Andmemudelite & projekti planeerimine",
        image: getImg("datamodels_project_planning.webp"),
        github: "https://github.com/angsuuu/Project-5---Team-8",
        figma: "",
        online: "",
        p1: "Basically suht timm",
        p2: "rohkem ei oska öelda",
    },
    {
        id: 4,
        date: "Märts 25, 2022",
        title: "Andres Kõljalg E-Portfoolio",
        image: getImg("andres_koljalg_portfolio.png"),
        github: "https://github.com/andreskoljalg/andres-koljalg-portfolio",
        figma: "",
        online: "",
        p1: "Sain Andresega läbi oma venna tuttavaks, kui ta oli maininud e-portfoolio vajadust. See oli minu esimene päris projekt ja veebiarenduse tööots mida ma sel ajal teinud olin. Selle projekti arendamise käigus sain ma arvan ühe kooli aasta võrra teadmisi juurde veebiarendamises. Alguses mõtlesin, et see on lihtne ja kiire paarinädala töö mis on osutus täiesti vastupidiseks.",
        p2: "Algselt ainukene asi mida ma kasutasin oli TailwindCSS ilma ühegi raamistikuta, mis oli suur viga elementide paigutuse tõttu, kuna elementide klasside read tulid väga massiivsed mistõttu oli ka koodist lõpuks raske aru saada. Peale selle kui ma veel copy-past-isin elemente kuskilt mujalt koodist, siis läheb kõik väga segaseks. On olemas erinevad raamistikud nagu Vue.js mis lahendavad selle probleemi, mida ma muidugi naiivselt ei kasutanud.",
        p3: "Paratamatult pidin ma terve projekti port'ima Vue.js raamistiku peale ja ümber ehitama terve saidi back-end'i süsteemi mis oli pehmelt öeldes piinarikas. Vähemalt nüüd tean, et raamistik on alati vajalik, ükskõik kui suur või väike su projekt tundub.",
    },
    {
        id: 5,
        date: "Aprill 6, 2022",
        title: "Muusika poe veebileht",
        image: getImg("music_instrument_store.jpg"),
        github: "https://github.com/TimTimDev/timo-lopuproje",
        figma: "",
        online: "",
        p1: "Basically suht timm",
        p2: "rohkem ei oska öelda",
    }
]