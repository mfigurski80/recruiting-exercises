import Inventory from './types/Inventory'
import Warehouse from './types/Warehouse'
import AllocateReturn from './types/InventoryAllocater/AllocateReturn'
import { map } from 'lodash'

var data: [Warehouse] = [{ name: 'owd', inventory: { apple: 1 } }]
var order: Inventory = { banana: 5, orange: 10 }

class InventoryAllocater {
    static allocate(order: Inventory, inventoryDistribution: Array<Warehouse>): AllocateReturn {
        console.log('Allocating')

        return []
    }
}


export default InventoryAllocater