import { describe, test, expect, beforeAll } from '@jest/globals';
import Block from '../src/lib/block';

describe("Block Tests", () => {

    let genesis: Block;

    beforeAll(() => {
        genesis = new Block(0, "", "Genesis Block")
    })

    test('Should be valid', () => {
        const block = new Block(1, genesis.hash, 'Block 2')
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toBeTruthy();
    })
    test('Should be NOT valid (previousHash)', () => {
        const block = new Block(1, 'abc', 'Block 2')
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })

    test('Should be NOT valid (timestamp)', () => {
        const block = new Block(1, genesis.hash, 'Block 2')
        block.timestamp = -1;
        block.hash = block.getHash()
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })

    test('Should be NOT valid (Hash)', () => {
        const block = new Block(1, genesis.hash, 'Block 2')
        block.hash = "";
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })

    test('Should be NOT valid (data)', () => {
        const block = new Block(1, genesis.hash, '')
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })

    test('Should be NOT valid (Index)', () => {
        const block = new Block(-1, genesis.hash, 'Block 2')
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })
})