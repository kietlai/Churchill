```js
// upload file to resume_docs table
await client.from('resume_docs').insert({
  author_id: user?.id,
  doc_url: resumeUrl?.data?.signedUrl
})
```
