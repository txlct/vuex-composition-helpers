import { Store } from 'vuex/types';
import { ExtractGetterTypes, ExtractTypes, KnownKeys, ComputedRefTypes } from './util';
export declare function useStore<TState = any>(): Store<TState>;
export declare function useState<TState = any>(storeOrMap: Store<TState> | KnownKeys<TState>[], map?: KnownKeys<TState>[]): ComputedRefTypes<TState>;
export declare function useGetters<TGetters = any>(storeOrMap: Store<any> | KnownKeys<TGetters>[], map?: KnownKeys<TGetters>[]): ExtractGetterTypes<TGetters>;
export declare function useMutations<TMutations = any>(storeOrMap: Store<any> | KnownKeys<TMutations>[], map?: KnownKeys<TMutations>[]): ExtractTypes<TMutations, Function>;
export declare function useActions<TActions = any>(storeOrMap: Store<any> | KnownKeys<TActions>[], map?: KnownKeys<TActions>[]): ExtractTypes<TActions, Function>;
