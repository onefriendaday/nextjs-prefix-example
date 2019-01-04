const next = require('next')
const server = require('express')()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    server.use((req,res, next) => {
        req.url = req.originalUrl.replace('blog/_next', '_next');
        next();
    });

    server.get('*', (req, res) => {
        return handle(req,res);
    });

    server.listen(port, err => {
        if (err) throw err
        console.log(`>> Ready on http://localhost:${port}`)
    });
});