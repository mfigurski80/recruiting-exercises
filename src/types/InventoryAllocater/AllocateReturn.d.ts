import Inventory from '../Inventory'

interface AllocateReturn {
    [index: number]: { [index: string]: Inventory }
}

export default AllocateReturn