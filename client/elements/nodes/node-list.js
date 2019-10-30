import { NodeBase } from './node-base'

export class NodeList extends NodeBase {
  get type() {
    return 'list'
  }

  get name() {
    return 'list'
  }
}

NodeBase.register('list', NodeList)
