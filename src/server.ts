import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';


const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
  
server.get('/', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('home','red')
})



server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('My name is Yazedd , i am a software developer , if you wish to contact me call me at 055555555','about')
})

server.get('/images/catsbreeds', (req, reply) => {
    return reply.sendFile('images/catsbreeds.jpeg')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('Free-Basic-Resume-Template.webp')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})