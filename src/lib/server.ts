import http, { IncomingMessage, ServerResponse } from 'node:http';
//import { text } from 'node:stream/consumers';
import { file } from './file.js';


type Server = {
    init: () => void;
    //httpServer: typeof http.createServer;
    httpServer: any;
}

const server = {} as Server;

server.httpServer = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    const socket = req.socket as any;
    const encryption = socket.encryption as any;
    const ssl = encryption !== undefined ? 's' : '';

    const baseURL = `https${ssl}://${req.headers.host}`
    const parsedURL = new URL(req.url ?? '', baseURL);
    const httpMethod = req.method ? req.method.toLocaleLowerCase() : 'get';
    const trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');

    const textFileExtensions = ['css', 'js', 'svg', 'webmanifest'];
    const binaryFileExtensions = ['png', 'jpg', 'jpeg', 'webp', 'ico', 'eot', 'ttf', 'woff', 'woff2', 'otf'];
    const fileExtension = trimmedPath.slice(trimmedPath.lastIndexOf('.')+1);

    const isTextFile = textFileExtensions.includes(fileExtension); // galune: .css, .js, .svg, ...
    const isBinaryFile = binaryFileExtensions.includes(fileExtension); // galune: .png, .jpg, .webp, .eot, .ttf, ...
    const isAPI = trimmedPath.startsWith('api/'); // url prasideda: /api/...
    const isPage = !isTextFile && !isBinaryFile && !isAPI; // nera failas ir nera api

    console.log(httpMethod, trimmedPath);

    let responseContent = 'ERROR: neturiu tai, ko tu nori...';

    if (isTextFile){
       responseContent = 'TEKSTINIS FAILAS';
    }

    if (isBinaryFile){
       responseContent = 'BINARY FAILAS';
    }
    
    if (isAPI){
       responseContent = 'API DUOMENYS';
    }

    if (isPage){
       responseContent = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Astronautas</title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
            <link rel="manifest" href="/favicon/site.webmanifest">
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="theme-color" content="#ffffff">
            <link rel="stylesheet" href="/css/font-awesome.min.css">
            <link rel="stylesheet" href="/css/socials.css">
            <link rel="stylesheet" href="/css/button.css">
            <link rel="stylesheet" href="/css/header.css">
            <link rel="stylesheet" href="/css/main.css">

            <link rel="stylesheet" href="/css/main.css">
            <link rel="stylesheet" href="/css/main.min.css">
            <link rel="stylesheet" href="/css/main.6dkdlg8hf71.css">
            <link rel="stylesheet" href="/css/main.6dkdlg8hf71.6dkdlg8hf71.css">
            <link rel="stylesheet" href="/css/main.css?v=2">
            <link rel="stylesheet" href="/css/main.css?v=6dkdlg8hf71">
        </head>
        
        <body>
            <header class="container">
                <img class="logo" src="https://tropikalis.github.io/44-astronautas/img/Clay.svg" alt="Logo">
                <nav class="main-nav">
                    <a class="link" href="#">About</a>
                    <a class="link" href="#">Portfolio</a>
                    <a class="link" href="#">Job</a>
                    <a class="link" href="#">Contact</a>
                </nav>
            </header>
        
            <main class="container">
                <div class="left-column">
                    <h1 class="main-title"><span>404</span> Lost in Space</h1>
                    <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quos aliquam minus consectetur corporis velit sequi obcaecati, omnis, et saepe porro ipsam assumenda repudiandae?</p>
                    <div class="button-group">
                        <a class="button" href="#">Go home</a>
                        <a class="button" href="#">Back</a>
                    </div>
                </div>
                <img class="right-column" src="https://raw.githubusercontent.com/tropikalis/44-astronautas/refs/heads/main/img/space.png" alt="Astronautas mobilus">
            </main>
        
            <footer class="container">
                <div class="socials">
                    <a class="social-link fa fa-facebook-official" href="#" target="_blank" title="Facebook"></a>
                    <a class="social-link fa fa-twitter" href="#" target="_blank" title="Twitter"></a>
                    <a class="social-link fa fa-instagram" href="#" target="_blank" title="Instagram"></a>
                    <a class="social-link fa fa-linkedin-square" href="#" target="_blank" title="Linkedin"></a>
                </div>
                <p class="copyright">&copy; 2026 - All rights reserved</p>
            </footer
        </body>
        
        </html>`;
    }

    if (trimmedPath === ''){
    }

    return res.end(responseContent);
});

server.init = () => {
    server.httpServer.listen(4410, () => {
        console.log('Serveris sukasi ant http://localhost:4410');
    });

};

export { server };



