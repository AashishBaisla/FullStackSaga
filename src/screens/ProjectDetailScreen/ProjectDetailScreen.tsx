/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './ProjectDetailScreen.module.css';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    projectName: string;
}

export default function ProjectDetailScreen({ projectName }: Props) {

    const data = [
        {
            title: 'Social Media App',
            url: 'https://github.com/AashishBaisla',
            private: true,
            screenShotData: [
                {
                    image: '/SocialMedia/social-media-profile-light-mode.png',
                    description: 'This is a light mode of User Profile',
                },
                {
                    image: '/SocialMedia/social-media-profile-dark-mode.png',
                    description: 'This is a Dark mode of User Profile',
                },
                {
                    image: '/SocialMedia/social-media-profile-desktop-lm.png',
                    description: 'User Profile in Desktop View',
                },
            ]
        },
        {
            title: 'Chat Application',
            url: 'https://github.com/AashishBaisla/Chat-App.git',
            private: false,
            screenShotData: []
        },
        {
            title: 'Contact Application',
            url: 'https://github.com/AashishBaisla/Contact.git',
            private: true,
            screenShotData: [
                {
                    image: '/Contact/user-details-contact-app.png',
                    description: 'User Details',
                },
                {
                    image: '/Contact/user-list-contact-app.png',
                    description: 'User Listing',
                },
            ]
        },
        {
            title: 'Todo App',
            url: 'https://github.com/AashishBaisla/TaskBuddy',
            private: false,
            screenShotData: []
        },
        {
            title: 'Sudoku',
            url: 'https://github.com/AashishBaisla/Sudoku.git',
            private: true,
            screenShotData: []
        },
        {
            title: 'CineVerse',
            url: 'https://github.com/AashishBaisla/CineVerse.git',
            private: false,
            screenShotData: [
                {
                    image: '/CineVerse/CineVerse-Detail-Dark-Mode.png',
                    description: 'Movie Detail Screen',
                },
                {
                    image: '/CineVerse/CineVerse-Listing-Dark-Mode.png',
                    description: 'Movies Listing in Dark Mode',
                },
                {
                    image: '/CineVerse/CineVerse-Listing-Light-Mode.png',
                    description: 'Movies Listing in Light Mode',
                },
            ]
        },
        {
            title: 'GitHub Profile Viewer',
            url: 'https://github.com/AashishBaisla/GitHub-Profile-Viewer',
            private: false,
            screenShotData: []
        },
        {
            title: 'Notepad',
            url: 'https://github.com/AashishBaisla/Notepad.git',
            private: false,
            screenShotData: []
        },
    ]

    const currentProject = data.find(item => item.title.split(" ").join("-").toLowerCase() === projectName.toLowerCase());
    if (!currentProject?.title) return notFound();

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span style={{ color: '#FFFFFF' }}>{currentProject.title}</span>
                {!currentProject?.private ?
                    <Link href={`${currentProject?.url}`} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} target='blank'>
                        <Image src={`icons/github.svg`} width={24} height={24} alt="GitHub" />
                    </Link>
                    :
                    <Image src={`icons/private.svg`} width={22} height={22} alt="private" />
                }
            </div>

            <section style={{ padding: '0 20px' }}>
                {currentProject.screenShotData?.length > 0 ?
                    currentProject.screenShotData?.map((item) => (
                        <div key={item.image} className={styles.card}>
                            <p>{item.description}</p>
                            <img src={`images${item.image}`} alt={item.description} style={{ objectFit: 'contain', borderRadius: '3px 3px 10px 10px', width: '100%', height: 'auto' }} />
                        </div>
                    ))
                    : <p style={{ color: '#FFFFFF', textAlign: 'center' }}>No Photos Available</p>
                }
            </section>

        </div>
    )
}
