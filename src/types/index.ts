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

/* request 接口类型定义 */
export interface AxiosRequestConfig {
  url: string
  method?: method
  data?: any
  params?: any
}
