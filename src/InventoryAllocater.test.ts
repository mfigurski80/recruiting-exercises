import InventoryAllocater from './InventoryAllocater'

describe('InventoryAllocater', () => {

    test('happy case, exact inventory match', () => {
        expect(InventoryAllocater.allocate(
            { apple: 1 },
            [{ name: 'owd', inventory: { apple: 1 } }]
        )).toEqual(
            [{ owd: { apple: 1 } }]
        )
    })

    test('not enough inventory, no allocations', () => {
        expect(InventoryAllocater.allocate(
            { apple: 1 },
            [{ name: 'owd', inventory: { apple: 0 } }]
        )).toEqual(
            []
        )
    })

    test('split an item across warehouses', () => {
        expect(InventoryAllocater.allocate(
            { apple: 10 },
            [{ name: 'owd', inventory: { apple: 5 } }, { name: 'dm', inventory: { apple: 5 } }]
        )).toEqual(
            [{ dm: { apple: 5 } }, { owd: { apple: 5 } }]
        )
    })

    test('split an item up until not enough inventory', () => {
        expect(InventoryAllocater.allocate(
            { apple: 15 },
            [{ name: 'owd', inventory: { apple: 5 } }, { name: 'dm', inventory: { apple: 5 } }]
        )).toEqual(
            [{ dm: { apple: 5 } }, { owd: { apple: 5 } }]
        )
    })

})