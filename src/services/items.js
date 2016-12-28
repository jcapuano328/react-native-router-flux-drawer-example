var items = require('./items.json');


module.exports = {
    getAll() {
        return new Promise((resolve, reject) => resolve(items));
    },
    get(id) {
        return new Promise((resolve, reject) => resolve(items.find((item,i) => item.id == id) || {}));
    },
    save(item) {
        return new Promise(function(resolve, reject) {
            let idx = items.find((i) => i.id == item.id);
            if (idx > -1) {
                items[idx] = item;
            } else {
                items.push(item);
            }
            resolve(item);
        });
    }
};
