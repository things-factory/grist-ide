export class NodeBase {
  constructor(target) {
    this.target = target
  }

  static registry = {}

  static register(type, clazz) {
    NodeBase.registry[type] = clazz
  }

  get contextMenu() {
    return
  }

  get target() {
    return this._target
  }

  set target(value) {
    this._target = value
    this.build()
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

  get spec() {
    return [
      {
        type: 'string',
        name: 'type',
        header: 'type',
        record: {
          align: 'center'
        }
      },
      {
        type: 'string',
        name: 'name',
        header: 'name',
        record: {
          editable: true,
          align: 'left'
        }
      }
    ]
  }

  addChild(child) {
    this.children.push(child)
  }

  build() {}

  static buildNode(type, target) {
    return new (NodeBase.registry[type] || NodeBase)(target)
  }
}
