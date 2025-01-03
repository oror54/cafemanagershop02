// 이미지 import
import insta01 from "$/assets/images/main/section06/insta01.png";
import insta02 from "$/assets/images/main/section06/insta02.jpg";
import insta03 from "$/assets/images/main/section06/insta03.jpg";
import insta04 from "$/assets/images/main/section06/insta04.jpg";

export const instagramPosts = [
    { id: 1, imageSrc: insta01, link: "https://www.instagram.com/cafemanager_official" },
    { id: 2, imageSrc: insta02, link: "https://www.instagram.com/cafemanager_official" },
    { id: 3, imageSrc: insta03, link: "https://www.instagram.com/cafemanager_official" },
    { id: 4, imageSrc: insta04, link: "https://www.instagram.com/cafemanager_official" },
].map((post) => ({
    ...post,
    alt: "카페매니저 인스타그램",
    username: "@cafemanager_official",
}));