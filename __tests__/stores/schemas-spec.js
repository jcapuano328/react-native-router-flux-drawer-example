import { normalize } from 'normalizr';
import { denormalize } from 'denormalizr';
import * as Schemas from '../../src/stores/schemas';

describe('schemas', () => {
    var env = {};
    beforeEach(() => {
        env = {};
        env.before = require('../../src/services/items.json');
        env.after = normalize(env.before, Schemas.items);
        env.back = denormalize(env.after.result, env.after.entities, Schemas.items);
    });

    it('should be normalized', () => {
        //console.log(JSON.stringify(env.after, null, 4));
        expect(env.after).toBeDefined();
    });

    it('should be back to denormalized', () => {
        //console.log(JSON.stringify(env.back, null, 4));
        expect(env.back).toEqual(env.before);
    });
});
