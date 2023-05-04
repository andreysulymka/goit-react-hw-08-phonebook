class Theme {
    constructor({header, main, footer}) {

        this.header = header ?? {
            backgroundColor: "rgb(3, 169, 161)",
            textColor: "white",
        };

        this.main = main ?? {

        };

        this.footer = footer ?? {
            backgroundColor: "rgb(3, 169, 161)",
            textColor: "white",
        };
    }
}

//світла тема дефолтна
export const light = new Theme({});

export const dark = new Theme({
    header: {
        backgroundColor: "black",
        textColor: "white",
    },
    //main: {},
    footer: {
        backgroundColor: "black",
        textColor: "white",
    }
});


export function themeChanging(theme) {
    switch (theme) {
        case "light":
            theme="dark";
            break;
        case "dark":
            theme="light"
            break;
        default:     
    }
};