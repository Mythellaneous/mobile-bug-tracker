const http = require('http');

const server = http.createServer(function(request, response){
    if(request.url === '/posts') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(posts);
        response.end();
    } else if(request.url === '/authors') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(authors);
        response.end();
    }
    else if (request.url === '/users') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(users);
        response.end();

    }else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('<h1>404 not found</h1>');
    }

});



 const users = JSON.stringify({
        user:{
            name: 'John',
            lastName: 'Doe',
            age: 30,
            email: 'admin',
            password: 'admin'
        }
});



const posts = JSON.stringify([
    {
        bugId: '222',
        author: 'J.Pocurull',
        user_id:1, 
        title: 'Bug 2222', 
        content: 'I was looking for an image in my cloud storage device, but it seems that the file cannot be located. The error code it gives me is \'Error 404\'. What should I do?' ,
        status: 'Fixed',
        fixDateTime: '20/04/2023 , 10:33:25',
        fix: 'This bug is triggered when the content that a client requests from a server is not found.\n\nTo fix this bug, the server must make sure that the requested resource is available to clients.\n\nTo do this, follow the following steps:\n\nStep 1: Upload the resource.\nStep 2: Change the user permissions.',
}
{
    bugId: '234',
    author: 'A.Carcamo',
    user_id: 1, 
    title: 'Bug 234', 
    content: 'I was using my computer as normal, and I randomly received a BSOD. The error code it gives me is \'Error 234\'. What should I do?' ,
    status: 'Not Fixed. :(',
    fixDateTime: '12/12/2017 , 09:45:27',
    fix: 'Still working on it!',
}
,
]);

const authors = JSON.stringify([
    {name: 'John Doe', id: 1},
    {name: 'Jane Doe', id: 2}
]);


const port= 5000;
const host = '172.19.9.14';
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
