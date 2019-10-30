import { NodeBase } from './node-base'

export class NodeGristConfig extends NodeBase {
  get type() {
    return 'grist'
  }

  get name() {
    return 'grist'
  }

  build() {
    var target = this.target

    this.addChild(NodeBase.buildNode('columns', target.columns))
    this.addChild(NodeBase.buildNode('rows', target.rows))
    this.addChild(NodeBase.buildNode('sorters', target.sorters))
    this.addChild(NodeBase.buildNode('pagination', target.pagination))
    this.addChild(NodeBase.buildNode('list', target.list))
    this.addChild(NodeBase.buildNode('grid', target.grid))
    this.addChild(NodeBase.buildNode('imex', target.imex))
  }
}

NodeBase.register('grist', NodeGristConfig)
