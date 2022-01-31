import type { NextPage } from 'next'
import {useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
const google = require('@google/maps').createClient({
    key: 'AIzaSyAF0-Odd-Xw0ii9_RL2q-P-uP0qFfdpecY'
});

import Navbar from '../components/Navbar'

import styled from 'styled-components'

const Home: NextPage = () => {

    return (
        <>
            <Head>
                
                <title>App</title>
            </Head>

            <Navbar />

        </>
    )
}

export default Home
