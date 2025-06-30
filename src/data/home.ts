import { LANGs } from "../constants";
import type { LangProp } from "../types/hook";

interface HeroText {
    intro: string;
}

export type HeroSection = {
    [key in LangProp]: HeroText;
} & {
    files: {
        left: string;
    };
};

const Hero: HeroSection = {
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
