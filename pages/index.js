import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Navbar from '@/Components/Navbar'

import guyInFrontOfLakeMobile from '@/public/images/home/mobile/create-and-share.jpg';
import guyInFrontOfLakeTablet from '@/public/images/home/tablet/create-and-share.jpg';
import guyInFrontOfLakeDesktop from '@/public/images/home/desktop/create-and-share.jpg';

import laptopOnDeskMobile from '@/public/images/home/mobile/beautiful-stories.jpg';
import laptopOnDeskTablet from '@/public/images/home/tablet/beautiful-stories.jpg';
import laptopOnDeskDesktop from '@/public/images/home/desktop/beautiful-stories.jpg';

import cameramanMobile from '@/public/images/home/mobile/designed-for-everyone.jpg';
import cameramanTablet from '@/public/images/home/tablet/designed-for-everyone.jpg';
import cameramanDesktop from '@/public/images/home/desktop/designed-for-everyone.jpg';

import mountainsMobile from '@/public/images/stories/mobile/mountains.jpg';
import mountainsDesktop from '@/public/images/stories/desktop/mountains.jpg';

import cityMobile from '@/public/images/stories/mobile/cityscapes.jpg';
import cityDesktop from '@/public/images/stories/desktop/cityscapes.jpg';

import voyageMobile from '@/public/images/stories/mobile/18-days-voyage.jpg';
import voyageDesktop from '@/public/images/stories/desktop/18-days-voyage.jpg';

import architecturalsMobile from '@/public/images/stories/mobile/architecturals.jpg';
import architecturalsDesktop from '@/public/images/stories/desktop/architecturals.jpg';

import Hero from '@/Components/Hero'
import ImageCardContainer from '@/Components/ImageCardContainer'


export default function Home() {
  /* Logger */
  const logger = getLogger('Home');
  logger.debug('Home page rendered');

  /* State */
  const [screenWidth, setScreenWidth] = useState();

  /* Context */
  const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
  const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
  const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);
  const { tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
  const { setIsLoading } = useContext(GlobalContext);
  const { isMenuOpen } = useContext(GlobalContext);

  /* Router */
  const router = useRouter();

  /* Functions */
  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);

    const isMobile = screenWidth < tabletResolution;
    const isTablet = screenWidth >= tabletResolution && screenWidth < desktopResolution;
    const isDesktop = screenWidth >= desktopResolution;

    setIsMobileResolution(isMobile);
    setIsTabletResolution(isTablet);
    setIsDesktopResolution(isDesktop);
  }

  useEffect(() => {
    // Handle menu display
    handleMenuDisplay();
    window.addEventListener('resize', handleMenuDisplay);

    // Handle loading spinner
    router.events.on("routeChangeStart", () => setIsLoading(true));
    router.events.on("routeChangeComplete", () => setIsLoading(false));
    console.log()
  }, [screenWidth])

  const cards = [
    {
      image: isMobileResolution ? mountainsMobile : mountainsDesktop,
      alt: 'mountains',
      title: 'The Mountains',
      author: 'John Appleseed',
      CTA: 'Read story'
    },
    {
      image: isMobileResolution ? cityMobile : cityDesktop,
      alt: 'city',
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      CTA: 'Read story'
    },
    {
      image: isMobileResolution ? voyageMobile : voyageDesktop,
      alt: 'voyage',
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      CTA: 'Read story'
    },
    {
      image: isMobileResolution ? architecturalsMobile : architecturalsDesktop,
      alt: 'architecturals',
      title: 'Architecturals',
      author: 'Samantha Brooke',
      CTA: 'Read story'
    }
  ]
  return (
    <>
      <Head>
        <title>Home - Photosnap</title>
        <meta name="description" content="Create and share your photo stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
      <Navbar />

      <Hero image={isMobileResolution ? guyInFrontOfLakeMobile : isTabletResolution ? guyInFrontOfLakeTablet : guyInFrontOfLakeDesktop}
        alt='guy in front of a lake'
        title='Create and share your photo stories.'
        text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories, and connect with others.'
        CTA='Get an invite'
        theme='dark'
        withMainAccent={true}
        heroGridClass={'textFirst'}
      />
      <Hero image={isMobileResolution ? laptopOnDeskMobile : isTabletResolution ? laptopOnDeskTablet : laptopOnDeskDesktop}
        alt='laptop on a desk with a kid on the screen'
        title={<>Beautiful <br /> stories <br /> every time</>}
        text='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        CTA='View the stories'
        theme='light'
        withMainAccent={false}
        heroGridClass={'imgFirst'}


      />
      <Hero image={isMobileResolution ? cameramanMobile : isTabletResolution ? cameramanTablet : cameramanDesktop}
        alt='cameraman recording with a camera'
        title='Designed for everyone'
        text='Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'
        CTA='View the stories'
        theme='light'
        withMainAccent={false}
        heroGridClass={'textFirst'}

      />
      <ImageCardContainer cards={cards}></ImageCardContainer>

    </>
  )
}