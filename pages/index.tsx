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
                    Målet igen fattigdom är det första målet i de sjutton globala målen och det är inte en slump. 
                    Fattigdom handlar om mer än att inte ha pengar, det innebär också brist på frihet, inflytande, hälsa, utbildning och säkerhet. Det kallas för multidimensionell fattigdom och innefattar 1,3 miljarder människor varav hälften är under 18. 

                    Eftersom att hälften av all fattigdom ligger i länder söder om Sahara så är det viktigt om det finns ett sätt att transportera nödhjälp från Europa till Afrika. När det inträffar katastrofer är det viktigt att dämpa de förödande konsekvenserna. För att lösa detta har vi gjort ett logistik-system som ger möjlighet för organisationer att effektivisera, optimera och planera snabba transportsträckor för nödhjälp till utsatta områden genom att analysera framkomligheten och behoven mellan olika områden.
                    För att ni ska kunna förstå så har vi en demo att visa.

                    </p>
                    
                    <h2>
                        The Solution
                    </h2>
                    <p>
                        Eftersom att det är svårt att planera så stora transporter så kan ett program göra det med hjälp av kartor på vägar som planerar rutter med hjälp av framkomligheten och räknar ut tiden för transporterna.
                    </p>

                    <h3>Start here!</h3>
                    <Link href="/app"><button className="startButton">Get Started <ArrowForwardIosIcon/></button></Link>
                </div>

            </main>

        </>
    )
}

export default Home
