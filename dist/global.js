import { computed } from 'vue';
import { computedGetter, getAction, getMutation, getStoreFromInstance, useMapping } from './util';
function computedState(store, prop) {
    return computed(() => {
        const val = store.state[prop];
        return val;
    });
}
export function useStore() {
    return getStoreFromInstance();
}
export function useState(storeOrMap, map) {
    let store = storeOrMap;
    if (arguments.length === 1) {
        map = store;
        store = getStoreFromInstance();
    }
    return useMapping(store, null, map, computedState);
}
export function useGetters(storeOrMap, map) {
    let store = storeOrMap;
    if (arguments.length === 1) {
        map = store;
        store = getStoreFromInstance();
    }
    return useMapping(store, null, map, computedGetter);
}
export function useMutations(storeOrMap, map) {
    let store = storeOrMap;
    if (arguments.length === 1) {
        map = store;
        store = getStoreFromInstance();
    }
    return useMapping(store, null, map, getMutation);
}
export function useActions(storeOrMap, map) {
    let store = storeOrMap;
    if (arguments.length === 1) {
        map = store;
        store = getStoreFromInstance();
    }
    return useMapping(store, null, map, getAction);
}
//# sourceMappingURL=global.js.map