import HeroImg from '../public/assets/image/hero_img_1.png';
import WeOfferImg1 from '../public/assets/image/we_offer_img_1.png';
import WeOfferBg1 from '../public/assets/bg/we_offer_bg_1.png';


export const heroData = {
    title:'Explore, experience, and enjoy',
    subtitle:'Travel with us!',
    image:HeroImg,
};


export const navigationData = [
    {
        name: 'Home',
        href: '/Home',
    },

    {
        name: 'About us',
        href: '#',
    },
    {
        name: 'App',
        href: '#',
    },
    {
        name: 'Contact us',
        href: '/ContactUs',
    },
];

export const weOfferData = {
    title:'We Offer',
    list:[
        {
            image:WeOfferImg1,
            bgImage:WeOfferBg1,
            title:'Vacation',
            description:'Immerse yourself in a meticulously planned vacation where every detail is tailored to create unforgettable memories.',
            delay:'400',
        },

        {
            image:WeOfferImg1,
            bgImage:WeOfferBg1,
            title:'Vacation',
            description:'Immerse yourself in a meticulously planned vacation where every detail is tailored to create unforgettable memories.',
            delay:'400',
        },

        {
            image:WeOfferImg1,
            bgImage:WeOfferBg1,
            title:'Vacation',
            description:'Immerse yourself in a meticulously planned vacation where every detail is tailored to create unforgettable memories.',
            delay:'400',
        },

        {
            image:WeOfferImg1,
            bgImage:WeOfferBg1,
            title:'Vacation',
            description:'Immerse yourself in a meticulously planned vacation where every detail is tailored to create unforgettable memories.',
            delay:'400',
        },
    ]
}