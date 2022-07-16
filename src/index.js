import Post from './post'
import './styles/style.css'
import WebpackTestPng from './assets/png-test.png'

import json from './assets/json.json'

const post = new Post('FIRST POST', WebpackTestPng)

console.log(post.toStringW())

console.log('JSON', json)