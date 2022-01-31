import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'

import styled from 'styled-components'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

        </>
    )
}

export default Home
