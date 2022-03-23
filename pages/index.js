import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import couv from '../public/couv.jpg'
import Navbar from './components/Navbar'
import Title from './components/Title'

export default function Home() {
    return (
        <div>
            <html lang="fr" />
            <Head>
            <title>Abolir la police. Echos des états-unis</title>
                <meta name="description" content="sortie septembre 2021" />
                <meta property="og:title" content="Abolir la police. Echos des états-unis." />
                <meta property="og:description" content="Abolir la police. Echos des états-unis. Acheter le livre" />
                <meta property="og:url" content="https://www.abolirlapolice.org/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`https://achat-livre-abolir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fcouv.93478b6c9ee7db2c15aef8dc9bfe9289.jpg&w=1920&q=100`} />
                <meta charSet="utf-8" />
                <meta name="author" content="{Team17}" />
                <meta name="twitter:title" content="collectifmatsu1" />
                <meta name="theme-color" content="#59577c" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@CollectifMatsu1" />
                <meta name="twitter:title" content="Abolir la police" />
                <meta name="twitter:description" content="Le site vise à diffuser les idées, pratiques et luttes pour l’abolition du système pénal (police, justice, prison) auprès des francophones." />
                <meta name="twitter:image" content={`https://www.abolirlapolice.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2FcouvMin.64099324a2cd6af6ed4653b63dca91f1.jpg&w=256&q=50`} />
                <meta name="twitter:image:alt" content="couverture" />
                <link rel="preconnect" href="<https://app.snipcart.com>" />
                <link rel="preconnect" href="<https://cdn.snipcart.com>" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
                <div hidden id="snipcart" data-api-key={process.env.SNIPCART_API}></div>
            </Head>

            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" strategy="beforeInteractive" ></Script>


            <main>
                <Title />
                <Navbar />
                <div className=" pt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className=" px-12 md:px-6  lg:px-24 flex flex-col ">
                        <Image
                            src={couv}
                            alt="Couverture Abolir la police"
                            quality={100}
                            layout="responsive"
                            width={309}
                            height={468}
                            className=''
                        />

                    </div>

                    <div className="flex flex-col  md:pr-3 ">
                        <div className='text-sm md:text-base sabonRoman px-12 '>
                            Minneapolis, mai 2020.
                            <br /> George Floyd, un Afro-Américain de 46 ans, meurt étouffé par la police. Une vague de contestations, inédite depuis les années 1960, s’empare du pays. Manifestations, mobilisations sur les réseaux sociaux, pillages : la singularité de ce mouvement tient autant à son ampleur qu’à la radicalité de ses propositions.
                            Il ne s’agit plus de dénoncer les dérives de l’institution policière, mais de questionner son existence même.
                            <br /> Defund and Abolish the police, démanteler la police et ses financements, sont des mots d’ordre qui, vus de France, peuvent sembler bien abstraits.
                            Ils s’inscrivent pourtant dans l’histoire de la lutte des Noir·es contre l’esclavage et l’incarcération de masse. Ils s’incarnent aussi dans des expériences de justice transformatrice, de solidarité communautaire, d’autodéfense et de soin féministes.
                            <br /> En traduisant plusieurs textes écrits aux
                            États-Unis ces dix dernières années, ce recueil souhaite autant documenter que transmettre ce nouvel abolitionnisme : vivre sans police.
                        </div>
                    </div>
                    <div className=' flex flex-col pr-12 pt-3 md:pt-0 pl-12 md:pl-0  '>
                        <div className='flex flex-col  sabonRoman  '>
                            <h2>
                                Introduction
                            </h2>
                            <h2 className='indent'>
                                I. Le soulèvement George Floyd
                            </h2>

                            <div>
                                <h2 className='indent'>
                                    II. De l’esclavage au Black Power
                                </h2>
                            </div>
                            <div>
                                <h2 className='indent'>
                                    III. Police : réforme impossible
                                </h2>
                            </div>
                            <div>
                                <h2 className='indent'>
                                    IV. Le mouvement abolitionniste aujourd’hui
                                </h2>

                            </div>
                            <div>
                                <h2 className='indent'>
                                    V. Féminisme et abolitionnisme
                                </h2>

                            </div>
                            <h2>
                                Conclusion
                            </h2>
                        </div>
                        <div className=" pt-6 ">
                            <div className="">
                                <span className="border-b border-gray-300  ">
                                    10 septembre 2021
                                </span>
                            </div>
                            <div >
                                <span className="border-b border-gray-300">
                                    336 pages
                                </span>
                            </div>
                            <div className="">
                                <span className="border-b border-gray-300">
                                    ISBN: 979-10-96195-14-5
                                </span>

                            </div>
                            <div className="">
                                <span className="border-b border-gray-300">
                                    14 euros
                                </span>
                            </div>
                        </div>
            
                        <div className="text-center md:text-left pt-6 pb-6">
                        {/* snipcart-add-item  */}
                        <a href="https://www.placedeslibraires.fr/listeliv.php?base=allbooks&mots_recherche=abolir+la+police" target="_blank">
                            <button className="rounded-full py-2 px-4 violetBack text-white"
                    
                                // data-item-id="livre"
                                // data-item-price="14"
                                // data-item-weight='494'
                                // data-item-url="/"
                                // data-item-description="Paru le 10 septembre 2021. 336 pages.  ISBN: 979-10-96195-14-5 "
                                // data-item-image="../public/couv.jpg"
                                // data-item-name="Abolir la police. Échos des États-Unis"
                                >
                                Acheter
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
