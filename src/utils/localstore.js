/**
 * 存储localStorage
 */
// localStorage.setItem(key,JSON.stringify(value))
export const setStore = (key, value) => {
    if (!key) return
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }
  
  /**
   * 获取localStorage
   */
  // return JSON.parse(localStorage.getItem(key)||'[]')
  export const getStore = key => {
    if (!key) return
    return window.localStorage.getItem(key)
  }
  
  /**
   * 删除localStorage
   */
//   localStorage.removeItem(key)
  export const removeStore = key => {
    if (!key) return
    window.localStorage.removeItem(key)
  }
  