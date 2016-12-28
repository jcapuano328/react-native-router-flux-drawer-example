import { Schema, arrayOf } from 'normalizr';
/*
    items: [
        {
            id: int,
            status: string,
            name: string,
            desc: string
            subitems: [
                {
                    id: int,
                    status: string,
                    name: string,
                    desc: string
                }
            ]
        }
    ]

*/

const item = new Schema('items');
const subitem = new Schema('subitems');
const items = arrayOf(item);
const subitems = arrayOf(subitem);
item.define({
    subitems: subitems
});

export { item, items, subitem, subitems };
