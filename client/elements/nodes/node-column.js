import { NodeBase } from './node-base'

export class NodeColumn extends NodeBase {
  get type() {
    return this.target.type == 'gutter' ? 'gutter' : 'column'
  }

  get name() {
    return this.target.type == 'gutter' ? this.target.gutterName : this.target.name
  }
}

NodeBase.register('column', NodeColumn)
