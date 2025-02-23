'use client'

import NeonCards from "./neoncard"



export default function comlist(){
    const info = [
        { id:1 , title: 'Technical', content: 'The Chapter’s backbone, the Technical Team not only designs the websites and apps for the Chapter, but also propogates the culture of coding across entire UPES and works on projects that help students learn.' , gradientColors : ["#FF0080", "#7928CA", "#FF0080"] , titleColor: "from-pink-400 to-pink-500" , glowIntensity:0.6},
        { id:2 , title: 'Events', content: 'The brain of the chapter, organizes a variety of events, our vivacious team. Through creative concepts and flawless event execution, the Events team makes sure that attendees enjoy every minute from conception to conclusion.' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 },
        { id:3 , title: 'Public Relations & Sponsorship', content: 'This committee is the face of the chapter. The PR and Sponsorship team puts in immeasurable efforts to secure sponsorships for the events, responds to inquiries, and tries to increase the chapter’s.' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 },
        { id:4 , title: 'Design & VFX', content: 'This distinguished committee is the creative house of the chapters. This team always leads the forefront by making breathtaking videos and developing visually appealing graphic material.' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 },
        { id:5 , title: 'Editorial', content: 'The Editorial Committee is the brainchild behind the Chapter’s all formal communications, blogs, social media content and document all the daily proceedings. This teams gives life to everything you see or read about UPES ACM.' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 },
        { id:6 , title: 'Corporate Social Responsibility', content: 'Being the reflection of the chapter’s ethics and deeds, the CSR committee curates activities that help contribute to the upliftment of society. It promotes education, and vocational skills among young children.' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 },
        { id:7 , title: 'Operations', content: 'The Operations committee works behind the scenes to ensure the smooth functioning of every event or activity of the chapters. This team provides back-end support to every other committee by managing all the arrangements flawlessly.' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 },
    ]
    return (
        <NeonCards info={info} />
    )
}