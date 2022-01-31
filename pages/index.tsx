import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'

import styled from 'styled-components'

const Container = styled.div`
    img {
        width: auto;
        height: 500px;
    }
`

const Text = styled.div`

`

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />

            <main>
                <Container>
                    <img src="/node_planet.jpg" alt="Illustrative picture" />
                </Container>

                <Text>
                    <h2>
                        Problem
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ligula sed sem vehicula vestibulum. Maecenas sed cursus purus, eget dictum dui. Quisque vitae posuere nisi, id lacinia enim. Nulla et nisl luctus, finibus mauris vel, ultricies enim. Curabitur faucibus nibh vitae elit suscipit rutrum. Praesent pulvinar rutrum sapien quis facilisis. Nulla hendrerit ipsum turpis, non elementum urna suscipit vehicula. Cras sed quam velit. Nunc ullamcorper tincidunt turpis ut dapibus. Vivamus pulvinar eleifend arcu, non euismod augue condimentum eget. Donec porta, neque eget laoreet aliquet, metus orci aliquet sem, quis sollicitudin dui libero eget dolor. Curabitur sit amet nisl eu lacus faucibus rutrum vel eget quam. Vivamus nec aliquam diam. Nam lectus turpis, pretium in dui vitae, maximus pharetra eros. Phasellus pulvinar neque id arcu volutpat, et tincidunt urna ultricies.
                    </p>
                    
                    <h2>
                        Lösning
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ligula sed sem vehicula vestibulum. Maecenas sed cursus purus, eget dictum dui. Quisque vitae posuere nisi, id lacinia enim. Nulla et nisl luctus, finibus mauris vel, ultricies enim. Curabitur faucibus nibh vitae elit suscipit rutrum. Praesent pulvinar rutrum sapien quis facilisis. Nulla hendrerit ipsum turpis, non elementum urna suscipit vehicula. Cras sed quam velit. Nunc ullamcorper tincidunt turpis ut dapibus. Vivamus pulvinar eleifend arcu, non euismod augue condimentum eget. Donec porta, neque eget laoreet aliquet, metus orci aliquet sem, quis sollicitudin dui libero eget dolor. Curabitur sit amet nisl eu lacus faucibus rutrum vel eget quam. Vivamus nec aliquam diam. Nam lectus turpis, pretium in dui vitae, maximus pharetra eros. Phasellus pulvinar neque id arcu volutpat, et tincidunt urna ultricies.
                    </p>
                </Text>

            </main>

        </>
    )
}

export default Home
