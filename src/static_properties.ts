class Tool {
    static id = 1;
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  static createTool(name: string){
    return {name: name};
  }
}

const tool = Tool.createTool('hammer');

console.log(tool);

console.log(Tool.id);
