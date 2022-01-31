import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import LocationForm from '../components/AddLocationForm'

import styled from 'styled-components'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Add Location</title>
            </Head>

            <div className="container">
                <Navbar />
                <LocationForm />
            </div>

        </>
    )
}

export default Home
