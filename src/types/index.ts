import { request } from "http";

/**
 * 公用的类型定义
 */

/* 限制 method 的传入合法值 */
export type method =
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
  url: string
  method?: method
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
