// const express = require('express') // 옛날방식 => commonjs
import express from 'express'         // 요즘방식 => module

const app = express()

app.get('/qqq', function (req, res) {
  res.send('안녕하세123123123123요!!!')
})

app.listen(3000)