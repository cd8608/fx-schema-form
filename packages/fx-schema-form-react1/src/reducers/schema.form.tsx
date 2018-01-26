import { createAction, createReducer, SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import { is, Map, List, fromJS } from "immutable";

import { FxReducer } from "./reducer";
import { TreeMap } from "../libs/tree";

export interface SchemaFormActions {
    createForm: SimpleActionCreator<{ key: string, data: any }>;
    updateItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>;
    updateItemMeta: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>;
}

export class SchemaFormReducer<T> implements FxReducer {

    private createForm: SimpleActionCreator<{ key: string, data: any }> = createAction("创建一个表单数据");
    private updateItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }> = createAction("更新一个表单数据");
    private updateItemMeta: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }> = createAction("更新一个表单元数据");

    /**
     * 构造
     * @param initialState 初始化状态
     */
    constructor(private initialState: any) { }
    /**
     * 获取当前的actions
     */
    public get actions(): SchemaFormActions {
        return {
            createForm: this.createForm,
            updateItemData: this.updateItemData,
            updateItemMeta: this.updateItemMeta
        };
    }
    /**
     * 返回当前的reducer
     */
    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.createForm as any]: this.createFormHandle.bind(this),
            [this.updateItemData as any]: this.updateItemDataHandle.bind(this),
            [this.updateItemMeta as any]: this.updateItemMetaHandle.bind(this),
        }, this.initialState);
    }

    private resolveKeys(state: Map<string, any>, keys: Array<string>) {
        if (state.hasIn(keys)) {
            return state;
        }

        for (let i = 0, n = keys.length; i < n; i++) {
            let mKeys = [].concat(keys).splice(0, i + 1);

            // 如果key不存在，遍历生成数据结构
            if (!state.hasIn(mKeys)) {
                mKeys.pop();
                if (!state.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        state = state.setIn(mKeys, List());
                    } else {
                        state = state.setIn(mKeys, Map());
                    }
                }
            } else if (i < n) {
                // 如果key存在，则判断数据结构是否与结构一致
                let data = state.getIn(mKeys);

                if (!Map.isMap(data) && !List.isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, List());
                    } else {
                        state = state.setIn(mKeys, Map());
                    }
                }
            }
        }

        return state;
    }

    /**
     * 创建一份表单数据
     * @param state   当前的state
     * @param param1  参数值，key 和 data
     */
    private createFormHandle(state: Map<string, any>, { key, data }: any): Map<string, any> {
        if (state.has(key)) {
            state = state.remove(key);
        }

        const meta = new TreeMap(key, null);
        const stateData = Map<string, any>({
            meta: meta,
            data: fromJS(data)
        });

        return state.set(key, stateData);
    }
    /**
     * 修改一个数据
     * 合并parrentKeys和keys，中间加入一个“data”
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemDataHandle(state: Map<string, any>, { parentKeys, keys, data }: any): Map<string, any> {
        let dataKeys = parentKeys.concat(["data", ...keys]);

        state = this.resolveKeys(state, dataKeys);

        return state.setIn(dataKeys, fromJS(data));
    }
    /**
     * 修改一个数据的元数据
     * 通过parentKeys取得根节点
     * 通过keys合成元素的节点路径，从根节点获取数据
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemMetaHandle(state: Map<string, any>, { parentKeys, keys, data }: any): Map<string, any> {
        let metaKeys: string[] = parentKeys.concat(["meta"]);
        let rootNode: TreeMap = state.getIn(metaKeys);
        let childNode: TreeMap = rootNode.addChild(parentKeys.concat(keys));
        let value = childNode.value;

        if (childNode.value) {
            childNode.value = childNode.value.merge(data);
        } else {
            childNode.value = fromJS(data);
        }

        if (is(childNode.value, value)) {
            return state;
        }

        let newRoot = Object.assign({}, rootNode, TreeMap.prototype);

        return state.setIn(metaKeys, newRoot);
    }
}
