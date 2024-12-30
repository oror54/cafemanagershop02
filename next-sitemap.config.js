/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.cafemanagershop.com', // 실제 도메인으로 변경
    generateRobotsTxt: true, // robots.txt 생성 여부
    changefreq: 'daily', // 사이트맵 변경 빈도
    priority: 0.7, // 기본 우선순위
};
