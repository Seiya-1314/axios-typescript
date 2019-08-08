/**
 * 发送 http 请求
 */

import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'

/**
 * @description 发送 http 请求
 *
 * 拿到相关请求配置，通过 XMLHttpRequest 对象发送请求
 *
 * @param config 请求配置
 */
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config
    const request = new XMLHttpRequest()

    /* 判断 config 中是否设置了响应类型，若有则加到 request.responseType 中 */
    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url!, true)

    /**
     * 当请求被发送到服务器时，我们需要执行一些基于响应的任务。
     * 每当 readyState 改变时，就会触发 onreadystatechange 事件。
     *
     * 0: 请求未初始化
     * 1: 服务器连接已建立
     * 2: 请求已接收
     * 3: 请求处理中
     * 4: 请求已完成，且响应已就绪
     *
     */
    request.onreadystatechange = function handleLoad() {
      /* 判断请求状态是否成功 */
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }

    /* 网络错误处理 */
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    /* 超时错误处理 */
    request.ontimeout = function handleTimeout() {
      reject(
        createError(`Timeout of ${config.timeout} ms exceeded`, config, 'ECONNABORTED', request)
      )
    }

    /* 当 data 为 null 时，处理 header；若不为空，则设置请求头 */
    Object.keys(headers).forEach(key => {
      if (data === null && key.toLowerCase() === 'content-type') {
        delete headers[key]
      } else {
        request.setRequestHeader(key, headers[key])
      }
    })

    request.send(data)

    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
