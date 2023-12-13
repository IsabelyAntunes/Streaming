import {randomUUID} from "node:crypto"
export class DatabaseMemory{
#musicas = new Map()

list(){
    return Array.from(this.#musicas.entries()).map((musicaArray) => {
        const id = musicaArray[0]
        const data = musicaArray[1]

        return{
            id,
             ...data,
    }
    }) 

    .filter(musica => {
        if (search) {
            return musica.titulo.includes(search)
        }
        return true
    })
}

create(musica){
    const musicaId = randomUUID()
    this.#musicas.set(musicaId, musica)
}

update(musica){
    this.#musicas.set(id, musica) 
}

delete(musica){
    this.#musicas.delete(id, musica)
}
}