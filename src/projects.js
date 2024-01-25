// function getImg(name) {
//     return(`/src/assets/images/${name}`);
// }

export const projects = [
    {
        id: 1,
        // date: "Oktoober 4, 2021",
        date: "04/10/21",
        title: "Collatz Conjecture",
        // image: getImg("collatz.jpg"),
        lang: "Python",
        github: "https://github.com/freduard/collatz_conjecture",
        figma: "",
        online: "",
        p1: "I saw a video about a math problem called 'Collatz Conjecture', after which I wanted to test my skills in math & Python. For this problem, you need to take a number. If it's even, you must divide it by 2. If it's odd, you multiply it by 3 and add 1. This script script will calculate numbers from 1 to infinity and save the number which you could do the most calculations on. I also added a feature which saves the last number you calculated so next time you run it, you can continue where you left off."
    },
    {
        id: 2,
        // date: "November 5, 2021",
        date: "05/11/21",
        title: "Ryan .R Portfolio",
        // image: getImg("ryan_reynolds.jpg"),
        lang: "HTML + CSS",
        github: "https://tak19leemet.itmajakas.ee/team3-portfolio/",
        figma: "https://www.figma.com/file/NeiL7NSUinwE0dAxOEQsNG/Desktop",
        online: "https://tak19leemet.itmajakas.ee/team3-portfolio/",
        p1: "For my first school project I had to make a portfolio for a character, real or fake in 3 days. Considering it was my first ever project, the outcome was decent although I needed some help with CSS. Looking back the code structure and organization was horrendus, which made reading it difficult."
    },
    {
        id: 3,
        // date: "Detsember 15, 2021",
        date: "15/12/21",
        title: "Virtual Instrument",
        // image: getImg("arduino_chello.jpg"),
        lang: "JS + HTML + CSS",
        github: "https://github.com/freduard/tiim-5",
        figma: "https://www.figma.com/file/MS84o0iRUgXWLZkr4FUfv8/Tiim5?node-id=0%3A1",
        online: "",
        p1: "For my second school project we had to make a virtual instrument you could play online. We used an arduino with some buttons to play notes and broadcast it live to a server and website. I mainly dealed with github & JavaScript. Unfortunately it was a failure as team communication & coordination was poor. Something went wrong with the code resulting in the sound lagging and everything running slow. Taught me how important the team aspect is of any project."
    },
    {
        id: 4,
        // date: "Märts 4, 2022",
        date: "04/03/22",
        title: "Datamodels & Planning",
        // image: getImg("datamodels_project_planning.jpg"),
        lang: "None",
        github: "https://github.com/angsuuu/Project-5---Team-8",
        figma: "",
        online: "",
        p1: "For the third school project, we had to think of an idea and document each step of the way in great detail. Our idea was a warehouse management system. We documented each step of the process, how we would do it, what technoligies we would use, and so on. I didn't like this very much, as the planning part of any project is a pain for me.",
    },
    {
        id: 5,
        // date: "Märts 25, 2022",
        date: "25/03/22",
        title: "Andres .K Portfolio",
        // image: getImg("andres_koljalg_portfolio.png"),
        lang: "VueJS + Tailwind",
        github: "https://github.com/andreskoljalg/andres-koljalg-portfolio",
        figma: "",
        online: "https://tak21fredyait.itmajakas.ee/andres/",
        p1: "I got acquainted with Andres through my brother as he was in need for a personal portfolio. This was my very first real web development project at the time. It seemed like an easy little job at first but proved to be much more complicated and bigger than I initially thought. I never used a framework like Vue, which was a huge mistake. Eventually I did deliver a HTML & CSS page which a lot of horrendus PHP logic sprinkled in between to make it easier to add new projects and make it at least somewhat automated/dynamic."
    },
    {
        id: 6,
        // date: "Aprill 6, 2022",
        date: "06/04/22",
        title: "Music Shop Page",
        // image: getImg("music_instrument_store.png"),
        lang: "VueJS + Tailwind",
        github: "https://github.com/TimTimDev/timo-lopuproje",
        figma: "",
        online: "",
        p1: "This was another school project where we made a music shop page for a third year student's final school project. Nothing special.",
    },
    {
        id: 7,
        // date: "Mai 18, 2022",
        date: "18/05/22",
        title: "Python Image Downscaler",
        // image: getImg("python.jpg"),
        lang: "Python",
        github: "https://github.com/freduard/python-image-downscaler",
        figma: "",
        online: "",
        p1: "When Andres needed a way to downscale images as his raw images for his portfolio were way too big in size, I made a pretty sophisticated python script which wasn't exactly an elegeant solution to his problem. Basically, it finds all possible image files in the folder the script is located, then mirrors the exact file tree the images were in and downscales them all in mass. This was the first time I actually added failsafes, error handling and even mulitple OS support to my code. It was quite a challenge, but I'm quite proud of this one."
    },
    {
        id: 8,
        // date: "September 28, 2022",
        date: "28/09/22",
        title: "Growtopia Trainer",
        // image: getImg("gt.jpg"),
        lang: "C#",
        github: "",
        figma: "",
        online: "",
        p1: "When playing Growtopia with my friends in the school dorms, I had a random idea to make a Trainer/Hack for it. Didn't seem that difficult, as I've made loads of hacks for Roblox in C# previously. The 'hacking' part was honestly the easiest of all of this. I learned how Windows' registry & network adapters work to make a MAC address spoofer which finds all network adapters on your computer, ignores the useless ones and changes a bunch of registry values to spoof your MAC address to unban your computer from Growtopia in case that happens. After a while everything got bloated and the UI was a pain to work on using Windows Forms App as I dind't know WPF, which led me to abandon the project."
    },
]

projects.reverse();