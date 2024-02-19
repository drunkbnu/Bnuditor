class Game {
    name: string
    version: string
    ext: string
    logo: string
    layers: Layer[]
    packs: Pack[]

    constructor(name:string, version:string, ext:string, logo:string, layers:Layer[] = [], packs:Pack[] = []) {
        this.name = name
        this.version = version
        this.ext = ext
        this.logo = logo
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
    blocks: BlockTemplate[]
    
    constructor(name:string, blocks:BlockTemplate[] = []) {
        this.name = name
        this.blocks = blocks
    }
}

class BlockTemplate {
    layer: number
    index: number
    size: [number, number]
    offset: [number, number]
    frames: number
    delay: number
    states: number
    rotations: number
    parameters: Parameter[] | null

    constructor(obj: {
        layer:number
        index:number
        size:[number, number]
        offset:[number, number]
        frames:number
        delay:number
        states:number
        rotations:number
        parameters: Parameter[] | null
    }) {
        this.layer = obj.layer
        this.index = obj.index
        this.size = obj.size
        this.offset = obj.offset
        this.frames = obj.frames
        this.delay = obj.delay
        this.states = obj.states
        this.rotations = obj.rotations
        this.parameters = obj.parameters
    }
}

class Parameter {
    name: string
    type: string

    constructor(name:string, type:string) {
        this.name = name
        this.type = type
    }
}

class Block {
    index: number
    state: number
    rotation: number
    parameters: object[] | null

    constructor(index:number, state:number, rotation:number, parameters:object[] | null) {
        this.index = index
        this.state = state
        this.rotation = rotation
        this.parameters = parameters
    }
}

export { Game, Layer, Pack, BlockTemplate, Parameter, Block }