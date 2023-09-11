import { computed, readonly } from 'vue';
import { computedGetter, getAction, getMutation, getStoreFromInstance, useMapping } from './util';
function computedState(store, namespace, prop) {
    let module = namespace.split('/').reduce((module, key) => module[key], store.state);
    return computed(() => {
        const val = module[prop];
        return typeof val === 'object' ? readonly(val) : val;
    });
}
export function useNamespacedState(storeOrNamespace, namespaceOrMap, map) {
    let store, namespace;
    if (arguments.length === 2) {
        store = getStoreFromInstance();
        map = namespaceOrMap;
        namespace = storeOrNamespace;
    }
    else {
        store = storeOrNamespace || getStoreFromInstance();
        namespace = namespaceOrMap;
    }
    return useMapping(store, namespace, map, computedState);
}
export function useNamespacedMutations(storeOrNamespace, namespaceOrMap, map) {
    let store, namespace;
    if (arguments.length === 2) {
        store = getStoreFromInstance();
        map = namespaceOrMap;
        namespace = storeOrNamespace;
    }
    else {
        store = storeOrNamespace || getStoreFromInstance();
        namespace = namespaceOrMap;
    }
    return useMapping(store, namespace, map, getMutation);
}
export function useNamespacedActions(storeOrNamespace, namespaceOrMap, map) {
    let store, namespace;
    if (arguments.length === 2) {
        store = getStoreFromInstance();
        map = namespaceOrMap;
        namespace = storeOrNamespace;
    }
    else {
        store = storeOrNamespace || getStoreFromInstance();
        namespace = namespaceOrMap;
    }
    return useMapping(store, namespace, map, getAction);
}
export function useNamespacedGetters(storeOrNamespace, namespaceOrMap, map) {
    let store, namespace;
    if (arguments.length === 2) {
        store = getStoreFromInstance();
        map = namespaceOrMap;
        namespace = storeOrNamespace;
    }
    else {
        store = storeOrNamespace || getStoreFromInstance();
        namespace = namespaceOrMap;
    }
    return useMapping(store, namespace, map, computedGetter);
}
export function createNamespacedHelpers(storeOrNamespace, namespace) {
    let store = undefined;
    if (arguments.length === 1) {
        namespace = storeOrNamespace;
    }
    else {
        store = storeOrNamespace;
        if (!namespace) {
            throw new Error('Namespace is missing to provide namespaced helpers');
        }
    }
    return {
        useState: (map) => useNamespacedState(store, namespace, map),
        useGetters: (map) => useNamespacedGetters(store, namespace, map),
        useMutations: (map) => useNamespacedMutations(store, namespace, map),
        useActions: (map) => useNamespacedActions(store, namespace, map),
    };
}
//# sourceMappingURL=namespaced.js.map