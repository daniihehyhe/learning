import slider1 from '../components/main/featured/assets/slider1.svg'
import slider2 from '../components/main/featured/assets/slider2.svg'
import slider3 from '../components/main/featured/assets/slider3.svg'
import latest1 from '../components/main/assets/lates1.svg'
import latest2 from '../components/main/assets/latest2.svg'
import latest3 from '../components/main/assets/latest3.svg'
import list1 from '../components/list/assets/IMG.svg'
import list2 from '../components/list/assets/IMG-1.svg'
import list3 from '../components/list/assets/IMG-2.svg'
import list4 from '../components/list/assets/IMG-3.svg'
import list5 from '../components/list/assets/IMG-4.svg'
import list6 from '../components/list/assets/IMG-5.svg'
import list7 from '../components/list/assets/IMG-6.svg'
import list8 from '../components/list/assets/IMG-7.svg'
import star1 from '../components/list/assets/rating.svg'
import star2 from '../components/list/assets/rating-1.svg'
import star3 from '../components/list/assets/rating-2.svg'
import icon1 from '../components/about/assets/about_icon1.svg'
import icon2 from '../components/about/assets/about_icon2.svg'
import icon3 from '../components/about/assets/about_icon3.svg'
import icon4 from '../components/about/assets/about_icon4.svg'





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

export interface ILatest {
    img: string,
    month: string,
    day: number,
    title: string,
    name: string,
}

export const latestData = [
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
]



export const recentData = [
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
]


export interface IList {
    img:string,
    title: string,
    oldPrice:string,
    status: boolean,
}  

export const listData = [
    {
        img: list1,
        title: 'Management',
        oldPrice: '$99',
        status: true
    },
    {
        img: list2,
        title: 'Design',
        status: false
    },
    {
        img: list3,
        title: 'Management',
        status: false
    },
    {
        img: list4,
        title: 'Management',
        oldPrice: '$99',
        status: true
    },
    {
        img: list5,
        title: 'Management',
        status: false
    },
    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
    {
        img: list8,
        title: 'Management',
        status: false
    },

    {
        img: list6,
        title: 'Development',
        status: true
    },
    {
        img: list7,
        title: 'Management',
        status: true
    },
]

export interface IStar {
    img: string
}

export const starImg =[
    {
        img: star1
    },
    {
        img: star2
    },
    {
        img: star3
    },
]

export interface IOption {
    option1: string,
    option2:string,
    option3: string
}
export interface IInput {
    title: string,
    placeholder: string,
    options: IOption
}

export const filteredData =[
    {
        title:'Duration',
        placeholder:'All Duration',
        options: {
            option1: 'item1',
            option2: 'item2',
            option3: 'item3',
        }
    },
    {
        title:'Category',
        placeholder:'All Category',
        options: {
            option1: 'item1',
            option2: 'item2',
            option3: 'item3',
        }
    },
    {
        title:'Level',
        placeholder:'All Level',
        options: {
            option1: 'item1',
            option2: 'item2',
            option3: 'item3',
        }
    },
    {
        title:'Fee',
        placeholder:'All Fee',
        options: {
            option1: 'item1',
            option2: 'item2',
            option3: 'item3',
        }
    },
    {
        title:'Language',
        placeholder:'All Language',
        options: {
            option1: 'item1',
            option2: 'item2',
            option3: 'item3',
        }
    },
]


export const blogData = [
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
    {
        img: latest3,
        month: 'Dec',
        day: 29,
        title: "Thinking About Event? 7 Reasons Why It's ...",
        name: 'Marvin McKinney'
    },
    {
        img: latest1,
        month: 'jul',
        day: 12,
        title: 'The 7 Best Things About Event',
        name: 'Arlene McCoy'
    },
    {
        img: latest2,
        month: 'sep',
        day: 24,
        title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
        name: 'Cody Fisher'
    },
]


export interface IAbout {
    title: string,
    count: string,
    descr: string
}

export const aboutData = [
    {
        title: "Learners",
        count: '14k+',
        descr: 'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
    },
    {
        title: "Courses",
        count: '1.05k+',
        descr: 'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
    },
    {
        title: "Graduates",
        count: '52k+',
        descr: 'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
    },

]

export interface ICore {
    img:string,
    title: string,
    subtitle: string,
}

export const coreData = [
    {
        img:icon1 ,
        title: 'Structured Approach',
        subtitle: 'Aenean urna dictum adipiscing nec, cras quisque.',
    },
    {
        img: icon2,
        title: 'Professional Feedbacks',
        subtitle: 'Aenean urna dictum adipiscing nec, cras quisque.',
    },
    {
        img: icon3,
        title: 'Efficiency',
        subtitle: 'Aenean urna dictum adipiscing nec, cras quisque.',
    },
    {
        img: icon4,
        title: 'Flexible Schedule',
        subtitle: 'Aenean urna dictum adipiscing nec, cras quisque.',
    },

]

