import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiSpeakerphone } from "react-icons/hi";

const OurPlan = () => {
  return (
    <div className="container-fluid ourplane">
      <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work ourp1"
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiSpeakerphone />}
        >
          <h4 className="vertical-timeline-element-subtitle">Phase 1</h4>
          <p>Team Expansion</p>
          <p>Social Media and Community Integration</p>
          <p>Contract Creation</p>
          <p>Website Deployment</p>
          <p>Audit & KYC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiSpeakerphone />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Phase 2
          </h4>
          <p>Team Expansion</p>
          <p>Social Media and Community Integration</p>
          <p>Contract Creation</p>
          <p>Website Deployment</p>
          <p>Audit & KYC</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiSpeakerphone />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Phase 3
          </h4>
          <p>Team Expansion</p>
          <p>Social Media and Community Integration</p>
          <p>Contract Creation</p>
          <p>Website Deployment</p>
          <p>Audit & KYC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiSpeakerphone />}
        >
         
          <h4 className="vertical-timeline-element-subtitle">
            Phase 4
          </h4>
          <p>Team Expansion</p>
          <p>Social Media and Community Integration</p>
          <p>Contract Creation</p>
          <p>Website Deployment</p>
          <p>Audit & KYC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiSpeakerphone />}
        >
          
          <h4 className="vertical-timeline-element-subtitle ">Phase 5</h4>
          <p>Team Expansion</p>
          <p>Social Media and Community Integration</p>
          <p>Contract Creation</p>
          <p>Website Deployment</p>
          <p >Audit & KYC</p>
        </VerticalTimelineElement>
      <div className="our2"></div>
      </VerticalTimeline>
    </div>
  );
};

export default OurPlan;
