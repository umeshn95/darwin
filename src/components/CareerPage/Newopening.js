import React from 'react';
import Accordion from '@mui/material/Accordion';
import Button from '@mui/material/Button';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentBlock from './ContentBlock';
import { Container } from '../../globalStyles';

const jobsData = [
    {
      "title": "International Business Development",
      "details": {
        "date": "15-01-2024",
        "location": "Bengaluru, India",
        "company": "Darwin Analytics",
        "jobTitle": "International Business Development Manager",
        "responsibilities": [
          "Identify and develop new international markets",
          "Negotiate and close deals with international clients",
          "Manage cross-border business relationships"
        ],
        "requirements": [
          "MBA or equivalent in Business/International Trade",
          "3+ years of experience in international business development"
        ],
        "benefits": "Competitive salary, Health insurance, Travel opportunities",
        "salaryRange": "Competitive"
      }
    },
    {
      "title": "Backend Developer - Python",
      "details": {
        "date": "15-01-2024",
        "location": "Bengaluru, India",
        "company": "Darwin Analytics",
        "jobTitle": "Python Backend Developer",
        "responsibilities": [
          "Develop and maintain scalable server-side applications",
          "Ensure high performance and responsiveness to requests from the front-end",
          "Integrate user-facing elements with server-side logic"
        ],
        "requirements": [
          "Bachelor’s in Computer Science or related field",
          "Proficiency in Python and Django framework"
        ],
        "benefits": "Work from home flexibility, Health insurance, Annual bonuses",
        "salaryRange": "Competitive"
      }
    },
    {
      "title": "D3 Developer",
      "details": {
        "date": "15-01-2024",
        "location": "Bengaluru, India",
        "company": "Darwin Analytics",
        "jobTitle": "D3.js Developer",
        "responsibilities": [
          "Create dynamic, interactive data visualizations",
          "Collaborate with design and analytics teams",
          "Optimize applications for maximum speed and scalability"
        ],
        "requirements": [
          "Strong experience with D3.js and JavaScript",
          "Familiarity with data visualization principles"
        ],
        "benefits": "Creative freedom, Health insurance, Skill development programs",
        "salaryRange": "Competitive"
      }
    },
    {
      "title": "React.js Developer",
      "details": {
        "date": "15-01-2024",
        "location": "Bengaluru, India",
        "company": "Darwin Analytics",
        "jobTitle": "React.js Developer",
        "responsibilities": [
          "Develop new user-facing features using React.js",
          "Build reusable components and front-end libraries",
          "Translate designs and wireframes into high-quality code"
        ],
        "requirements": [
        "Strong proficiency in React.js and its core principles",
        "Experience with popular React.js workflows (such as Flux or Redux)"
        ],
        "benefits": "Flexible work hours, Health insurance, Team outings",
        "salaryRange": "Competitive"
        }
        }
        // ... other jobs can be added in a similar format
        ];
            

export default function JobOpenings() {
  return (
    <div>
        <div style={{width:'100%',height:'74px', background: '#000080'}}></div>
            <div></div>
            <div></div>

            <ContentBlock heading="We are Hiring" description="We're on the lookout for passionate, innovative, and driven individuals to join our growing team"/>
      <Container>
      {jobsData.map((job, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{job.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Date: {job.details.date}
            </Typography>
            <Typography variant="body2">
              Location: {job.details.location}
            </Typography>
            <Typography variant="body2">
              Company: {job.details.company}
            </Typography>
            <Typography variant="body2">
              Job Title: {job.details.jobTitle}
            </Typography>
            {job.details.region && (
              <Typography variant="body2">
                Region: {job.details.region}
              </Typography>
            )}
            <Typography variant="body2">Responsibilities:</Typography>
            <ul>
              {job.details.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <Typography variant="body2">Requirements:</Typography>
            <ul>
              {job.details.requirements.map((requirement, idx) => (
                <li key={idx}>{requirement}</li>
              ))}
            </ul>
            <Typography variant="body2">
              Benefits: {job.details.benefits}
            </Typography>
            <Typography variant="body2">
              Salary Range: {job.details.salaryRange}
            </Typography>
            <Button 
            variant="contained" 
            color="primary" 
            href="mailto:hr@darwinanalytic.com?subject=Resume Submission&body=Please attach your resume and include any additional information."
        >
            Submit Your Resume
        </Button>
          </AccordionDetails>
        </Accordion>
      ))}
      </Container>
    </div>
  );
}
