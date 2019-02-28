export const getNotified = (subject?: any) => {
  if ('Notification' in window) {
    Notification.requestPermission(premission => {
      if (premission === 'granted') {
        new Notification(`${subject}`, {
          badge: 'user clicked'
        })
      }
    })
  }
}
