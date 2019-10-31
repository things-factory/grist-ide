import { NodeBase } from './node-base'

export class NodeImex extends NodeBase {
  get type() {
    return 'imex'
  }

  get name() {
    return 'imex'
  }

  get contextMenu() {
    return [
      {
        label: 'Add Column'
      },
      {
        label: 'Open in New Window',
        disabled: true
      },
      '--',
      {
        label: 'Reply'
      },
      {
        label: 'Favorite',
        icon: 'star'
      },
      {
        label: 'Social',
        menus: [
          {
            label: 'Comment'
          },
          {
            label: 'Share',
            icon: 'share',
            menus: [
              {
                label: 'Twitter'
              },
              {
                label: 'Facebook'
              },
              {
                label: 'Google+'
              },
              {
                label: 'Email'
              }
            ]
          }
        ]
      },
      '--',
      {
        label: 'Save'
      },
      {
        label: 'Rename'
      },
      {
        label: 'Delete'
      }
    ]
  }
}

NodeBase.register('imex', NodeImex)
