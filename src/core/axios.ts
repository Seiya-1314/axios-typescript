import { AxiosPromise, AxiosRequestConfig, Method } from '../types'
import dispatchRequest from './dispatchRequest'

export default class Axios {
  /* request 函数定义 */
  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }

  /* get 函数定义 */
  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithoutData('get', url, config)
  }

  /* delete 函数定义 */
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithoutData('delete', url, config)
  }

  /* head 函数定义 */
  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithoutData('head', url, config)
  }

  /* options 函数定义 */
  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithoutData('options', url, config)
  }

  /* post 函数定义 */
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithData('post', url, data, config)
  }

  /* put 函数定义 */
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithData('put', url, data, config)
  }

  /* patch 函数定义 */
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWhithData('patch', url, data, config)
  }

  _requestMethodWhithoutData(method: Method, url: string, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }

  _requestMethodWhithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }
}
