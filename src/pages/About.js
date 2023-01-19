import React from "react";
import Achive from '../images/achieve.png'
import Mission from '../images/mission.png'
import Vision from '../images/vision.png'

export const About = () => {
  return (
    <div>
      <div className="heading">About Us</div>
      <div className="aboutInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum
        quae incidunt dolore doloremque sapiente amet nemo odio rerum unde
        provident vero sequi illo, quis praesentium omnis fuga hic nihil
        commodi. Sit, sequi quod! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga, corporis corrupti nisi rerum voluptate assumenda
        necessitatibus illo similique dolor expedita, omnis enim error,
        obcaecati inventore voluptates est. Id dignissimos facilis molestiae
        unde ut, accusantium fuga aliquam, inventore, sequi magni ad quam minima
        excepturi laboriosam dolores!
      </div>

      <div className="about">
        <div className="mission">
          <img src={Mission} alt="Error loading image" />
          <h2>
            <u>MISSION</u>
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            recusandae odit accusantium dolorem possimus doloribus a consectetur
            ratione modi quis.
          </p>
        </div>

        <div className="vision">
          <img src={Vision} alt="" />
          <h2>
            <u>VISION</u>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
            minus corporis nostrum voluptate enim praesentium impedit, iusto
            deleniti dolorem fugiat.
          </p>
        </div>

        <div className="achieve">
          <img src={Achive} alt="" />
          <h2>
            <u>ACHIEVE</u>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste, eaque distinctio debitis cupiditate error nostrum quasi autem
            commodi? Ea.
          </p>
        </div>
      </div>
      <div className="footer">
        Copyright © 2023 All rights reserved by <b>Krishi Bazar</b>
      </div>
    </div>
  );
};
