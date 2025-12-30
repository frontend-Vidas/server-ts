type Server = {
    init: () => void;
}

const server = {} as Server;

server.init = () => {
    console.log('iniciuojame serveri ...');
}

export {server};