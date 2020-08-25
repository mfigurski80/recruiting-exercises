import Inventory from './interfaces/Inventory'
import Warehouse from './interfaces/Warehouse'
import { map } from 'lodash'

var data: [Warehouse] = [
    { name: 'tx', inventory: { banana: 4 } }
]
var order: Inventory = { banana: 5, orange: 10 }

class InventoryAllocater {
    allocate(order: Inventory, inventoryDistribution: [Warehouse]): any {
        console.log('Allocating')
    }
}


export default InventoryAllocater