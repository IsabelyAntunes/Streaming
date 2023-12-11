import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

server.get('/', () => {
    return 'Olá Mundo!'
})
//outras rotas
server.get('/', () => {
    return ''
})
server.get('/', () => {
    return ''
})

server.listen({
    port: 3333,
})