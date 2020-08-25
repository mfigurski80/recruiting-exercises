import InventoryAllocater from './InventoryAllocater'

describe('InventoryAllocater', () => {

    test('allocates to exact match in happy case', () => {
        expect(InventoryAllocater.allocate(
            { apple: 1 },
            [{ name: 'owd', inventory: { apple: 1 } }]
        )).toEqual(
            [{ owd: { apple: 1 } }]
        )
    })

    test('does not allocate when no stock', () => {
        expect(InventoryAllocater.allocate(
            { apple: 1 },
            [{ name: 'owd', inventory: { apple: 0 } }]
        )).toEqual(
            []
        )
    })

    test('splits an item allocation', () => {
        expect(InventoryAllocater.allocate(
            { apple: 10 },
            [{ name: 'owd', inventory: { apple: 5 } }, { name: 'dm', inventory: { apple: 5 } }]
        )).toEqual(
            [{ dm: { apple: 5 } }, { owd: { apple: 5 } }]
        )
    })

    test('splits an item allocation up to not enough inventory', () => {
        expect(InventoryAllocater.allocate(
            { apple: 15 },
            [{ name: 'owd', inventory: { apple: 5 } }, { name: 'dm', inventory: { apple: 5 } }]
        )).toEqual(
            [{ dm: { apple: 5 } }, { owd: { apple: 5 } }]
        )
    })

    test('does not allocate for empty order', () => {
        expect(InventoryAllocater.allocate(
            {},
            [{ name: 'owd', inventory: { apple: 5 } }]
        )).toEqual(
            []
        )
    })

    test('does not allocate for new item', () => {
        expect(InventoryAllocater.allocate(
            { zorg: 5 },
            [{ name: 'owd', inventory: { apple: 5 } }]
        )).toEqual(
            []
        )
    })

    test('allocates multiple items at once', () => {
        expect(InventoryAllocater.allocate(
            { apple: 2, banana: 2 },
            [{ name: 'owd', inventory: { apple: 2, banana: 1 } }, { name: 'dm', inventory: { banana: 1 } }]
        )).toEqual(
            [{ dm: { banana: 1 } }, { owd: { apple: 2, banana: 1 } }]
        )
    })

})