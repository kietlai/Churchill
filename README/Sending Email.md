```js
// send email Notification after application is submitted
const res = await fetch('/api/send',{
  method: 'POST',
  body: JSON.stringify({email, firstName, lastName, appliedFor})
})
console.log('Sent Email Notification',res.status)
```
