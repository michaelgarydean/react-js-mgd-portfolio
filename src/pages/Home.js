import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * LazyImage – This component does not set its “src” until it is in (or near) the viewport.
 */
const LazyImage = ({ src, alt, ...props }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    if (imgRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observerInstance.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imgRef.current);
    } else {
      // Fallback for unsupported browsers
      setIsVisible(true);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      alt={alt}
      {...(isVisible ? { src } : {})}
      {...props}
    />
  );
};

/**
 * LazyIframe – This component waits to render the iframe until its container is visible.
 */
const LazyIframe = ({ src, title, ...props }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    if (containerRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observerInstance.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
    } else {
      setIsVisible(true);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <iframe src={src} title={title} {...props} />
      ) : (
        // A placeholder div (using a 16:9 aspect ratio) so layout isn’t shifted.
        <div style={{ paddingBottom: '56.25%' }} />
      )}
    </div>
  );
};

const Home = () => {
  // Fade in effect for the page wrapper
  useEffect(() => {
    const wrapper = document.getElementById('page-wrapper');
    if (wrapper) {
      setTimeout(() => {
        wrapper.style.opacity = '1';
      }, 10);
    }
  }, []);

  // Setup the sound toggle for the animated video
  useEffect(() => {
    const video = document.getElementById('animated-video');
    const toggleBtn = document.getElementById('toggle-sound');
    if (video && toggleBtn) {
      // Set the initial icon based on muted state (default is muted)
      toggleBtn.style.backgroundImage =
        'url("/assets/icons/video-player/icon-mute.svg")';
      toggleBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        toggleBtn.style.backgroundImage = video.muted
          ? 'url("/assets/icons/video-player/icon-mute.svg")'
          : 'url("/assets/icons/video-player/icon-volume.svg")';
      });
    }
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero full-screen">
        <div className="hero-content">
          {/* Optional: Add hero text here */}
        </div>
        <div className="scroll-indicator">Scroll Down</div>
      </section>

      {/* Media Feed Section */}
      <section id="media-feed">
        {/* Slide 1: Vimeo Video (16:9) */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/1049291897?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo Slide 1"
          />
        </div>

        {/* Slide 2: Animated Video with Sound Toggle */}
        {/*
        <div className="media-slide video-slide">
          <video id="animated-video" autoPlay muted loop playsInline>
            <source src="/assets/videos/animated-content.mp4" type="video/mp4" />
            <source src="/assets/videos/2023-HERO-VIDEO-QUICK-CUT-v2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <button
            id="toggle-sound"
            className="video-sound-toggle"
            aria-label="Toggle sound"
          ></button>
        </div>
        */}

        {/* Slide 3: Full-Width Image (CEM Cover Shot) */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-CEM/CEM-MGD_CoverShot.jpg"
              alt="CEM Cover Shot"
            />
          </div>
        </div>

        {/* Slide 4: Full-Width Image (CEM Cello 01) */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-CEM/CEM-P1084386.jpg"
              alt="CEM Cello 01"
            />
          </div>
        </div>

        {/* Slide 5: Full-Width Image (CEM Players 01) */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-CEM/CEM_Stills__1.1.24.jpg"
              alt="CEM Players 01"
            />
          </div>
        </div>

        {/* Slide 6: Full-Width Image (CEM - 3gars) */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-CEM/CEM-3gars.jpg"
              alt="CEM Players 01"
            />
          </div>
        </div>

        {/* Slide 7: Full-Width Image (CEM) */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-CEM/CEM-P1084604.jpg"
              alt="CEM Players 01"
            />
          </div>
        </div>

        {/* Slide 8: Full-Width Image (CEM) */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-CEM/CEM-P1084477.jpg"
              alt="CEM Players 01"
            />
          </div>
        </div>

        {/* Slide 9: Vimeo Video (16:9) */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/1051744421?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo Slide 2"
          />
        </div>

        {/* Slide 10: YouTube Video (16:9) */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://www.youtube.com/embed/JZPa8Dg2Pn8?vq=hd1080"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Slide"
          />
        </div>

        {/* FOREVER MEDITATIONS Slides */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MUTEK24_20230822_Michael-Gary-Dean_Bruno-Aiello-Destombes_001.jpg"
              alt="FM_MUTEK24_001 (13:51:02)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MUTEK24_20230822_Michael-Gary-Dean_Bruno-Aiello-Destombes_007.jpg"
              alt="FM_MUTEK24_007 (13:49:09)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MUTEK24_20230822_Michael-Gary-Dean_Bruno-Aiello-Destombes_005.jpg"
              alt="FM_MUTEK24_005 (13:49:23)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MG_9175_SebastienRoy.jpg"
              alt="FM_MG_9175_SebastienRoy (13:49:34)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MG_9229_SebastienRoy-.jpg"
              alt="FM_MG_9229_SebastienRoy (13:49:48)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MG_9344_SebastienRoy-.jpg"
              alt="FM_MG_9344_SebastienRoy (13:49:55)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MG_9349_SebastienRoy-.jpg"
              alt="FM_MG_9349_SebastienRoy (13:50:02)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MG_9365_SebastienRoy-.jpg"
              alt="FM_MG_9365_SebastienRoy (13:50:07)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MUTEK24_20230822_Michael-Gary-Dean_Bruno-Aiello-Destombes_016.jpg"
              alt="FM_MUTEK24_016 (13:50:14)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_MUTEK24_20230822_Michael-Gary-Dean_Bruno-Aiello-Destombes_006.jpg"
              alt="FM_MUTEK24_006 (13:50:23)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_DSCF1480.png"
              alt="FM_DSCF1480 (13:50:29)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_DSCF1371.jpg"
              alt="FM_DSCF1371 (13:50:35)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_Phi-Centre-Mixing-02-Vertical2.png"
              alt="FM_Phi-Centre-Mixing-02-Vertical2 (13:50:41)"
            />
          </div>
        </div>
        {/*
          (Optional commented-out slide for FM_IMG_1733.jpeg)
        */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_DSCF1414.jpg"
              alt="FM_DSCF1414 (13:50:52)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2024-Forever_Meditations/FM_Studio-Rehearsal-06-vertical3.png"
              alt="FM_Studio-Rehearsal-06-vertical3 (13:50:56)"
            />
          </div>
        </div>

        {/* NEW Media Slides for 2021-Abandoned_Pianos */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/730832348?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Abandoned Pianos"
          />
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_ABANDONED-PIANOS_BrunoDestombes_DSC09422_beauty.jpg"
              alt="AP_ABANDONED-PIANOS_BrunoDestombes_DSC09422_beauty.jpg (14:05:08)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_ABANDONED-PIANOS_BrunoDestombes_DSC09469.00009469.jpg"
              alt="AP_ABANDONED-PIANOS_BrunoDestombes_DSC09469.00009469.jpg (14:06:22)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_ABANDONED-PIANOS_BrunoDestombes_DSC.00009332.jpg"
              alt="AP_ABANDONED-PIANOS_BrunoDestombes_DSC.00009332.jpg (14:06:33)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_ABANDONED-PIANOS_BrunoDestombes_DSC09310.00009310-.jpg"
              alt="AP_ABANDONED-PIANOS_BrunoDestombes_DSC09310.00009310-.jpg (14:06:42)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_MG_5753_SebastienRoy-M.jpg"
              alt="AP_MG_5753_SebastienRoy-M.jpg (14:06:49)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_MG_5771_SebastienRoy-.jpg"
              alt="AP_MG_5771_SebastienRoy-.jpg (14:06:55)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_PT200120_DSC9328.png"
              alt="AP_PT200120_DSC9328.png (14:06:58)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_Abandoned_Pianos_Promo_still06.jpg"
              alt="AP_Abandoned_Pianos_Promo_still06.jpg (14:07:04)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2021-Abandoned_Pianos/AP_Abandoned_Pianos_Promo_still09.jpg"
              alt="AP_Abandoned_Pianos_Promo_still09.jpg (14:07:09)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/412101073?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Abandoned Pianos 2"
          />
        </div>

        {/* FROZEN MUSIC */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/798139025?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Frozen Music"
          />
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_IMMERSIVE_01.jpeg"
              alt="FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_IMMERSIVE_01 (14:32:54)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_IMG_7182.png"
              alt="FM_FrozenMusic_IMG_7182 (14:32:58)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/474025631?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Frozen Music 2"
          />
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_IMMERSIVE_02.jpg"
              alt="FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_IMMERSIVE_02 (14:33:01)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_IMMERSIVE_03-2048x1365-1.jpeg"
              alt="FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_IMMERSIVE_03-2048x1365-1 (14:33:05)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_PORTRAIT-scaled.jpg"
              alt="FM_FrozenMusic_211029_FROZEN_MUSIC_Cadie_DD_Michael_GD_PORTRAIT-scaled (14:33:08)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_IMG_1508.jpeg"
              alt="FM_FrozenMusic_IMG_1508 (14:33:11)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_119125342_10159091244883521_5909070215152068613_o.jpg"
              alt="FM_FrozenMusic_119125342_10159091244883521_5909070215152068613_o (14:33:13)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_EhyEq-jXsAE1NGL.jpeg"
              alt="FM_FrozenMusic_EhyEq-jXsAE1NGL (14:33:16)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Frozen_Music/FM_FrozenMusic_SONCIA_WAVE_08.jpg"
              alt="FM_FrozenMusic_SONCIA_WAVE_08 (14:33:18)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/451818403?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Frozen Music 3"
          />
        </div>

        {/* MEMBRANE */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_Push1Stop_Wiklow__Eufonic19_04_fot_Dani-Canto.jpg"
              alt="Membrane_Push1Stop_Wiklow__Eufonic19_04_fot_Dani-Canto.jpg (15:42:18)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_WiklowPush1Stop_SonarDia2019_sergioalbert_-02.jpg"
              alt="Membrane_WiklowPush1Stop_SonarDia2019_sergioalbert_-02.jpg (15:42:22)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_20-Membrane-AR_00000.jpeg"
              alt="Membrane_20-Membrane-AR_00000.jpeg (15:42:25)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/742821819?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Membrane 2"
          />
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_01-Membrane-MX.jpg"
              alt="Membrane_01-Membrane-MX.jpg (15:42:27)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_TodaysArt19_Push-1-stop_TAHS_Maurice-Mikkers-1873.jpg"
              alt="Membrane_TodaysArt19_Push-1-stop_TAHS_Maurice-Mikkers-1873.jpg (15:42:29)"
            />
          </div>
        </div>
        {/* Slide 7: YouTube Video (16:9) */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://www.youtube.com/embed/Fj2_ny9nIg4?vq=hd1080"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube - Membrane"
          />
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_O34A1124.jpg"
              alt="Membrane_O34A1124.jpg (15:42:32)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2019-Membrane/Membrane_126.jpg"
              alt="Membrane_126.jpg (15:42:34)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/262103342?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Membrane 3"
          />
        </div>

        {/* PREVIZ */}
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/742824611?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Previz"
          />
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_Previz_gallery_01.jpeg"
              alt="Previz_Previz_gallery_01 (15:48:16)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_11-scaled-1.jpeg"
              alt="Previz_CadieDD_MichaelGD_Previs_11-scaled-1 (15:48:26)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_5.jpeg"
              alt="Previz_CadieDD_MichaelGD_Previs_5 (15:48:41)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_13-scaled-1.jpeg"
              alt="Previz_CadieDD_MichaelGD_Previs_13-scaled-1 (15:48:47)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_02.png"
              alt="Previz_CadieDD_MichaelGD_Previs_02 (15:48:50)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_06.png"
              alt="Previz_CadieDD_MichaelGD_Previs_06 (15:48:52)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_12.png"
              alt="Previz_CadieDD_MichaelGD_Previs_12 (15:48:54)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2020-Previz/Previz_CadieDD_MichaelGD_Previs_03-1.png"
              alt="Previz_CadieDD_MichaelGD_Previs_03-1 (15:48:56)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/799650068?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Previz 2"
          />
        </div>

        {/* LIQUID ARCHITECTURE */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_23004486_10155604513175250_5445143496505114217_o.jpg"
              alt="LA_23004486_10155604513175250_5445143496505114217_o (16:03:33)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_21083470_10155612918622856_1179132426044374658_o.jpg"
              alt="LA_21083470_10155612918622856_1179132426044374658_o (16:03:37)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_21985094_1158824564219546_8532207693216088064_n.jpg"
              alt="LA_21985094_1158824564219546_8532207693216088064_n (16:03:40)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_21122437_10155413439120250_2315737827348369587_o.jpg"
              alt="LA_21122437_10155413439120250_2315737827348369587_o (16:03:42)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_01-clip-1-t112-0-00-04-12-.png"
              alt="LA_01-clip-1-t112-0-00-04-12-.png (16:03:49)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_wiklow_diagraf_ewerex-liquid_architecture-MUTEK_MX-upscaled.jpg"
              alt="LA_wiklow_diagraf_ewerex-liquid_architecture-MUTEK_MX-upscaled.jpg (16:03:56)"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2017-Liquid_Architecture/LA_AVision-1.jpg"
              alt="LA_AVision-1.jpg (16:03:59)"
            />
          </div>
        </div>
        <div className="media-slide video-slide">
          <LazyIframe
            src="https://player.vimeo.com/video/340213930?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
            title="Vimeo - Liquid Architecture"
          />
        </div>

        {/* SKELETAL WIRES */}
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2015-Skeletal_Wires/SW_Wiklow-MUTEK01.jpg"
              alt="Skeletal Wires - Wiklow MUTEK"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2015-Skeletal_Wires/SW_17650058894_2e530e8cc8_o.jpg"
              alt="Skeletal Wires Image 1"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2015-Skeletal_Wires/SW_Materials-01PaintedVinyl-e1603406504795.png"
              alt="Skeletal Wires Materials"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2015-Skeletal_Wires/SW_18084921490_6c1a8987eb_o-upscaled-straightened-2048x1366.jpeg"
              alt="Skeletal Wires Image 3 - Straightened"
            />
          </div>
        </div>
        <div className="media-slide">
          <div className="img-container">
            <LazyImage
              src="/assets/projects/2015-Skeletal_Wires/SW_18084871238_026e04a968_o.jpg"
              alt="Skeletal Wires Image 2"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
