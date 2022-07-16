import Post from '@models/post'
import './styles/style.css'
import './styles/less.less'
import './styles/sass.sass'
import './styles/scss.scss'
import WebpackTestPng from './assets/logo.svg'
import packages from '../package'
import xml from './assets/test.xml'
import csv from './assets/addresses.csv'
import './babel'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('FIRST POST', WebpackTestPng)

console.log(post.toStringW())
console.log('package: ', packages)
console.log('xml: ', xml)
console.log('csv: ', csv)

const App = () => (
    <div>
        <header>
            <img className="header__logo" src={require('/assets/logo.svg')} alt="none"/>
            <span className="header__title">Webpack knowledge</span>
        </header>
        <section>
            <div className="center__block">
                <h1>Webpack</h1>
            </div>
        </section>

        <section>
            <div className="center__block">
                <h3>Loading images</h3>
                <div className="logo"></div>
            </div>
        </section>

        <section>
            <div className="center__block">
                <h3>Loading json</h3>
                <pre className="code" id="json"></pre>
                <pre className="code" id="post"></pre>
            </div>
        </section>

        <section>
            <div className="center__block">
                <div className="box_less">
                    <h2>Less</h2>
                </div>
            </div>
            <div className="center__block">
                <div className="box_sass">
                    <h2>Sass</h2>
                </div>
            </div>
            <div className="center__block">
                <div className="box_scss">
                    <h2>Scss</h2>
                </div>
            </div>
        </section>
        <section>

        </section>
    </div>
)

render(<App/>, document.getElementById('app'))

function showPackages() {
    document.getElementById("json").innerHTML = JSON.stringify(packages, undefined, 2);
}

showPackages()

//
// $('#post').html(post.toStringW())

