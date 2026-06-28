"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { galleryImages, galleryVideos } from "./definitions";

import styles from "./GalleryContainer.module.css";

const GalleryContainer = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentVideo = galleryVideos[currentVideoIndex];
    const currentImage = galleryImages[currentImageIndex];

    const handlePreviousVideo = () => {
        setCurrentVideoIndex((previousIndex) =>
            previousIndex === 0 ? galleryVideos.length - 1 : previousIndex - 1,
        );
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((previousIndex) =>
            previousIndex === galleryVideos.length - 1 ? 0 : previousIndex + 1,
        );
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((previousIndex) =>
            previousIndex === 0 ? galleryImages.length - 1 : previousIndex - 1,
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((previousIndex) =>
            previousIndex === galleryImages.length - 1 ? 0 : previousIndex + 1,
        );
    };

    return (
        <main className={styles.GalleryContainer}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Alliance Demolition Inc Gallery</h1>

                    <p>
                        Explore videos and project images from our excavation, demolition,
                        land clearing, grading, trenching, and site preparation work.
                    </p>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className={styles.galleryGrid}>
                    <div className={styles.videoColumn}>
                        <div className={styles.sectionHeader}>
                            <h2>Project Videos</h2>
                            <p>Watch our team and equipment in action.</p>
                        </div>

                        <div className={styles.videoCarousel}>
                            <button
                                type="button"
                                className={styles.carouselButton}
                                onClick={handlePreviousVideo}
                                aria-label="Previous video"
                            >
                                <IoChevronBack size={24} />
                            </button>

                            <div className={styles.videoWrapper}>
                                <video
                                    key={currentVideo.src}
                                    className={styles.video}
                                    controls
                                    playsInline
                                    preload="metadata"
                                >
                                    <source src={currentVideo.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <span className={styles.counter}>
                                    {currentVideoIndex + 1} / {galleryVideos.length}
                                </span>
                            </div>

                            <button
                                type="button"
                                className={styles.carouselButton}
                                onClick={handleNextVideo}
                                aria-label="Next video"
                            >
                                <IoChevronForward size={24} />
                            </button>
                        </div>

                        <h3 className={styles.mediaTitle}>{currentVideo.title}</h3>
                    </div>

                    <div className={styles.imageColumn}>
                        <div className={styles.sectionHeader}>
                            <h2>Project Photos</h2>
                            <p>See examples of our demolition and excavation services.</p>
                        </div>

                        <div className={styles.imageCarousel}>
                            <button
                                type="button"
                                className={styles.carouselButton}
                                onClick={handlePreviousImage}
                                aria-label="Previous image"
                            >
                                <IoChevronBack size={24} />
                            </button>

                            <div className={styles.imageWrapper}>
                                <Image
                                    key={currentImage.src}
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 900px) 100vw, 60vw"
                                    priority
                                />

                                <span className={styles.counter}>
                                    {currentImageIndex + 1} / {galleryImages.length}
                                </span>
                            </div>

                            <button
                                type="button"
                                className={styles.carouselButton}
                                onClick={handleNextImage}
                                aria-label="Next image"
                            >
                                <IoChevronForward size={24} />
                            </button>
                        </div>

                        <h3 className={styles.mediaTitle}>{currentImage.title}</h3>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GalleryContainer;