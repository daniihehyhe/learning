import slider1 from '../components/featured/assets/slider1.svg'
import slider2 from '../components/featured/assets/slider2.svg'
import slider3 from '../components/featured/assets/slider3.svg'


export interface ISlider {
    img: string,
    price: number,
    title: string,
    name:string,
}

export const sliderData =  [
    {
        img: slider1,
        price: 39,
        title: "Don't Waste Time! 7 Facts Until You Reach Your Event" ,
        name: 'Bessie Cooper',
    },
    {
        img: slider2,
        price: 99,
        title: "The 7 Most Successful Event Companies In Region" ,
        name: 'Annette Black' ,
    },
    {
        img: slider3,
        price: 59,
        title: 'Think Your Event Is Safe? 7 Ways You Can Lose It Today',
        name: 'Brooklyn Simmons',
    },
    {
        img: slider1,
        price: 39,
        title: "Don't Waste Time! 7 Facts Until You Reach Your Event" ,
        name: 'Bessie Cooper',
    },
    {
        img: slider2,
        price: 99,
        title: "The 7 Most Successful Event Companies In Region" ,
        name: 'Annette Black' ,
    },
    {
        img: slider3,
        price: 59,
        title: 'Think Your Event Is Safe? 7 Ways You Can Lose It Today',
        name: 'Brooklyn Simmons',
    },

]

export interface ICategory {
    title: string,
    subtitle: string,
}

export const categoryData = [
    {
        title:'Python',
        subtitle: '28,965,389 students'
    },
    {
        title:'Management',
        subtitle: '9,506,045 students'
    },
    {
        title:'Web Development',
        subtitle: '9,506,045 students'
    },
    {
        title:'Photoshop',
        subtitle: '28,965,389 students'
    },
    {
        title:'Machine Learning',
        subtitle: '9,506,045 students'
    },
    {
        title:'Cyber Security',
        subtitle: '9,506,045 students'
    },
    {
        title:'Marketing',
        subtitle: '28,965,389 students'
    },
    {
        title:'Machine Learning',
        subtitle: '9,506,045 students'
    },
    {
        title:'Cyber Security',
        subtitle: '9,506,045 students'
    },

]