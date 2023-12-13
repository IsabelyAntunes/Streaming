import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()

server.get('/', () => {
    return 'Olá Mundo!'
})

server.post('/musica', (request, reply) => {
    //const body = request.body
    //console.log(body)//
    const {titulo, artista, anolancamento} = request.body
    database.create({
        titulo: titulo,
        artista: artista,
        anolancamento: anolancamento,
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.get('/musica', (request) => {

    const search = request.query.search

    console.log(search)

    const musicas = database.list(search)

    return musicas
})

server.put('/musica/:id', (request, reply) => {
    const musicaId = request.params.musicaId

    const {titulo, artista, anolancamento} = request.body
    const musica = database.update(musicaId, {
        titulo: titulo,
        artista: artista,
        anolancamento: anolancamento,
    })
    return reply.status(204).send()
})

server.delete('/musica/:id', (request, reply) => {
    const musicaId = request.params.musicaId

    database.delete(musicaId)
    return reply.status(204).send()
})

server.listen({
    port: 3333,
})