!function t(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("json-pointer"),require("fx-schema-form-core"),require("recompose"),require("react-redux"),require("reselect"),require("lodash.isequal"),require("uuid"),require("redux-act"),require("lodash.clonedeep")):"function"==typeof define&&define.amd?define("fx-schema-form-antd",["react","json-pointer","fx-schema-form-core","recompose","react-redux","reselect","lodash.isequal","uuid","redux-act","lodash.clonedeep"],r):"object"==typeof exports?exports["fx-schema-form-antd"]=r(require("react"),require("json-pointer"),require("fx-schema-form-core"),require("recompose"),require("react-redux"),require("reselect"),require("lodash.isequal"),require("uuid"),require("redux-act"),require("lodash.clonedeep")):e["fx-schema-form-antd"]=r(e.react,e["json-pointer"],e["fx-schema-form-core"],e.recompose,e["react-redux"],e.reselect,e["lodash.isequal"],e.uuid,e["redux-act"],e["lodash.clonedeep"])}(this,function(t,e,r,n,a,o,i,s,c,u){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function e(){return t.default}:function e(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=11)}([function(t,e,r){"use strict";function n(t,e){function r(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function a(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&(r[n[a]]=t[n[a]]);return r}function o(t,e,r,n){var a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n,i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o}function i(t,e){return function(r,n){e(r,n,t)}}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function c(t,e,r,n){return new(r||(r=Promise))(function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){t.done?a(t.value):new r(function(e){e(t.value)}).then(i,s)}c((n=n.apply(t,e||[])).next())})}function u(t,e){function r(t){return function(e){return n([t,e])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[0,s.value]),r[0]){case 0:case 1:s=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){a.label=r[1];break}if(6===r[0]&&a.label<s[1]){a.label=s[1],s=r;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(r);break}s[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{o=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},o,i,s,c;return c={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}function m(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function p(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function h(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),a,o=[],i;try{for(;(void 0===e||e-- >0)&&!(a=n.next()).done;)o.push(a.value)}catch(t){i={error:t}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(i)throw i.error}}return o}function d(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t}function f(t){return this instanceof f?(this.v=t,this):new f(t)}function l(t,e,r){function n(t){u[t]&&(m[t]=function(e){return new Promise(function(r,n){p.push([t,e,r,n])>1||a(t,e)})})}function a(t,e){try{o(u[t](e))}catch(t){c(p[0][3],t)}}function o(t){t.value instanceof f?Promise.resolve(t.value.v).then(i,s):c(p[0][2],t)}function i(t){a("next",t)}function s(t){a("throw",t)}function c(t,e){t(e),p.shift(),p.length&&a(p[0][0],p[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u=r.apply(t,e||[]),m,p=[];return m={},n("next"),n("throw"),n("return"),m[Symbol.asyncIterator]=function(){return this},m}function y(t){function e(e,a){t[e]&&(r[e]=function(r){return(n=!n)?{value:f(t[e](r)),done:"return"===e}:a?a(r):r})}var r,n;return r={},e("next"),e("throw",function(t){throw t}),e("return"),r[Symbol.iterator]=function(){return this},r}function g(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator];return e?e.call(t):"function"==typeof p?p(t):t[Symbol.iterator]()}function v(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}e.d=n,r.d(e,"a",function(){return O}),e.c=o,e.b=c,e.e=u;var b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},O=Object.assign||function t(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}},function(e,r){e.exports=t},function(t,e){t.exports=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(12);r.d(e,"SchemaForm",function(){return n.a});var a=r(29);r.d(e,"SchemaFormItem",function(){return a.a});var o=r(10);r.d(e,"FormReducer",function(){return o.a});var i=r(31);r.d(e,"defaultTheme",function(){return i.a}),r.d(e,"nsFactory",function(){return i.b});var s=r(9);r.d(e,"createForms",function(){return s.b}),r.d(e,"SchemaFormCreate",function(){return s.a});var c=r(6);r.d(e,"hocFactory",function(){return c.a});var u=r(5),m=r.n(u);m.a.set=function t(e,r,n){for(var a=Array.isArray(r)?r:m.a.parse(r),o=a[0],i=0,s=a.length;i<s-1;++i){var c=a[i];"-"===c&&Array.isArray(e)&&(c=e.length),o=a[i+1],c in e||(o.match(/^(\d+|-)$/)?e[c]=[]:e[c]={}),!e[c]&&o&&(e[c]=Number.isNaN(1*o)?{}:[]),e=e[c]}return"-"===o&&Array.isArray(e)&&(o=e.length),e[o]=n,this}},function(t,e){t.exports=r},function(t,r){t.exports=e},function(t,e,r){"use strict";r.d(e,"a",function(){return h});var n=r(4),a=r.n(n),o=r(14),i=r(20),s=r(23),c=r(24),u=r(25),m=r(26),p=r(27),h=new n.BaseFactory,d={merge:o.a.bind(o.a,h),temp:i.a.bind(i.a,h),field:s.a.bind(s.a,h),theme:c.a.bind(c.a,h),validate:u.a.bind(u.a,h),array:m.a.bind(m.a,h),make:p.a.bind(p.a,h)};for(var f in d)if(d.hasOwnProperty(f)){var l=d[f];h.add(f,l),h.lock(f)}},function(t,e){t.exports=a},function(t,e,r){"use strict";r.d(e,"b",function(){return f}),r.d(e,"a",function(){return l});var n=r(5),a=r.n(n),o=r(15),i=r.n(o),s=r(9),c=function(t,e){return e.getCurrentState?e.getCurrentState(t,e):t[e.schemaKey]},u=function(t,e){var r=c(t,e).data;return void 0===r?{}:r},m=function(t,e){var r=e.schemaKey,a=e.mergeSchema,o=a.keys,i=void 0===o?[]:o,s=c(t,e).data,u=void 0===s?{}:s;return n.has(u,n.compile(i))?n.get(u,n.compile(i)):void 0},p=function(t,e){var r=e.schemaKey,n=c(t,e).meta;return{isLoading:n.isLoading,isValid:n.isValid}},h=function(t,e){var r=e.schemaKey,n=e.mergeSchema,a=n.keys,o=void 0===a?[]:a,i=s.a.metas[r],u=c(t,e).meta;return i.getMeta(o,"array"!==n.type)},d=function(t,e){var r=e.schemaKey,n=s.a.metas[r];return e.schemaFormOptions&&e.schemaFormOptions.ajv&&n.init(e.schemaFormOptions,e.schemaKey),n.actions},f=Object(o.createSelector)([h,m,u],function(t,e,r){return{meta:t,formData:r,formItemData:e}}),l=Object(o.createSelector)([d,p],function(t,e){return{actions:t,metaState:e}})},function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(10),a=r(18),o=function(){function t(){}return t.prototype.createOne=function(e,r,o,i){var s=new a.a,c=o.validate(i,r).catch(function(){console.log("")}),u=new n.a({data:r,meta:s.data},s);return s.actions=u.actions,t.metas[e]=s,u},t.prototype.createMuti=function(e){void 0===e&&(e={});var r={};for(var o in e)if(e.hasOwnProperty(o)){var i=e[o],s=new a.a,c=new n.a({data:i,meta:s},s);s.actions=c.actions,t.metas[o]=s,i&&(r[o]=c.reducer)}return r},t.metas={},t}();e.b=new o},function(t,e,r){"use strict";r.d(e,"a",function(){return u});var n=r(16),a=r.n(n),o=r(5),i=r.n(o),s=r(17),c=r.n(s),u=function(){function t(t,e){this.initialState=t,this.meta=e,this.updateItem=Object(n.createAction)("更新表单值"),this.toggleItem=Object(n.createAction)("显示/隐藏元素"),this.removeItem=Object(n.createAction)("删除元素"),this.addItem=Object(n.createAction)("添加元素"),this.switchItem=Object(n.createAction)("元素移位"),this.updateItemMeta=Object(n.createAction)("更新元素的meta信息"),this.updateMetaState=Object(n.createAction)("更改meta的状态"),this.updateData=Object(n.createAction)("更改data的值")}return Object.defineProperty(t.prototype,"actions",{get:function(){return{updateItem:this.updateItem,toggleItem:this.toggleItem,removeItem:this.removeItem,addItem:this.addItem,switchItem:this.switchItem,updateMetaState:this.updateMetaState,updateItemMeta:this.updateItemMeta,updateData:this.updateData}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"reducer",{get:function(){return Object(n.createReducer)((t={},t[this.updateItem]=this.updateItemHandle.bind(this),t[this.toggleItem]=this.toggleItemHandle.bind(this),t[this.addItem]=this.addItemHandle.bind(this),t[this.removeItem]=this.removeItemHandle.bind(this),t[this.switchItem]=this.switchItemHandle.bind(this),t[this.updateMetaState]=this.updateMetaStateHandle.bind(this),t[this.updateItemMeta]=this.updateMetaHandle.bind(this),t[this.updateData]=this.updateDataHandle.bind(this),t),this.initialState);var t},enumerable:!0,configurable:!0}),t.prototype.updateDataHandle=function(t,e){return Object.assign({},t,{data:e})},t.prototype.getOrigin=function(t){return{originData:c()(t.data),originMeta:c()(t.meta)}},t.prototype.updateMetaStateHandle=function(t,e){var r=e.isLoading,n=e.isValid,a=e.meta,o=this.getOrigin(t).originMeta;return a&&(o=a),void 0!==r&&(o.isLoading=r),void 0!==n&&(o.isValid=n),Object.assign({},t,{meta:o})},t.prototype.updateItemHandle=function(t,e){var r=e.keys,n=e.data,a=e.meta,o=this.getOrigin(t).originData,s=this.meta.getKey(r).normalKey;return i()(o).set(s,n),this.meta.setMeta(r,a),Object.assign({},t,{data:o,meta:this.meta.data})},t.prototype.updateMetaHandle=function(t,e){var r=e.keys,n=e.meta,a=this.getOrigin(t).originData,o=this.meta.getKey(r).normalKey,i=this.meta.getMeta(r,!1)||{};return this.meta.setMeta(r,n),Object.assign({},t,{meta:this.meta.data})},t.prototype.toggleItemHandle=function(t,e){var r=e.keys,n=this.meta.getKey(r).normalKey,a=this.meta.getMeta(r,!1)||{};return this.meta.setMeta(r,Object.assign({},a,{isShow:void 0!==a.isShow&&!a.isShow}),!1),Object.assign({},t,{meta:this.meta.data})},t.prototype.addItemHandle=function(t,e){var r=e.keys,n=e.data,a=this.getOrigin(t).originData,o=this.meta.getKey(r).normalKey,s=i()(a).has(o)?i()(a).get(o):[];return i()(a).set(o,s.concat([n])),Object.assign({},t,{data:a})},t.prototype.removeItemHandle=function(t,e){var r=e.keys,n=e.index,a=this.getOrigin(t).originData,o=this.meta.getKey(r.concat([n.toString()])).normalKey;return a&&i()(a).has(o)&&i()(a).remove(o),this.meta.removeMeta(r.concat([n.toString()])),Object.assign({},t,{data:a,meta:this.meta.data})},t.prototype.switchItemHandle=function(t,e){var r=e.keys,n=e.curIndex,a=e.switchIndex,o=this.getOrigin(t).originData,s=this.meta.getKey(r).normalKey,c=i()(o).get(s);return u=[c[a],c[n]],c[n]=u[0],c[a]=u[1],i()(o).set(s,c),this.meta.switchMeta(r,n,a),Object.assign({},t,{data:o,meta:this.meta.data});var u},t}()},function(t,e,r){t.exports=r(3)},function(t,e,r){"use strict";r.d(e,"a",function(){return m});var n=r(0),a=r(1),o=r.n(a),i=r(13),s=r(3),c=r(28),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.d(e,t),e.prototype.render=function(){var t=this.props,e=t.children,r=t.mergeSchemaList,n=t.schemaKey,a=t.arrayItems,i=t.arrayIndex,u=t.globalOptions,m=t.RootComponent,p=t.schemaFormOptions,h=t.formDefaultData,d=t.getCurrentState,f=m;return f||(f=c.a),o.a.createElement(f,null,r.map(function(t,e){var c=!1;return"number"==typeof i&&(t.keys=t.keys.map(function(t){return"-"===t?i:t})),o.a.createElement(s.SchemaFormItem,{key:n+"-"+e.toString()+"}",getCurrentState:d,schemaKey:n,arrayIndex:i,arrayItems:a,formDefaultData:h,mergeSchemaList:r,mergeSchema:t,schemaFormOptions:p,globalOptions:u})}),e)},e}(o.a.Component),m=Object(i.a)(u)},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(2),a=r.n(n),o=r(6),i=Object(n.compose)(o.a.get("merge"),n.pure)},function(t,e,r){"use strict";r.d(e,"a",function(){return f});var n=r(0),a=r(1),o=r.n(a),i=r(4),s=r.n(i),c=r(7),u=r.n(c),m=r(2),p=r.n(m),h=r(8),d=function(t,e){var r=e.actions;for(var n in r)if(r.hasOwnProperty(n)){var a=r[n];a.assigned(t)||a.assignTo(t)}return{actions:r}},f=function(t,e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.d(r,t),r.prototype.render=function(){var t=this.props,r=t.schema,a=t.uiSchema,s=t.parentKeys,c=t.schemaFormOptions,u=t.schemaKey,m=t.actions,p=t.formData,h,d={};return u||(u=(Date.now()+Math.random()).toString()),c=c||{avjOptions:{allErrors:!0,jsonPointers:!0,verbose:!0,useDefaults:!0,errorDataPath:"property"}},c.parentKeys=s||[],h=i.schemaMerge.merge(u,r,a,c),o.a.createElement(e,n.a({schemaFormOptions:c||{},schemaKey:u,mergeSchemaList:h},this.props))},r=n.c([Object(m.compose)(Object(c.connect)(h.a),Object(c.connect)(null,d),Object(m.onlyUpdateForKeys)(["schema","uiSchema","metaState"]))],r)}(o.a.Component)}},function(t,e){t.exports=o},function(t,e){t.exports=c},function(t,e){t.exports=u},function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(0),a=r(19),o=r.n(a),i=r(5),s=r.n(i),c=function(){function t(){this.data={map:{},meta:{}},this.actions={},this.isInit=!1}return t.prototype.init=function(t,e){this.isInit||(this.isInit=!0,this.schemaFormOptions=t,this.curKey=e)},t.prototype.validateAll=function(t){return n.b(this,void 0,void 0,function(){var e=this,r,a,o;return n.e(this,function(n){switch(n.label){case 0:for(r in this.data.map)this.data.map.hasOwnProperty(r)&&(a=this.data.map[r],!1===a.isValid&&(a.isValid=!0));this.data.isLoading=!0,this.data.isValid=!1,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.schemaFormOptions.ajv.compile(this.schemaFormOptions.ajv.getSchema(this.curKey).schema)(t)];case 2:return n.sent(),this.data.isValid=!0,[3,4];case 3:return o=n.sent(),o.errors.forEach(function(t){var r=s.a.parse(t.dataPath),n=e.getMeta(r);e.setMeta(r,{dirty:!0,isLoading:!1,isValid:!1,errors:[],errorText:t.message})}),[3,4];case 4:return[2,this.data]}})})},t.prototype.getKey=function(t){var e=s.a.compile(t),r=s.a.escape(e);return{schemaKey:t.map(function(t){return Number.isNaN(Number(t))?t:"-"}).join("/"),normalKey:e,originEscapeKey:r,escapeKey:"/"+r}},t.prototype.setMeta=function(t,e,r){void 0===r&&(r=!0);var n=this.getKey(t),a=n.normalKey,o=n.escapeKey,i=n.originEscapeKey,s=n.schemaKey,c=this.getUuid({normalKey:a,escapeKey:o,originEscapeKey:i,schemaKey:s}),u=this.getCurMetaData(c);c!==o&&this.setCurMetaUuid(a,c),this.setCurMetaData(c,Object.assign({},u,e))},t.prototype.getUuid=function(t){var e=t.normalKey,r=t.escapeKey,n=t.originEscapeKey,a=t.schemaKey,i=s()(this.data.map),c=s()(this.data.meta),u,m;if(this.schemaFormOptions.map.has(a)){if(["array","object"].indexOf(this.schemaFormOptions.map.get(a).type)>=0)return r}return i.has(r)?r:(c.has(e)&&(u=c.get(e),m=u),"string"==typeof u&&u||(m="/"+s.a.escape("/"+o()())),m)},t.prototype.getMeta=function(t,e){void 0===e&&(e=!0);var r=this.getKey(t),n=r.normalKey,a=r.escapeKey,o=r.originEscapeKey,i=r.schemaKey,s=this.getUuid({normalKey:n,escapeKey:a,originEscapeKey:o,schemaKey:i});return this.getCurMetaData(s)},t.prototype.switchMeta=function(t,e,r){var n=this.getKey(t),a=n.normalKey,o=n.escapeKey,i=n.schemaKey,c=n.originEscapeKey;if(s()(this.data.meta).has(a)){var u=s()(this.data.meta).get(a);m=[u[r],u[e]],u[e]=m[0],u[r]=m[1],s()(this.data.meta).set(a,u);var m}},t.prototype.removeMeta=function(t){var e=s()(this.data.map),r=s()(this.data.meta),n=this.getKey(t),a=n.normalKey,o=n.escapeKey,i=n.originEscapeKey,c=n.schemaKey,u=this.getUuid({normalKey:a,escapeKey:o,originEscapeKey:i,schemaKey:c}),m=new RegExp("^"+i,"ig");for(var p in this.data.map)if(this.data.map.hasOwnProperty(p)){var h=this.getKey(s.a.parse(p));m.test(h.originEscapeKey)&&e.remove(h.escapeKey)}if(r.has(a)&&r.get(a)){var d=s.a.dict(r.get(a));r.remove(a);for(var p in d)if(d.hasOwnProperty(p)){var f=d[p];e.has(f)&&e.remove(f)}}e.has(u)&&e.remove(u)},t.prototype.getCurMetaData=function(t){return s()(this.data.map).has(""+t)?s()(this.data.map).get(""+t):{isShow:!0}},t.prototype.setCurMetaData=function(t,e){s()(this.data.map).set(""+t,e)},t.prototype.setCurMetaUuid=function(t,e){s()(this.data.meta).set(t,e)},t}()},function(t,e){t.exports=s},function(t,e,r){"use strict";r.d(e,"a",function(){return d});var n=r(0),a=r(1),o=r.n(a),i=r(2),s=r.n(i),c=r(21),u=r.n(c),m=r(22),p=r.n(m),h=Object(i.compose)(Object(i.lifecycle)({shouldComponentUpdate:function(t){var e=this.props.getHocOptions(),r=["isShow","isValid","errorText","isLoading"],n=p()(t.formItemData,this.props.formItemData),a=p()(u()(t.meta,r),u()(this.props.meta,r)),o=!n||!a,i=e.temp||{};if(i.equalKeys&&!o){var s=t.formData,c=void 0===s?{}:s,m=this.props.formData,h=void 0===m?{}:m;o=i.equalKeys.reduce(function(t,e){return t&&p()(c[e],c[e])},o)}return o}})),d=function(t,e){return function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.tempField="ui:temp",e}return n.d(r,t),r.prototype.render=function(){var t=this,r=this.props,a=r.mergeSchema,i=r.globalOptions,s=a.uiSchema,c=void 0===s?{options:{}}:s,u=a.keys,m=this.getTemplates(),p=c.options||{},h=0;return m.reduce(function(e,r){var a=r.key,s=r.Temp;return o.a.createElement(s,n.a({globalOptions:i,tempKey:a,uiSchemaOptions:p,key:u.join(".")+a+h++},t.props),e)},o.a.createElement(e,n.a({key:u.join("."),uiSchemaOptions:p},this.props)))},r.prototype.getTemplates=function(){var t=this.props,e=t.mergeSchema,r=t.globalOptions,n=t.currentTheme,a=e.uiSchema,o=void 0===a?{options:{}}:a,i=e.keys,s=e.type,c=r[s]||{},u=o[this.tempField]||c[this.tempField]||r[this.tempField]||"default",m=[];return"string"==typeof u?m.push({key:u,Temp:n.tempFactory.get(u)}):[].concat(u).reverse().forEach(function(t,e){n.tempFactory.has(t||"default")?m.push({key:t,Temp:n.tempFactory.get(t||"default")}):console.error("不存在"+t+"的temp！")}),m},r=n.c([h],r)}(o.a.Component)}},function(t,e,r){"use strict";e.__esModule=!0;var n=function t(e,r){for(var n={},a=0;a<r.length;a++){var o=r[a];e.hasOwnProperty(o)&&(n[o]=e[o])}return n};e.default=n},function(t,e){t.exports=i},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(0),a=r(1),o=r.n(a),i=function(t,e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.d(r,t),r.prototype.shouldComponentUpdate=function(){return!1},r.prototype.render=function(){var t=this.props,r=t.mergeSchema,a=t.currentTheme,i=r.uiSchema,s=void 0===i?{theme:"",field:"",widget:""}:i,c,u;"object"==typeof r.type&&(r.type=r.type[0]);var m=s.field||r.type;if("object"==typeof m&&m.length&&(m=m[0]),!a.fieldFactory.has(s.field||r.type))return console.error("找不到field："+(s.field||r.type)),null;c=a.fieldFactory.get(s.field||r.type);var p=s.widget||r.type;return"object"==typeof p&&p.length&&(p=p[0]),a.widgetFactory.has(s.widget||r.type)?u=a.widgetFactory.get(s.widget||r.type):console.warn("找不到widget："+(s.widget||r.type),r),o.a.createElement(e,n.a({},this.props,{FieldComponent:c,WidgetComponent:u}))},r}(o.a.Component)}},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(0),a=r(1),o=r.n(a),i=r(3),s=function(t,e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.d(r,t),r.prototype.render=function(){var t=this.props.mergeSchema,r=t.uiSchema,a=void 0===r?{theme:"",field:""}:r,s;if(!i.nsFactory.has(a.theme||"default"))throw new Error("没有找到"+(a.theme||"default")+"的样式！");return s=i.nsFactory.get(a.theme||"default"),o.a.createElement(e,n.a({currentTheme:s},this.props))},r}(o.a.Component)}},function(t,e,r){"use strict";r.d(e,"a",function(){return h});var n=r(0),a=r(1),o=r.n(a),i=r(7),s=r.n(i),c=r(2),u=r.n(c),m=r(8),p=function(t,e){var r=e.mergeSchema,n=e.actions,a=e.schemaFormOptions,o=e.schemaKey,i=e.formData,s=r.keys,c=a.ajv.compile(Object.assign({},r,{$async:!0,id:null}));for(var u in n)if(n.hasOwnProperty(u)){var m=n[u];m.assigned(t)||m.assignTo(t)}return{updateItemData:function(t){n.updateItem||console.error("没有更新的action！"),n.updateItem({keys:s,data:t,meta:{}})},validate:function(t){n.updateItem||console.error("没有更新的action！");var e={dirty:!0,isValid:!1,isLoading:!1,errorText:""};n.updateItemMeta({keys:s,meta:{isLoading:!0,isValid:!1,errorText:!1}}),c(t).then(function(){e.isValid=!0,n.updateItemMeta({keys:s,meta:e})}).catch(function(t){e.errorText=t.errors?a.ajv.errorsText(t.errors):t.message,n.updateItemMeta({keys:s,meta:e})})}}},h=function(t,e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.d(r,t),r.prototype.render=function(){var t=Object(c.compose)(Object(c.shouldUpdate)(function(t,e){return!1}),Object(i.connect)(m.a),Object(i.connect)(null,p),c.pure)(e);return o.a.createElement(t,n.a({},this.props))},r}(o.a.Component)}},function(t,e,r){"use strict";r.d(e,"a",function(){return m});var n=r(0),a=r(1),o=r.n(a),i=r(7),s=r.n(i),c=r(8),u=function(t,e){var r=e.mergeSchema,a=e.actions,o=e.schemaFormOptions,i=r.keys;return{toggleItem:function(t){a.toggleItem||console.error("没有找到的action！"),a.toggleItem({keys:i})},removeItem:function(t){a.removeItem||console.error("没有找到的action！"),a.removeItem({keys:i,index:t})},addItem:function(t){a.addItem||console.error("没有找到的action！"),a.addItem({keys:i,data:t})},switchItem:function(t){a.switchItem||console.error("没有找到的action！"),a.switchItem(n.a({keys:i},t))}}},m=function(t,e){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.d(r,t),r.prototype.render=function(){var t=this.props,r=t.mergeSchema,a=t.getHocOptions,i=r.type,s=a(),c=s.array,u=c||{},m=u.createItemButtons,p=void 0===m?function(t){return null}:m,h=u.createItemChildButtons,d=void 0===h?function(t){return null}:h,f=Object.assign({},this.props,{removeItem:this.removeItem.bind(this),addItem:this.addItem.bind(this),toggleItem:this.toggleItem.bind(this),switchItem:this.switchItem.bind(this)});return"array"===i?o.a.createElement(e,n.a({},f,{arrayItems:p(f),createItemChildButtons:d.bind(this,f)})):o.a.createElement(e,n.a({},this.props))},r.prototype.removeItem=function(t){var e=this.props,r=e.formItemData,n=void 0===r?[]:r,a=e.mergeSchema,o=e.removeItem,i=e.arrayIndex,s=a.uiSchema,c=a.type,u=a.keys;"array"===c&&void 0!==t&&o(t)},r.prototype.switchItem=function(t,e){var r=this.props,n=r.formItemData,a=void 0===n?[]:n,o=r.mergeSchema,i=r.switchItem,s=r.arrayIndex,c=o.uiSchema,u=o.type,m=o.keys;if("array"===u&&void 0!==t&&void 0!==e){if(e<0||a.length<e+1)return;i({curIndex:t,switchIndex:e})}},r.prototype.toggleItem=function(){(0,this.props.toggleItem)()},r.prototype.addItem=function(){var t=this.props,e=t.mergeSchema,r=t.validate,n=t.addItem;n("object"===e.items.type?{}:void 0)},r=n.c([Object(i.connect)(c.b,u)],r)}(o.a.Component)}},function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(0),a=r(1),o=r.n(a),i=r(2),s=r.n(i),c=function(t,e){return function(r){function a(){var t=null!==r&&r.apply(this,arguments)||this;return t.fieldKey="ui:item.hoc",t}return n.d(a,r),a.prototype.shouldComponentUpdate=function(){return!1},a.prototype.render=function(){var r=this.props,a=r.mergeSchema,s=r.globalOptions,c=a.uiSchema,u=void 0===c?{options:{}}:c,m=a.keys,p=a.type,h=s[p]||{},d=u[this.fieldKey]||h[this.fieldKey]||s[this.fieldKey]||["theme","field","validate","array","temp"],f=i.compose.apply(void 0,d.map(function(e){return t.get(e)}))(e);return o.a.createElement(f,n.a({getHocOptions:this.getHocOptions.bind(this)},this.props))},a.prototype.getHocOptions=function(){var t=this.props,e=t.mergeSchema,r=t.globalOptions,n=e.uiSchema,a=n.options||{};return Object.assign({},r.hoc||{},a.hoc||{})},a}(o.a.Component)}},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(0),a=r(1),o=r.n(a),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.d(e,t),e.prototype.render=function(){return o.a.createElement("div",null,this.props.children)},e}(o.a.Component)},function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(0),a=r(1),o=r.n(a),i=r(30),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.d(e,t),e.prototype.render=function(){var t=this.props,e=t.FieldComponent,r=t.mergeSchema,a=r.uiSchema,i=void 0===a?{}:a;return e?o.a.createElement(e,n.a({},this.props)):(console.log(r,"没有找到匹配的field"),null)},e}(o.a.Component),c=Object(i.a)(s)},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(2),a=r.n(n),o=r(6),i=Object(n.compose)(Object(n.onlyUpdateForKeys)(["formItemData","meta","formData","mergeSchema"]),o.a.get("make"),n.pure)},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(4),a=r.n(n),o=r(32),i=r(33);r.d(e,"b",function(){return o.a});var s={tempFactory:new n.BaseFactory,fieldFactory:new n.BaseFactory,widgetFactory:new n.BaseFactory};o.a.add("default",s);for(var c in i.a)if(i.a.hasOwnProperty(c)){var u=i.a[c];s.fieldFactory.add(c,u),s.fieldFactory.lock(c)}},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(0),a=r(4),o=r.n(a),i=function(t){function e(){return t.call(this)||this}return n.d(e,t),e}(a.BaseFactory),s=new i},function(t,e,r){"use strict";var n=r(34),a=r(35),o=r(36);e.a={string:n.a,boolean:n.a,number:n.a,integer:n.a,null:n.a,object:a.a,array:o.a}},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(0),a=r(1),o=r.n(a),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.d(e,t),e.prototype.render=function(){var t=this.props,e=t.mergeSchema,r=t.currentTheme,a=t.WidgetComponent;return o.a.createElement(a,n.a({key:e.keys.join(".")},this.props))},e}(o.a.Component)},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(0),a=r(1),o=r.n(a),i=r(3),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.d(e,t),e.prototype.render=function(){var t=this.props,e=t.mergeSchema,r=t.currentTheme,n=t.WidgetComponent,a=t.getCurrentState,s=t.globalOptions,c=t.schemaFormOptions,u=t.schemaKey,m=e.uiSchema;return o.a.createElement(i.SchemaForm,{schemaFormOptions:c,getCurrentState:a,schemaKey:u,schema:e,parentKeys:e.keys,RootComponent:m.root,uiSchema:m.items||["*"],globalOptions:s})},e}(o.a.Component)},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(0),a=r(1),o=r.n(a),i=r(3),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.d(e,t),e.prototype.renderItem=function(t,e){var r=this.props,n=r.mergeSchema,a=r.schemaKey,s=r.globalOptions,c=r.schemaFormOptions,u=r.getCurrentState,m=r.arrayItems,p=r.createItemChildButtons,h=n.uiSchema,d=n.keys;return o.a.createElement(i.SchemaForm,{key:d.join(".")+t,schema:n,getCurrentState:u,arrayIndex:t,arrayItems:p?p.bind(null,t,e):null,parentKeys:n.keys,RootComponent:null,schemaKey:a,uiSchema:h.items,schemaFormOptions:c,globalOptions:s})},e.prototype.render=function(){var t=this,e=this.props,r=e.mergeSchema,n=e.currentTheme,a=e.WidgetComponent,i=e.schemaKey,s=e.globalOptions,c=e.schemaFormOptions,u=e.formItemData,m=e.meta,p=void 0===m?{dirty:!1,isValid:!0,isShow:!0}:m,h=r.uiSchema,d=r.title,f;return f=u&&u.map(function(e,r){return t.renderItem(r,u.length)}),o.a.createElement("div",null,f||null)},e}(o.a.Component)}])});