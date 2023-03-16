// const express = require('express') // 옛날방식 => commonjs
import express from 'express'         // 요즘방식 => module

const app = express()

app.get('/qqq', function (req, res) {
  res.send('ㅁㄴ이라ㅓ비ㅏㅈ더라ㅣㅁㄴ어리ㅏㅁㄴㄹ')
})

app.listen(3000)