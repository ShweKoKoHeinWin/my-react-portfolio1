import { LANGs } from "../constants";


const Hero = {
    [LANGs.ENGLISH]: {
        greet: "Hi! I'm",
        intro: 'A Junior Web Developer,',
        description: 'Building my skills in development while working to become a better person every day',
    },
    [LANGs.MYANMAR]: {
        greet: "မင်္ဂလာပါ။ ကျွန်တော်",
        intro: 'ဂျူနီယာဝဘ်ဆိုဒ်ရေးသူ တစ်ယောက်ပါ။',
        description: 'ဝဘ်ဆိုဒ်နည်းပညာတွေ လေ့လာရင်း တစ်နေ့တစ်ခြား ပိုကောင်းတဲ့လူတစ်ယောက်ဖြစ်အောင် အစဥ်ကြိုးစားနေပါတယ်။'
    },
    files: {
        left: "hello",
    },
};

const Projects = {
    [LANGs.ENGLISH]: {
        intro: "Welcome",
    },
    [LANGs.MYANMAR]: {
        intro: "ကြိုဆိုပါတယ်",
    },
    files: {
        left: "hello",
    },
};

export default { Hero, Projects };

