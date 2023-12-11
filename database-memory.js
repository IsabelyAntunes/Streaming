import {randomUUID} from "node:crypto"
export class DatabaseMemory{
#musicas = new Map()

list(){
    return this.#livros.values()
}

create(musica){
    const musicaId = randomUUID()
    this.#musicas.set(musicaId, musica)
}

update(musica){
    this.#musicas.push(musica) 
}

delete(musica){
    this.#musicas.delete(id, musica)
}
}