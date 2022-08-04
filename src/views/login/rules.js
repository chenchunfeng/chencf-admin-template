import i18n from '@/i18n'

export const validatePassword = () => {
  return (rule, data, callback) => {
    if (data.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
