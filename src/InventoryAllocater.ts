import Inventory from './types/Inventory'
import Warehouse from './types/Warehouse'
import AllocateReturn from './types/InventoryAllocater/AllocateReturn'
import { forEach } from 'lodash'


class InventoryAllocater {

    /**
     * Distributes an order into allocations for each warehouse in given distribution list. Solutiion
     * assumes that order is generally small, and inventoryDistribution is generally large
     * @param order dictionary of inventory required to fill the order
     * @param inventoryDistribution list of warehouses and their inventories
     * @returns an allocation of items across warehouses
     */
    static allocate(order: Inventory, inventoryDistribution: Array<Warehouse>): AllocateReturn {
        order = { ...order } // clone
        let fill: any = {}

        forEach(order, (count, item) => { // for each ordered item...

            inventoryDistribution.some((w, i) => {  // check warehouses up until order fill
                if (!w.inventory[item]) return
                if (!fill[w.name]) fill[w.name] = {}

                let amount = Math.min(count, w.inventory[item])
                fill[w.name][item] = amount
                count -= amount
                if (count == 0) return false // no need to keep checking this item
            })

        })


        return Object.keys(fill).sort().map((key) => ({ [key]: fill[key] }))
    }

}


export default InventoryAllocater