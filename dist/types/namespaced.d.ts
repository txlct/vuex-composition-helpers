import { KnownKeys, ComputedRefTypes, ExtractTypes, ExtractGetterTypes } from './util';
import { Store } from 'vuex';
export type Nullish = null | undefined;
export declare function useNamespacedState<TState = any>(storeOrNamespace: Store<any> | string | Nullish, namespaceOrMap: string | KnownKeys<TState>[], map?: KnownKeys<TState>[]): ComputedRefTypes<TState>;
export declare function useNamespacedMutations<TMutations = any>(storeOrNamespace: Store<any> | string | Nullish, namespaceOrMap: string | KnownKeys<TMutations>[], map?: KnownKeys<TMutations>[]): ExtractTypes<TMutations, Function>;
export declare function useNamespacedActions<TActions = any>(storeOrNamespace: Store<any> | string | Nullish, namespaceOrMap: string | KnownKeys<TActions>[], map?: KnownKeys<TActions>[]): ExtractTypes<TActions, Function>;
export declare function useNamespacedGetters<TGetters = any>(storeOrNamespace: Store<any> | string | Nullish, namespaceOrMap: string | KnownKeys<TGetters>[], map?: KnownKeys<TGetters>[]): ExtractGetterTypes<TGetters>;
export declare function createNamespacedHelpers<TState = any, TGetters = any, TActions = any, TMutations = any>(storeOrNamespace: Store<any> | string, namespace?: string): {
    useState: (map?: KnownKeys<TState>[]) => ComputedRefTypes<TState>;
    useGetters: (map?: KnownKeys<TGetters>[]) => ExtractGetterTypes<TGetters>;
    useMutations: (map?: KnownKeys<TMutations>[]) => ExtractTypes<TMutations, Function>;
    useActions: (map?: KnownKeys<TActions>[]) => ExtractTypes<TActions, Function>;
};
