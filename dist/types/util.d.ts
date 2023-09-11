import { ComputedRef, DeepReadonly } from 'vue';
import { Store } from 'vuex/types';
declare type OmitFirstArg<F, TReturn> = F extends (x: any, ...args: infer P) => any ? (...args: P) => TReturn : never;
declare type InferType<T, TUnknown = any> = T extends (...args: any) => any ? OmitFirstArg<T, ReturnType<T>> : T extends unknown ? TUnknown : T;
declare type InferGetterType<T> = T extends (...args: any) => any ? ReturnType<T> : any;
export declare type ExtractTypes<O, TUnknown = any> = {
    readonly [K in keyof O]: InferType<O[K], TUnknown>;
};
export declare type ExtractGetterTypes<O> = {
    readonly [K in keyof O]: ComputedRef<DeepReadonly<InferGetterType<O[K]>>>;
};
export declare type KnownKeysWithAllPrimitiveTypes<T> = {
    [K in keyof T]: string extends K ? (T extends any ? any : never) : number extends K ? never : K;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
export declare type KnownKeys<T> = Exclude<KnownKeysWithAllPrimitiveTypes<T>, symbol>;
export declare type ComputedRefTypes<T> = {
    readonly [Key in keyof T]: ComputedRef<DeepReadonly<T[Key]>>;
};
export declare function computedGetter<T = any>(store: any, prop: string): ComputedRef<T>;
export declare function getMutation(store: any, mutation: string): Function;
export declare function getAction(store: any, action: string): Function;
export declare function useMapping<T>(store: any, namespace: string | null, map: KnownKeys<T>[] | Array<string> | undefined, cb: Function): any;
export declare function getStoreFromInstance<T = any>(): Store<T>;
export {};
