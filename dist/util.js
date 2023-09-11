import { computed, readonly, getCurrentInstance } from 'vue';
function runCB(cb, store, namespace, prop) {
    if (cb.length === 3) { // choose which signature to pass to cb function
        return cb(store, namespace, prop);
    }
    else {
        return cb(store, namespace ? `${namespace}/${prop}` : prop);
    }
}
function useFromArray(store, namespace, props, cb) {
    return props.reduce((result, prop) => {
        result[prop] = runCB(cb, store, namespace, prop);
        return result;
    }, {});
}
function useFromObject(store, namespace, props, cb) {
    const obj = {};
    for (let key in props) {
        if (props.hasOwnProperty(key)) {
            obj[key] = runCB(cb, store, namespace, props[key]);
        }
    }
    return obj;
}
export function computedGetter(store, prop) {
    return computed(() => {
        const val = store.getters[prop];
        return typeof val === 'object' ? readonly(val) : val;
    });
}
export function getMutation(store, mutation) {
    return function () {
        return store.commit.apply(store, [mutation, ...arguments]);
    };
}
export function getAction(store, action) {
    return function () {
        return store.dispatch.apply(store, [action, ...arguments]);
    };
}
export function useMapping(store, namespace, map, cb) {
    if (!map) {
        return {};
    }
    if (map instanceof Array) {
        return useFromArray(store, namespace, map, cb);
    }
    return useFromObject(store, namespace, map, cb);
}
export function getStoreFromInstance() {
    const vm = getCurrentInstance();
    if (!vm) {
        throw new Error('You must use this function within the "setup()" method, or insert the store as first argument.');
    }
    return vm.proxy?.$store;
}
//# sourceMappingURL=util.js.map