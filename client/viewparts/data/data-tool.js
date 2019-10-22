import { LitElement, html, css } from 'lit-element'
import { getRenderer, getEditor } from '@things-factory/grist-ui'

export class GristDataTool extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;

          height: 25vh;

          overflow: hidden;
        }

        data-grist {
          flex: 1;

          overflow-y: hidden;
        }
      `
    ]
  }

  static get properties() {
    return {
      config: Object,
      data: Object
    }
  }

  get grist() {
    return this.shadowRoot.querySelector('data-grist')
  }

  firstUpdated() {
    this.page = 1
    this.limit = 20

    this.config = this.gristConfig

    this.grist.fetch()
  }

  render() {
    return html`
      <data-grist mode="GRID" .config=${this.config} .fetchHandler=${this.fetchHandler}></data-grist>
    `
  }

  async fetchHandler({ page, limit, sorters = [] }) {
    var total = 120993
    var start = (page - 1) * limit

    return {
      total,
      records: Array(limit * page > total ? total % limit : limit)
        .fill()
        .map((item, idx) => {
          return {
            id: idx,
            name: idx % 2 ? `shnam-${start + idx + 1}` : `heartyoh-${start + idx + 1}`,
            description: idx % 2 ? `hatiolab manager-${start + idx + 1}` : `hatiosea manager-${start + idx + 1}`,
            email: idx % 2 ? `shnam-${start + idx + 1}@gmail.com` : `heartyoh-${start + idx + 1}@gmail.com`,
            active: Math.round(Math.random() * 2) % 2 ? true : false,
            company:
              idx % 2
                ? {
                    id: '2',
                    name: 'HatioLAB',
                    description: `경기도 성남시-${start + idx + 1}`
                  }
                : {
                    id: '3',
                    name: 'HatioSEA',
                    description: `말레이시아 세티아알람-${start + idx + 1}`
                  },
            role: ['admin', 'worker', 'tester'][idx % 3],
            color: idx % 2 ? `#87f018` : `#180f87`,
            rate: Math.round(Math.random() * 100),
            dynamicType: ['text', 'email', 'checkbox', 'color', 'progress'][idx % 5],
            dynamicValue: ['abcdefghijkl', 'heartyoh@hatiolab.com', 'true', 'orange', '50'][idx % 5],
            homepage:
              idx % 2 ? `http://hatiolab.com/${start + idx + 1}` : `http://deadpool.hatiolab.com/${start + idx + 1}`,
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        })
    }
  }

  get gristConfig() {
    return {
      columns: [
        {
          type: 'gutter',
          gutterName: 'dirty'
        },
        {
          type: 'gutter',
          gutterName: 'sequence'
        },
        {
          type: 'gutter',
          gutterName: 'row-selector',
          multiple: true
        },
        {
          type: 'gutter',
          gutterName: 'button',
          icon: 'edit',
          handlers: {
            click: 'record-view'
          }
        },
        {
          type: 'string',
          name: 'id',
          hidden: true
        },
        {
          type: 'link',
          name: 'name',
          header: 'name',
          record: {
            align: 'center',
            editable: true,
            options: {
              // href: 'http://hatiolab.com',
              href: function(column, record, rowIndex) {
                return record['homepage']
              }
              // target: '_blank'
            }
          },
          sortable: true,
          width: 120
        },
        {
          type: 'string',
          name: 'description',
          header: 'description',
          record: {
            align: 'left'
          },
          width: 200,
          handlers: {
            dblclick: (columns, data, column, record, rowIndex) => {
              alert(`${column.name} ${record[column.name]}, row : ${rowIndex}`)
            }
          }
        },
        {
          type: 'email',
          name: 'email',
          header: 'email',
          record: {
            align: 'center',
            editable: true
          },
          sortable: true,
          width: 130,
          validation: function(after, before, record, column) {
            if (after.indexOf('@') == -1) {
              document.dispatchEvent(
                new CustomEvent('notify', {
                  detail: {
                    type: 'error',
                    message: `invalid value - ${after}`
                  }
                })
              )
              return false
            }
            return true
          }
        },
        {
          type: 'id',
          name: 'company',
          header: 'company',
          record: {
            align: 'center',
            editable: true,
            options: {}
          },
          sortable: true,
          width: 240
        },
        {
          type: 'boolean',
          name: 'active',
          header: 'active',
          record: {
            align: 'center',
            editable: true
          },
          handlers: {
            dblclick: () => {
              console.log(this.grist.dirtyRecords)
            }
          },
          sortable: true,
          width: 60
        },
        {
          type: 'select',
          name: 'role',
          header: 'role',
          record: {
            align: 'center',
            options: ['admin', 'worker', 'tester'],
            editable: true
          },
          sortable: true,
          width: 120
        },
        {
          type: 'color',
          name: 'color',
          header: 'color',
          record: {
            align: 'center',
            editable: true
          },
          sortable: true,
          width: 50
        },
        {
          type: 'float',
          name: 'rate',
          header: 'rate',
          record: {
            align: 'right',
            editable: true
          },
          sortable: true,
          width: 50
        },
        {
          type: 'progress',
          name: 'rate',
          header: 'rate',
          record: {
            align: 'center',
            editable: true
          },
          sortable: true,
          width: 50
        },
        {
          type: 'select',
          name: 'dynamicType',
          header: 'dynamic_type',
          record: {
            align: 'center',
            editable: true,
            options: ['text', 'email', 'checkbox', 'color', 'progress']
          },
          width: 50
        },
        {
          type: 'string',
          name: 'dynamicValue',
          header: 'dynamic_value',
          record: {
            align: 'center',
            editable: true,
            editor: function(value, column, record, rowIndex, field) {
              return getEditor(record.dynamicType)(value, column, record, rowIndex, field)
            },
            renderer: function(value, column, record, rowIndex, field) {
              return getRenderer(record.dynamicType)(value, column, record, rowIndex, field)
            }
          },
          width: 200
        },
        {
          type: 'datetime',
          name: 'updatedAt',
          header: 'updated_at',
          record: {
            align: 'center',
            editable: true
          },
          sortable: true,
          width: 180
        },
        {
          type: 'datetime',
          name: 'createdAt',
          header: 'created_at',
          record: {
            align: 'center',
            editable: true
          },
          sortable: true,
          width: 180
        }
      ],
      rows: {
        selectable: {
          multiple: true
        },
        handlers: {
          click: 'select-row-toggle'
        }
      },
      sorters: [
        {
          name: 'name',
          descending: true
        },
        {
          name: 'email'
        }
      ],
      pagination: {
        pages: [20, 30, 50, 100, 200],
        limit: this.limit
      }
    }
  }
}

customElements.define('grist-data-tool', GristDataTool)
