class Block {
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}

fooblock = new Block({timestamp:'today',lastHash:'lasthash@@@', hash: 'hashxyz', data: 'data is Guitar'})
console.log(fooblock)