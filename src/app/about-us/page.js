import React from "react";

// Components
import AboutScreen from "../components/AboutUs/AboutScreen";
import AboutInfo from "../components/AboutUs/AboutInfo";

export const metadata = {
    openGraph: {
      type: 'article',
      url: `${process.env.NEXT_APP_URL}/about-us`,
      title: 'About | Dr. Birinder Singh Thind | Best Cardiologist Near me',
      description: `Dr. Birinder Thind is considered one of the best dedicated & experienced Cardiologist in Noida providing all facilities in his cardiac centre i.e TMT, Holter & ECG.`,
    },
    title: 'About | Dr. Birinder Singh Thind | Best Cardiologist Near me',
    description: `Dr. Birinder Thind is considered one of the best dedicated & experienced Cardiologist in Noida providing all facilities in his cardiac centre i.e TMT, Holter & ECG.`,
}

export default function About(){
    return(
        <>
            <AboutScreen/>
            <AboutInfo/>
        </>
    )
}