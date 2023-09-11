export declare function wrapStore(store: any): {
    createNamespacedHelpers: (namespace?: string | undefined) => {
        useState: (map?: never[] | undefined) => import("./util").ComputedRefTypes<unknown>;
        useGetters: (map?: never[] | undefined) => import("./util").ExtractGetterTypes<unknown>;
        useMutations: (map?: never[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
        useActions: (map?: never[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
    };
    useActions: (map?: never[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
    useGetters: (map?: never[] | undefined) => import("./util").ExtractGetterTypes<unknown>;
    useMutations: (map?: never[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
    useState: (map?: never[] | undefined) => import("./util").ComputedRefTypes<unknown>;
};
