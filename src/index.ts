/**
 * 库入口文件
 */
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from "./helper/url";

/**
 * @description 入口函数
 *
 * 通过 xhr 函数发送 http 请求
 *
 * @param config 请求配置
 */
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
