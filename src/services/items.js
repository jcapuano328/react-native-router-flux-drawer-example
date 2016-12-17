var items = require('./items.json');

module.exports = {
    getAll() {
        return new Promise((resolve, reject) => resolve(items));
    },
    get(id) {
        return new Promise((resolve, reject) => resolve(items.find((item,i) => item.id == id) || {}));
    }
};
