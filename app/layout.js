import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export const metadata = {
  title: 'Web, Software & Mobile App Development | ScaleEdge Solution',
  description: 'ScaleEdge Solution is a trusted Web, software, and mobile app development company. We provide high-performing custom software solutions and digital marketing services',
  keywords: "Web Development, Web Development Services, Mobile App Development, Mobile App Development Services, Software Development, Web Design, eCommerce Development, Digital Marketing, SEO, SMO, SMM, Blockchain Development",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <link rel="canonical" href="https://scaleedge.in" />
        <meta property="og:url" content="https://scaleedge.in" />
        <meta property="og:description" content={metadata.description} />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RV4GV9YXVB"></script>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin='anonymous'></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin='anonymous'></script>

        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>

        {/* Add crossorigin="anonymous" to the Font Awesome script */}
        <script src="https://kit.fontawesome.com/a7d20ff54b.js"></script>
      </head>

      <body className={inter.className} suppressHydrationWarning style={{ overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}

