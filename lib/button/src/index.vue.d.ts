declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * 防抖，默认一秒
     */
    time: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 默认开启防抖
     */
    debounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: "click", ...args: any[]) => void;
    timer: import("vue").Ref<number>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * 防抖，默认一秒
     */
    time: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 默认开启防抖
     */
    debounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    time: number;
    debounce: boolean;
}, {}>;
export default _sfc_main;
