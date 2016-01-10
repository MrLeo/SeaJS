define("static/module/page/react-demo-dist/index-debug", [ "vue-debug" ], function(require, exports, module) {
    require("static/libs/vue/vue-debug");
    /**
	 * Markdown 编辑器 
	 * http://jsfiddle.net/yyx990803/oe7axeab/ 
	 */
    new Vue({
        el: "#editor",
        data: {
            input: "# hello"
        },
        filters: {
            marked: marked
        }
    });
    /**
	 * 树状视图
	 * http://jsfiddle.net/yyx990803/u4n1m04q/
	 */
    // demo data
    var data = {
        name: "My Tree",
        children: [ {
            name: "hello"
        }, {
            name: "wat"
        }, {
            name: "child folder",
            children: [ {
                name: "child folder",
                children: [ {
                    name: "hello"
                }, {
                    name: "wat"
                } ]
            }, {
                name: "hello"
            }, {
                name: "wat"
            }, {
                name: "child folder",
                children: [ {
                    name: "hello"
                }, {
                    name: "wat"
                } ]
            } ]
        } ]
    };
    // define the item component
    Vue.component("item", {
        template: "#item-template",
        props: {
            model: Object
        },
        data: function() {
            return {
                open: false
            };
        },
        computed: {
            isFolder: function() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle: function() {
                if (this.isFolder) {
                    this.open = !this.open;
                }
            },
            changeType: function() {
                if (!this.isFolder) {
                    Vue.set(this.model, "children", []);
                    this.addChild();
                    this.open = true;
                }
            },
            addChild: function() {
                this.model.children.push({
                    name: "new stuff"
                });
            }
        }
    });
    // boot up the demo
    var demo = new Vue({
        el: "#demo",
        data: {
            treeData: data
        }
    });
});
