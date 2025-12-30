import { server } from "./lib/server.js";

console.clear();

type App = {
    init: () => void;

}

const app = {} as App;

app.init = () => {
   // susikurti reikiamus/trukstamus folders & files
   // atsinaujinti informcija
   // duombaze:
   // - prisijungti
   // - pasiruosti struktura
   // - surasyti pradinius duomenis
   // paleisti servrio logika
    server.init();

   // laike pasikartojantys procesai:
   // - isivalyti nereikalingus files/info
   // - atnaujinti files/info
   // - backup darymas
}

app.init();

export default app;