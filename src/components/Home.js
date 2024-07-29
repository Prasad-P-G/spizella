import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel className="carouselContainer">
        <Carousel.Item>
          {/* <h2 style={{ fontWeight: "bold" }}>Security Solutions</h2> */}
          <div className="sub-heading">Security Solutions</div>
          <div className="container">
            <div className="row">
              <div className="col col-mid-6">
                <img
                  style={{ height: "80vh" }}
                  src="/Images/access_control_system.jpg"
                  className="d-block w-100"
                ></img>
              </div>
              <div className="col col-mid-4">
                <img
                  style={{ height: "80vh" }}
                  src="/Images/Full_Height_2 Line Turnstile.jpg"
                  className="d-block w-100"
                ></img>
              </div>
            </div>
          </div>

          <Carousel.Caption>
            <h3>Access Control System</h3>
            <p>
              Access control is a data security process that enables
              organizations to manage who is authorized to access corporate data
              and resources. Secure access control uses policies that verify
              users are who they claim to be and ensures appropriate control
              access levels are granted to users.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <h2 style={{ fontWeight: "bold" }}>Security Solutions</h2> */}
          <div className="sub-heading">Security Solutions</div>
          <div className="container">
            <div className="row">
              <div className="col col-mid-6">
                <img
                  style={{ height: "80vh" }}
                  src="/Images/Surveillance system.jpeg"
                  className="d-block w-100"
                ></img>
              </div>
              <div className="col col-mid-4">
                <img
                  style={{ height: "80vh" }}
                  src="/Images/Tripod Bridge.jpg"
                  className="d-block w-100"
                ></img>
              </div>
            </div>
          </div>

          <Carousel.Caption>
            <h3>Surveillance Systems</h3>
            <p>
              These systems can be applied to both interior and exterior areas
              of a building or property. They can operate 24/7, can be designed
              to only record in response to movement, or set to record during
              specific times of the day. The cameras may be conspicuous and out
              in the open to deter crime, or they can be more hidden and
              discreet to record evidence with fewer chances of being tampered
              with. However, it is essential to note that laws regulate the
              placement of security cameras within the workplace. These laws
              vary from state to state, so be sure to contact your state’s labor
              agency to learn what your restrictions are. Footage can be
              monitored live by a security guard, monitored remotely if using an
              IP camera and system (more on that in a moment) by a monitoring
              company, or can simply be recorded and stored by a DVR (digital
              video recorder) or NVR (network video recorder) for review later
              should the need arise. Finally, video surveillance systems are
              closed – this means its signals are not broadcast so that others
              could intercept and view the content. Only authorized users can
              access the recorded material
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <h2 style={{ fontWeight: "bold" }}>Security Solutions</h2> */}
          <div className="sub-heading">Security Solutions</div>
          <div className="container">
            <div className="row">
              <div className="col col-mid-6">
                <img
                  style={{ height: "80vh" }}
                  src="/Images/Cyber security.jpeg"
                  className="d-block w-100"
                ></img>
              </div>
              <div className="col col-mid-4">
                <img
                  style={{ height: "80vh" }}
                  src="/Images/Tripod.jpg"
                  className="d-block w-100"
                ></img>
              </div>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Cyber Security Services</h3>
            <p>
              Cyber security services are professional services that help
              organizations protect their networks and data from cyber-attacks
              and should form a part of a company's risk management plan. Cyber
              security consultants assess an organization's security needs and
              recommend solutions to mitigate risks
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="sub-heading">Product & Services</div>
          <img
            style={{ height: "80vh" }}
            src="/Images/Software development.jpeg"
            className="d-block w-100"
          ></img>
          <Carousel.Caption>
            <h3>Software Development</h3>
            <p>
              Software development refers to a set of computer science
              activities that are dedicated to the process of creating,
              designing, deploying, and supporting software. Software itself is
              the set of instructions or programs that tell a computer what to
              do. It is independent of hardware and makes computers
              programmable. Our Professional software developers have hight
              quality technical skills to excel in their workplace. They use
              their technical skills to develop and debug software products,
              programs or applications. Learning about different skills required
              for the future development in different technologies, and use them
              in the workplace will help us become a successful in time delivery
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="sub-heading">Product & Services</div>
          <img
            style={{ height: "80vh" }}
            src="/Images/Cluode Solutions.png"
            className="d-block w-100"
          ></img>
          <Carousel.Caption>
            <h3>Cloud Computing Services</h3>
            <p>
              cloud computing is the delivery of computing services—including
              servers, storage, databases, networking, software, analytics, and
              intelligence—over the Internet (“the cloud”) to offer faster
              innovation, flexible resources, and economies of scale
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="sub-heading">Product & Services</div>
          <img
            style={{ height: "80vh" }}
            src="/Images/Custom software Development.jpeg"
            className="d-block w-100"
          ></img>
          <Carousel.Caption>
            <h3>Custom Software Development</h3>
            <p>
              We as an organization need applications with unique features and
              functionality, they turn to software developers to design and
              create custom solutions. Custom software addresses users’ specific
              needs more comprehensively than traditional off-the-shelf
              packages. While the idea of software tailored to your business
              sounds appealing, custom software development isn’t for everyone.
              The process can be expensive and time-consuming, and it’s
              challenging to convey the scope of the functionality you need.
              We’ll look at custom software vs. off-the-shelf solutions and help
              you determine if custom software development is something your
              business should pursue.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
