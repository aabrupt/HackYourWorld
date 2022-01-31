import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import Navbar from '../components/Navbar'

import styled from 'styled-components'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

            <main>
                <h1>Smart Relief System</h1>

                <div className="imageContainer">
                    <img src="/node_planet.jpg" alt="Illustrative picture" />
                </div>

                <div className="text">
                    <h2>
                        The Problem
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ligula sed sem vehicula vestibulum. Maecenas sed cursus purus, eget dictum dui. Quisque vitae posuere nisi, id lacinia enim. Nulla et nisl luctus, finibus mauris vel, ultricies enim. Curabitur faucibus nibh vitae elit suscipit rutrum. Praesent pulvinar rutrum sapien quis facilisis. Nulla hendrerit ipsum turpis, non elementum urna suscipit vehicula. Cras sed quam velit. Nunc ullamcorper tincidunt turpis ut dapibus. Vivamus pulvinar eleifend arcu, non euismod augue condimentum eget. Donec porta, neque eget laoreet aliquet, metus orci aliquet sem, quis sollicitudin dui libero eget dolor. Curabitur sit amet nisl eu lacus faucibus rutrum vel eget quam. Vivamus nec aliquam diam. Nam lectus turpis, pretium in dui vitae, maximus pharetra eros. Phasellus pulvinar neque id arcu volutpat, et tincidunt urna ultricies.
                    </p>
                    
                    <h2>
                        The Solution
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ligula sed sem vehicula vestibulum. Maecenas sed cursus purus, eget dictum dui. Quisque vitae posuere nisi, id lacinia enim. Nulla et nisl luctus, finibus mauris vel, ultricies enim. Curabitur faucibus nibh vitae elit suscipit rutrum. Praesent pulvinar rutrum sapien quis facilisis. Nulla hendrerit ipsum turpis, non elementum urna suscipit vehicula. Cras sed quam velit. Nunc ullamcorper tincidunt turpis ut dapibus. Vivamus pulvinar eleifend arcu, non euismod augue condimentum eget. Donec porta, neque eget laoreet aliquet, metus orci aliquet sem, quis sollicitudin dui libero eget dolor. Curabitur sit amet nisl eu lacus faucibus rutrum vel eget quam. Vivamus nec aliquam diam. Nam lectus turpis, pretium in dui vitae, maximus pharetra eros. Phasellus pulvinar neque id arcu volutpat, et tincidunt urna ultricies.
                    </p>

                    <h3>Start here!</h3>
                    <Link href="/app"><button className="startButton">Get Started <ArrowForwardIosIcon/></button></Link>
                </div>

            </main>

        </>
    )
}

export default Home
