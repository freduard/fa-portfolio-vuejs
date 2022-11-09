const getDoc = (name) => {
    const path = `/src/assets/documents/${name}`; //your imgfile
    const modules = import.meta.globEager("/src/assets/documents/*"); 
    return modules[path].default;
}

export const documents = [
    {
        id: 1,
        title: "CV",
        document: getDoc("cv.pdf"),
    },
    {
        id: 2,
        title: "Iseendast & enseareng",
        document: getDoc("Iseennast+ja+oma+enesearengut+vaartustavad+hoiakud+A.pdf"),
    },
    {
        id: 3,
        title: "Isiksuseomadused",
        document: getDoc("Isiksuseomadused.pdf"),
    },
    {
        id: 4,
        title: "Minu iseloom",
        document: getDoc("Minu+iseloom.pdf"),
    },
    {
        id: 5,
        title: "Iseloomustamine pinginaabriga",
        document: getDoc("Minu+iseloom_Pinginaabrile.pdf"),
    },
    {
        id: 6,
        title: "Motivatsioon õppida",
        document: getDoc("Motivatsioon+oppida.pdf"),
    },
    {
        id: 7,
        title: "Õpioskused",
        document: getDoc("Opioskused.pdf"),
    },
    {
        id: 8,
        title: "Tööalane konkurentsivoime",
        document: getDoc("Tooalane+konkurentsivoime.pdf"),
    },
]