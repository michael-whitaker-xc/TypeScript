"use strict";
class Tool {
    constructor(n) {
        this.name = n;
    }
    static createTool(name) {
        return { name: name };
    }
}
Tool.id = 1;
const tool = Tool.createTool('hammer');
console.log(tool);
console.log(Tool.id);
//# sourceMappingURL=static_methods.js.map