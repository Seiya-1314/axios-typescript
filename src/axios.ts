import { AxiosInstance } from "./types";
import Axios from "./core/axios";
import { extend } from "./helpers/util";

/**
 * 工厂函数
 *
 * @description 将 axios 类上面定义的属性和方法进行 copy
 */
function createInstance(): AxiosInstance {
  /* new 一个 axios 对象实例，然后通过这个实例，复制到 instance 上面 */
  const context = new Axios()

  /**
   * 定义一个 instance 函数，并绑定上下文，修正 this 指向
   *
   * 这个函数指向 Axios.prototype.request 函数
   */
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
