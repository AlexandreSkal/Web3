import sha256 from 'crypto-js/sha256';

/**
 * Block class
 */
export default class Block {
    index: number;
    timestamp: number;
    hash: string;
    previousHash: string
    data: string;

    /**
     *  Create a new Block
     * @param index The block index in blockchain
     * @param hash  The block hash
     * @param previousHash  The previous block hash
     * @param data  The block data
     */
    constructor(index: number, previousHash: string, data: string) {
        this.index = index;
        this.timestamp = Date.now();
        this.previousHash = previousHash;
        this.data = data;
        this.hash = this.getHash();
    }

    getHash() {
        return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
    }

    /**
     *  Validate the block
     * @returns Return true if the block is valid
     */
    isValid(previousHash: string, previousIndex: number): Boolean {
        if (previousIndex !== this.index - 1) return false;
        if (this.hash !== this.getHash()) return false;
        if (!this.data) return false;
        if (this.timestamp < 1) return false;
        if (this.previousHash !== previousHash) return false;
        return true
    }
}