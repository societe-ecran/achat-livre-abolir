import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
        <script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
        <div hidden id="snipcart" data-api-key={process.env.SNIPCART_API}></div>
      </Head>

      <main className={styles.main}>
        <button className="snipcart-add-item"
          data-item-id="livre"
          data-item-price="14"
          data-item-url="/"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          // data-item-image="/assets/images/starry-night.jpg"
          data-item-name="The Starry Night">
          Add to cart
        </button>
      </main>
    </div>
  )
}
