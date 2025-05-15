import React from "react";
import "./Card.css";
import BarView from "../BarView/BarView";
import { useNavigate } from "react-router-dom";
interface Props {}
const Card: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div
        className="card__left"
        onClick={() =>
          navigate({
            pathname: "/about",
          })
        }
      >
        <img src="/me.png" alt="" loading="lazy" />
      </div>
      <div className="card__right">
        <h1
          onClick={() =>
            navigate({
              pathname: "/about",
            })
          }
        >
          Tinashe Crispen Garidzira
        </h1>
        <h2>
          <span>Researcher</span>, <span>Artificial Intelligence</span>,
          <span>Web Development</span>,<span> Mobile Development</span> and{" "}
          <span>Desktop Development</span>
        </h2>
        <p>
          Tinashe Crispen Garidzira, aka Crispen Gari, is a software developer
          and AI researcher specializing in machine learning and deep learning.
          He is the creator of <strong>dataloom.py</strong> and{" "}
          <strong>helperfns</strong>, tools designed for developers and Software
          Developers and AI practitioners. With
          {new Date().getFullYear() - 2019}+ years of coding experience, he
          focuses on Artificial Intelligence in Natural Language Processing (
          <strong>NLP</strong>), Computer Vision (<strong>CV</strong>), and
          Audio Processing (<strong>AP</strong>). Tinashe has published
          significant work in the fields of deep learning and software
          development. He enjoys working with React Native, React.js, and
          TypeScript, building frameworks, and tutoring students online. His
          technical expertise includes Python, TypeScript/JavaScript, C++, and
          Java. A fan of PyTorch and Expo, he excels in supervised tasks like
          classNameification and regression, as well as unsupervised and
          semi-supervised machine learning. He also leverages datasets from
          Kaggle and Hugging Face to develop innovative machine learning models.
        </p>
        <div>
          <img src="/robot.jpg" alt="robotic" />
          <p>
            Fascinated by humanoid robotics, I have successfully worked on
            projects leveraging modern deep learning technologies. I have built
            robust machine learning and deep learning APIs using Python for
            applications in audio processing, natural language processing, and
            computer vision.
          </p>
        </div>
        <BarView />
      </div>
    </div>
  );
};

export default Card;
