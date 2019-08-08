export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]'
}

export function isObject(value: any): value is Object {
  return value !== null && typeof value === 'object'
}

/* 普通对象类型判断 */
export function isPlainObject(value: any): value is Object {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/* 将传入的 from 复制到 to 中 */
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
