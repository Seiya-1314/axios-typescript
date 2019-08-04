/**
 * 发送 http 请求
 */

import { AxiosRequestConfig } from './types/index'

/**
 * @description 发送 http 请求
 *
 * 拿到相关请求配置，通过 XMLHttpRequest 对象发送请求
 *
 * @param config 请求配置
 */
export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
