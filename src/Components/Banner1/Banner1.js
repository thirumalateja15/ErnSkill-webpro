import "./banner.css";
import vedio from "./bannerErnSkill.mp4";

export default function Banner1() {
  return (
    <div className="bannercontainer">
      <div id="vedioContainer">
        <video id="vediox" autoPlay loop>
          <source src={vedio} type="video/mp4" />
        </video>
      </div>

      <div className="textcontainer">
        <div className="textholder">
            <p className="heading">Building Bridges through Skills</p>
            <div className="descripholder">
              <p className="description">Empowering individuals through transformative skill development for a brighter future and  with cutting-edge skills and knowledge to excel in a rapidly evolving world.Our curriculum is carefully designed to address industry demands, focusing on areas such as technology, business, leadership, and personal development. With experienced instructors, practical hands-on projects, and a supportive learning environment, ErnSkill is committed to nurturing talent, fostering growth, and empowering individuals to shape their own futures. Join us on a transformative learning journey and unleash your true potential with ErnSkill.</p>
              <a href="/explore">
                <div className="explore-container">
                  <p className="explore">Explore</p>
                  <div className="arrow">
                      <svg id="nav-gate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                      </svg>
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
