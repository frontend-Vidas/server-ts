"use strict";
const file = () => {
    return [false, 'HTML'];
};
const getUserById = () => {
    return [false, 'HTML'];
};
const getUserByEmail = () => {
    return [false, 'HTML'];
};
const url = 'api/randpm';
const pages = {
    'api/user': getUserById,
    'api/user-by-email': getUserByEmail,
};
const funcToCall = pages["api/user"];
let fileResponse = funcToCall();
let [err, msg] = fileResponse;
if (err) {
    fileResponse = file('404.html');
    err = fileResponse[0];
    msg = fileResponse[1];
}
res.end(msg);
