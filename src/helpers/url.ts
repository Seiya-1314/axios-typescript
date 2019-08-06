import { isDate, isObject } from 'util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 将 params 对象拼接到 url 中
 *
 * @param url 基础 url 地址（e.g., http://www.google.com）
 * @param params params 对象，也可能是一个数组
 * @returns 拼接之后的 url
 */
export function buildURL(url: string, params?: any): string {
  /* 无参数直接返回 url */
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]

    /* 1、过滤 val 为 null 或 undefined 的情况 */
    if (val === null || typeof val === 'undefined') {
      return
    }

    /* 2、判断 val 值是否为数组，若是则不变，若不是则转换成数组 */
    let values: string[]
    if (Array.isArray(val)) {
      values = val
    } else {
      values = [val]
    }

    /* 3、遍历 values 中的值，并进行类型判断，然后分别进行处理 */
    values.forEach(val => {
      /* 判断值是否为 Date 类型 */
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {

      /* 判断值是否为 Object 类型 */
        val = JSON.stringify(val)
      }

      /* 若判断都未通过，先进行加码，然后直接 push 到 parts 数组中 */
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  /* 4、将处理完成后的 parts 数组进行序列化，并处理 hash */
  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    /* url 不带参数情况下，插入 ? 符号，若带参数则插入 & 符号 */
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
