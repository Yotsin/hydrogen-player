import { LOGIN_KEY } from '@/consts/keys'

// 判断是否登录
export function isLogin() {
  return !!localStorage.getItem(LOGIN_KEY)
}
