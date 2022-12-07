// @env node

import { List } from '../src'

describe('List', () => {
  it('new instance', () => {
    expect(new List()).toBeInstanceOf(List)
  })

  it('add length 0', () => {
    const a = { id: 'a' }

    const list = new List()

    expect(list.items).toEqual([])

    const res =
      list.add(a)

    expect(list.items).toEqual([])
    expect(res.items).toEqual([a])
  })

  it('uses child constructor for immutable result instance', () => {
    const a = { id: 'a' }

    class Child extends List { }

    const list = new Child()

    expect(list.items).toEqual([])

    const res =
      list.add(a)

    expect(list.items).toEqual([])
    expect(res.items).toEqual([a])
    expect(res).toBeInstanceOf(Child)
  })

  it('add length 1', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }

    const list = new List({ items: [a] })

    expect(list.items).toEqual([a])

    const res =
      list.add(b)

    expect(list.items).toEqual([a])
    expect(res.items).toEqual([a, b])
  })

  it('add length 2', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List({ items: [a, b] })

    expect(list.items).toEqual([a, b])

    const res =
      list.add(c)

    expect(list.items).toEqual([a, b])
    expect(res.items).toEqual([a, b, c])
  })

  it('add sequentially', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List()

    expect(list.items).toEqual([])

    const res_a = list.add(a)
    expect(list.items).toEqual([])
    expect(res_a.items).toEqual([a])

    const res_b = res_a.add(b)
    expect(list.items).toEqual([])
    expect(res_a.items).toEqual([a])
    expect(res_b.items).toEqual([a, b])

    const res_c = res_b.add(c)
    expect(list.items).toEqual([])
    expect(res_a.items).toEqual([a])
    expect(res_b.items).toEqual([a, b])
    expect(res_c.items).toEqual([a, b, c])
  })

  it('insertAt 0 length 0', () => {
    const a = { id: 'a' }

    const list = new List()

    expect(list.items).toEqual([])

    const res =
      list.insertAt(0, a)

    expect(list.items).toEqual([])
    expect(res.items).toEqual([a])
  })

  it('insertAt 1 at length 0 throws out of bounds', () => {
    const list = new List()

    expect(list.items).toEqual([])

    const a = { id: 'a' }

    expect(() => {
      list.insertAt(1, a)
    }).toThrow('out of bounds')
  })

  it('insertAt 1 at length 1 pushes', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }

    const list = new List({ items: [a] })

    expect(list.items).toEqual([a])

    const res =
      list.insertAt(1, b)

    expect(list.items).toEqual([a])
    expect(res.items).toEqual([a, b])
  })

  it('insertAt 0 at length 1 unshifts', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }

    const list = new List({ items: [a] })

    expect(list.items).toEqual([a])

    const res =
      list.insertAt(0, b)

    expect(list.items).toEqual([a])
    expect(res.items).toEqual([b, a])
  })

  it('insertAt 1 at length 2 inserts', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List({ items: [a, b] })

    expect(list.items).toEqual([a, b])

    const res =
      list.insertAt(1, c)

    expect(list.items).toEqual([a, b])
    expect(res.items).toEqual([a, c, b])
  })

  it('getById', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List({ items: [a, b, c] })
    expect(list.getById('a')).toEqual(a)
    expect(list.getById('b')).toEqual(b)
    expect(list.getById('c')).toEqual(c)
  })

  it('getById with non-existant id throws not found', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List({ items: [a, b, c] })
    expect(() => {
      list.getById('never')
    }).toThrow('not found')
  })

  it('getById with 0 length throws not found', () => {
    const list = new List()
    expect(() => {
      list.getById('a')
    }).toThrow('not found')
  })

  it('setById', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const b2 = { id: 'b2' }
    const list = new List({ items: [a, b, c] })
    const res = list.setById('b', b2)
    expect(list.items).toEqual([a, b, c])
    expect(res.items).toEqual([a, b2, c])
  })

  it('setById with same reference, return same reference', () => {
    const a = { id: 'a' }
    const b = { id: 'b', other: 'same' }
    const c = { id: 'c' }

    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    const res =
      list.setById('b', b)
    expect(list.items).toEqual([a, b, c])
    expect(res).toBe(list)
  })

  it('hasId', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List({ items: [a, b, c] })
    expect(list.hasId('a')).toEqual(true)
    expect(list.hasId('b')).toEqual(true)
    expect(list.hasId('c')).toEqual(true)
    expect(list.hasId('d')).toEqual(false)
  })

  it('updateById', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const bu = { other: 'stuff' }
    const b2 = { id: 'b', other: 'stuff' }
    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    const res = list.updateById('b', bu)
    expect(list.items).toEqual([a, b, c])
    expect(res.items).toEqual([a, b2, c])
  })

  it('updateById non-existant throws not found', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const bu = { other: 'stuff' }
    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    expect(() => {
      list.updateById('never', bu)
    }).toThrow('not found')
  })

  it('mergeEach', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const upd = { other: 'stuff' }
    const a2 = { id: 'a', other: 'stuff' }
    const b2 = { id: 'b', other: 'stuff' }
    const c2 = { id: 'c', other: 'stuff' }
    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    const res = list.mergeEach(upd)
    expect(list.items).toEqual([a, b, c])
    expect(res.items).toEqual([a2, b2, c2])
  })

  it('mergeEach with same data, return same reference', () => {
    const a = { id: 'a', other: 'same' }
    const b = { id: 'b', other: 'same' }
    const c = { id: 'c', other: 'same' }

    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    const res =
      list.mergeEach({ other: 'same' })
    expect(list.items).toEqual([a, b, c])
    expect(res).toBe(list)
  })

  it('removeById', () => {
    const a = { id: 'a' }
    const b = { id: 'b' }
    const c = { id: 'c' }

    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    const res_a = list.removeById('b')
    expect(list.items).toEqual([a, b, c])
    expect(res_a.items).toEqual([a, c])

    const res_b = res_a.removeById('a')
    expect(list.items).toEqual([a, b, c])
    expect(res_a.items).toEqual([a, c])
    expect(res_b.items).toEqual([c])

    const res_c = res_b.removeById('c')
    expect(list.items).toEqual([a, b, c])
    expect(res_a.items).toEqual([a, c])
    expect(res_b.items).toEqual([c])
    expect(res_c.items).toEqual([])
  })

  it('updateById with same data, return same reference', () => {
    const a = { id: 'a' }
    const b = { id: 'b', other: 'same' }
    const c = { id: 'c' }

    const list = new List<{ id: string, other?: string }>({ items: [a, b, c] })
    const res =
      list.updateById('b', { other: 'same' })
    expect(list.items).toEqual([a, b, c])
    expect(res).toBe(list)
  })
})
