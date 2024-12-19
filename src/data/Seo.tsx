import Head from "next/head";
import { StaticImageData } from 'next/image';


interface SeoProps {
    title: string;
    description: string | StaticImageData; // 수정된 타입
    url: string;
    image?: string | StaticImageData; // 수정된 타입
    type?: string;
}

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    url,
    image = "ogp.jpg",
    type = "website",
}) => {
    const resolvedDescription = typeof description === "string" ? description : ""; // 문자열로 변환
    const resolvedImage = typeof image === "string" ? image : image?.src; // StaticImageData에서 src 추출

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={resolvedDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={resolvedDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={resolvedImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={resolvedDescription} />
            <meta name="twitter:image" content={resolvedImage} />
        </Head>
    );
};

export default Seo;
