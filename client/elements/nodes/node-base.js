export class NodeBase {
  constructor(target) {
    this.target = target

    this.build()
  }

  static registry = {}

  static register(type, clazz) {
    NodeBase.registry[type] = clazz
  }

  get contextMenu() {
    return
  }

  get name() {
    return
  }

  get type() {
    return
  }

  get children() {
    if (!this._children) {
      this._children = []
    }

    return this._children
  }

  set children(children) {
    this._children = children
  }

  get config() {
    return
  }

  get isLeaf() {
    return false
  }

  addChild(child) {
    this.children.push(child)
  }

  build() {}

  static buildNode(type, target) {
    return new (NodeBase.registry[type] || NodeBase)(target)
  }
}
