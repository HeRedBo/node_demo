const assert = require('assert');

const hello = require('../hello');

describe('#async hello', () => {
    describe('#asyncCalculate()', () => {
        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 22);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });

        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});