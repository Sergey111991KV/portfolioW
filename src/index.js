import Post from '@models/post'
import './styles/style.css'
import WebpackTestPng from './assets/png-test'
import packages from '../package'
import xml from './assets/test.xml'
import csv from './assets/addresses.csv'
import * as $ from 'jquery'

const post = new Post('FIRST POST', WebpackTestPng)

console.log(post.toStringW())
console.log('package: ', packages)
console.log('xml: ', xml)
console.log('csv: ', csv)

function showPackages() {
    document.getElementById("json").innerHTML = JSON.stringify(packages, undefined, 2);
}

showPackages()

$('#post').html(post.toStringW())