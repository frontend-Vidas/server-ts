import http from 'node:http';
const server = {};
server.httpServer = http.createServer((req, res) => {
    console.log('###########################');
});
server.init = () => {
    server.httpServer.listen(4410, () => {
        console.log('Serveris sukasi ant http://localhost:4410');
    });
};
export { server };
