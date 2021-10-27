import {createServer} from "miragejs";

createServer(
    {
        routes(){
            this.namespace = "api";

            this.get("/expertises", ()=> {
                return {
                    expertises: ["React Developer", "Java Developer", "Vue Developer", "JavaScript Developer",]
                }
            });

        }
    }
)










/*

this.get("/expertises", ()=> {
    return {
        expertises: ["React Developer", "Java Developer", "Vue Developer", "JavaScript Developer",],
    }

}),
});

*/