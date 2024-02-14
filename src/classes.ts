class Game {
    name: string
    version: string
    short: string
    layers: Layer[]
    packs: Pack[]

    constructor(name:string, version:string, short:string, layers:Layer[] = [], packs:Pack[] = []) {
        this.name = name
        this.version = version
        this.short = short
        this.layers = layers
        this.packs = packs
    }
}

class Layer {
    name: string
    index: number

    constructor(name:string, index:number) {
        this.name = name
        this.index = index
    }
}

class Pack {
    name: string
    blocks: Block[]
    
    constructor(name:string, blocks:Block[] = []) {
        this.name = name
        this.blocks = blocks
    }
}

class Block {
    layer: number
    index: number
    args: Argument[] | null

    constructor(layer:number, index:number, args:Argument[] | null = null) {
        this.layer = layer
        this.index = index
        this.args = args
    }
}

class Argument {
    name: string
    type: string
    value: object | null

    constructor(name:string, type:string, value:object | null = null) {
        this.name = name
        this.type = type
        this.value = value
    }
}

export { Game, Layer, Pack, Block, Argument }