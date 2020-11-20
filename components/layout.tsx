import Head from "next/head";
import Link from "next/link";

const name = "Astillero Vanoli";
export const siteTitle = "Astillero Vanoli";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="bg-black">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link href="/">
              <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-xl">
                ASTILLERO VANOLI
              </a>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-orange-800 hover:text-gray-900"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link href="/">
                  <a className="inline-block text-white py-2 px-4 no-underline">
                    Inicio
                  </a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="/">
                  <a className="inline-block text-white py-2 px-4 no-underline">
                    Noticias
                  </a>
                </Link>
              </li>
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 rounded-full mt-2 lg:mt-0 py-1 px-2"
            >
              Contactanos
            </button>
          </div>
        </div>
      </header>
      <main className="w-full h-screen overflow-y-scroll leading-normal tracking-normal text-white">
        {children}
      </main>
      <footer>
        <div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2020 Aloncar SA, Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
