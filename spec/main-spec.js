const main = require('../main/main');
const fs = require('fs')

describe('get remainder of two number', () => {

    it('basic test case1', () => {
        expect(main(9,4) == 1).toBe(true);
    });
});

describe('get remainder of two number', () => {

    it('basic test case2', () => {
        expect(main(9,3) == 0).toBe(true);
    });
});