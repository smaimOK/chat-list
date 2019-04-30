import Api from '@/services/Api'

export default {
  getAll () {
    return Api().get('ChatList.php?action=1')
  },
  addChat (data) {
    return Api().get('ChatList.php?action=2&chat_url=' + encodeURI(data.chat_url))
  }
}
