import React from "react";
import "./AboutContent.css";
import { IconType } from "react-icons";

type TAbout = {
  icon: IconType;
  color: string;
  iconColor: string;
  title: string;
  id: number;
  content: string;
};
interface Props {
  about: TAbout;
}
const AboutContent: React.FC<Props> = ({ about }) => {
  const containerClass = about.id !== 1 ? "aboutcontent" : "aboutcontent-first";
  const titleColor = about.id !== 1 ? about.color : "#42b983";
  return (
    <div className={containerClass}>
      <h1 style={{ color: titleColor }}>
        {about.title} <about.icon color={about.iconColor} />
      </h1>
      <p>{about.content}</p>
    </div>
  );
};

export default AboutContent;
