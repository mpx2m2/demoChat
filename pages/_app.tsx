import '../styles/antd.less'
import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <title>demoChat</title>
                    <link rel="icon" type="image/png" href="/static/images/logo16.png" sizes="16x16" />
                    <link rel="icon" type="image/png" href="/static/images/logo32.png" sizes="32x32" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                    <link rel='stylesheet' type='text/css' href='/static/normalize.min.css' />
                    <link rel='stylesheet' type='text/css' href='/static/global.css' />
                </Head>
                <div style={{ maxWidth: 992, margin: "0 auto" }}>
                    <Component {...pageProps} />
                </div>
            </Container>
        )
    }
}
