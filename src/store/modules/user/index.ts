import { defineStore } from 'pinia'
import type { DefaultState } from './types'

const defaultState: DefaultState = {
  user: null,
  loginMode: null,
  likelist: null,
  appOptionShow: false,
  biliUser: null,
  homePage: true,
  cloudDiskPage: true,
}

const useUserStore = defineStore('userStore', {
  state: () => defaultState,
  actions: {
    updateUser(userinfo: any) {
      this.user = userinfo
    },

  },
  persist: {
    storage: localStorage,
    paths: ['user', 'biliUser', 'homePage', 'cloudDiskPage'],
  },
})

export default useUserStore
