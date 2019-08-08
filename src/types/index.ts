/**
 * 公用的类型定义
 */

/* 限制 method 的传入合法值 */
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

/* request 请求类型接口定义 */
export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

/* response 响应类型接口定义 */
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

/* axios 返回类型接口定义 */
export interface AxiosPromise extends Promise<AxiosResponse> {}

/* axios 增强错误类型接口定义 */
export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  Response?: AxiosResponse
  isAxiosError?: boolean
}

/* 描述 Axios 类中的公共方法 */
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise
  head(url: string, config?: AxiosRequestConfig): AxiosPromise
  options(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string,data?: any, config?: AxiosRequestConfig): AxiosPromise
  put(url: string,data?: any, config?: AxiosRequestConfig): AxiosPromise
  path(url: string,data?: any, config?: AxiosRequestConfig): AxiosPromise
}

/* 混合接口类型 */
export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise
}
