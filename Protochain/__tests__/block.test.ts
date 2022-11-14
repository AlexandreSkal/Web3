import { describe, test, expect } from '@jest/globals';
import Block from '../src/lib/block';

describe("Block Tests", () => {

    test('Should be valid', () => {
        const block = new Block(1, 'abc', 'Block 2')
        const valid = block.isValid();
        expect(valid).toBeTruthy();
    })
    test('Should be NOT valid (previousHash)', () => {
        const block = new Block(1, '', 'Block 2')
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be NOT valid (timestamp)', () => {
        const block = new Block(1, 'abc', 'Block 2')
        block.timestamp = -1;
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be NOT valid (Hash)', () => {
        const block = new Block(1, 'abc', 'Block 2')
        block.hash = "";
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be NOT valid (data)', () => {
        const block = new Block(1, "abc", "")
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be NOT valid (Index)', () => {
        const block = new Block(-1, 'abc', 'Block 2')
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })
})