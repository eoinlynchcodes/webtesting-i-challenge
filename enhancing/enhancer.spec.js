const enhancer = require('./enhancer.js');
// test away!

const item = { name: 'Eoin', enhancement: 10, durability: 70};

// const idealItem = {
//     name: 'Eoin',
//     enhancement: 10,
//     durability: 100
// };

describe('repair', () => {
    it('Repair sets item to 100.', () => {
        expect(enhancer.repair(item)).toEqual({...item, durability: item.durability = 100 })}
)});

describe('success', () => {
    it('It returns a new object with enhancement increased', () => {
        expect(enhancer.succeed(item)).not.toBe({...item, enhancement: item.enhancement = false });
    })
});

describe('fail', () => {
    it('decreases the item.durability', () => {
        expect(enhancer.fail(item)).not.toBe({...item, durability: item.durability > 50});
    })
});

describe('get', () => {
    it('gets all the items back', () => {
        expect(enhancer.get(item)).toEqual(item);
    })
});