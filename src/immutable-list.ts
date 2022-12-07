import { Class } from 'everyday-types'
import { EventEmitter, entries, shallowEqualArray } from 'everyday-utils'

const equals = (value: any, next: any) =>
  value != null && next != null && typeof value === 'object' && 'equals' in value
    ? (value as any).equals(next, value)
    : Object.is(next, value)

export type ListItem = object & { id: string }

export class JSONAble<
  T extends Record<string, any> = Record<string, any>
> extends EventEmitter<T> {
  constructor(data: any) {
    super()
    Object.assign(this, data)
  }
  toJSON(this: this): Partial<this> {
    return { ...this }
  }
}

export function createOrReturn<
  T extends JSONAble,
  TKey extends keyof T,
  TCtor extends Class<T>
>(
  ctor: TCtor,
  prev: T,
  key: TKey,
  next: T[TKey]
) {
  const p = prev[key]

  if (p === next) return prev

  if (shallowEqualArray(p, next)) return prev

  const json = prev.toJSON()
  return Object.assign(
    new ctor(),
    json,
    { [key]: next }
  ) as InstanceType<TCtor>
}

export class List<
  T extends ListItem = any,
  R extends Record<string, any> = Record<string, any>
> extends JSONAble<R> {
  items: T[] = []

  declare ctor: Class<this>

  constructor(data: Partial<List<T>> = {}) {
    super(data)
    Object.assign(this, data)
    this.ctor = new.target as any
  }

  equals(other: List<T>): boolean {
    return this === other
      || (this.items.length === other.items.length
        && this.items.every(function equalsItem(item, i) {
          return equals(item, other.items[i])
        }))
  }

  add(item: T) {
    return Object.assign(
      new this.ctor(),
      this.toJSON(),
      { items: [...this.items, item] }
    )
  }

  getById<U extends T = T>(itemId: string | false): U {
    return getItemInListById(this.items, itemId) as U
  }

  setById<U extends T = T>(itemId: string, newItem: U) {
    return createOrReturn(
      this.ctor,
      this,
      'items',
      setItemInListById(this.items, itemId, newItem)
    )
  }

  hasId(itemId: string) {
    return this.items.some(function isItemIdEqual(item) {
      return item.id === itemId
    })
  }

  updateById<U extends T = T>(itemId: string, updateData: Partial<U>) {
    return createOrReturn(
      this.ctor,
      this,
      'items',
      updateItemInListById(this.items, itemId, updateData)
    )
  }

  mergeEach(data: Partial<T>) {
    return createOrReturn(
      this.ctor,
      this,
      'items',
      this.items.map(function mergeItem(item) {
        return updateOrReturn(item, data)
      })
    )
  }

  removeById(itemId: string) {
    return Object.assign(
      new this.ctor(),
      this.toJSON(),
      { items: removeItemInListById(this.items, itemId) }
    )
  }

  insertAt(index: number, newItem: T) {
    return Object.assign(
      new this.ctor(),
      this.toJSON(),
      { items: insertItemInListAtIndex(this.items, index, newItem) }
    )
  }

  insertAfterIndex(index: number, newItem: T) {
    return this.insertAt(index + 1, newItem)
  }
}

export function updateOrReturn<T extends object>(
  target: T,
  updateData: Partial<T>
) {
  if (entries(updateData).every(function isItemEqual([key, value]) {
    return key in target
      // TODO: shallow equal?
      && equals(target[key], value)
  })) {
    return target
  }

  return Object.assign(
    new (target as any).constructor(),
    target,
    updateData
  )
}

export function updateItemInListById<T extends ListItem>(
  list: T[],
  itemId: string,
  updateData: Partial<T>
) {
  let found = false
  let equal = false

  const newList = list.map(function updateOrReturnItem(item) {
    if (item.id === itemId) {
      const newItem = updateOrReturn(item, updateData)
      found = true
      if (newItem === item)
        equal = true
      return newItem
    }

    return item
  })

  if (!found) {
    throw new Error('Item not found with id: ' + itemId)
  }

  if (equal) {
    return list
  }

  return newList
}

export function getItemInListById<T extends ListItem>(
  list: T[],
  itemId: string | false
) {
  const item = list.find(function findItemById(item) {
    return item.id === itemId
  })

  if (!item) {
    throw new Error(`Item not found in list with id: "${itemId}"`)
  }

  return item
}

export function removeItemInListById<T extends ListItem>(
  list: T[],
  itemId: string
) {
  getItemInListById(list, itemId) // ensure
  return list.filter(function filterItemById(item) {
    return item.id !== itemId
  })
}

export function setItemInListById<T extends ListItem>(
  list: T[],
  itemId: string,
  newItem: T
) {
  const oldItem = getItemInListById(list, itemId)
  // TODO: deep equal?
  if (oldItem === newItem) return list

  return list.map(function setItem(item) {
    if (item === oldItem) {
      return newItem
    }
    return item
  })
}

export function insertItemInListAtIndex<T extends ListItem>(
  list: T[],
  index: number,
  newItem: T
) {
  if (index > list.length) {
    throw new Error(`Insert index ${index} out of bounds in list with length ${list.length}`)
  }

  const newList = [...list]

  if (index === newList.length) {
    newList.push(newItem)
  } else if (index > 0) {
    newList.splice(index, 0, newItem)
  } else {
    newList.unshift(newItem)
  }

  return newList
}
