const Hapi = require("@hapi/hapi");
const routes = require("./routes");


const init = async () => {
    const host = process.env.NODE_ENV
        ? process.env.NODE_ENV.toString().trim() === 'production' ? '0.0.0.0' : 'localhost'
        : 'localhost';

    const server = Hapi.server({
        port: 5000,
        host: host,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
