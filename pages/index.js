
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Main } from '../components/Main/Main'
import { Card } from '../components/Card/Card'
import { Contact } from '../components/Contact/Contact'

export default function Home() {

  return (
    <div >
      <Header/>
      <Main/>
      <Card/>
      <Contact/>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
      props: {
          messages: (await import(`../messages/${locale}.json`)).default
      }
  }
}





