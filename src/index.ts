/**
 * 库入口文件
 */
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

/**
 * @description 入口函数
 *
 * 通过 xhr 函数发送 http 请求
 *
 * @param config 请求配置
 */
function axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default axios
