import React from "react"
import { BookMarked } from "lucide-react"
import Card from "./components/Card"
// import Navbar from "./components/Navbar"
//  import Profile from './components/Profile'
import Header from "./components/Header"
import IntroBody from "./components/IntroBody"
const App=()=>{

 const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    salary: "$90/hr",
    location: "Bangalore, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    salary: "$140/hr",
    location: "Pune, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    salary: "$80/hr",
    location: "Delhi, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    salary: "$130/hr",
    location: "Noida, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "4 days ago",
    post: "UI Designer",
    tag1: "Remote",
    tag2: "Mid Level",
    salary: "$100/hr",
    location: "Chennai, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "Graphic Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    salary: "$95/hr",
    location: "Kolkata, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    salary: "$115/hr",
    location: "Ahmedabad, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  },

  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "Mobile App Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    salary: "$105/hr",
    location: "Jaipur, India",
    saveButton: "Save",
    applyButton: "Apply Now"
  }
]
  return(
  <div className="parent">
   
  <Header/>
  <IntroBody/>
    <div className="jobs">
      {jobs.map(function(elem,index){
        return (
          <Card
            key={index}
            company={elem.companyName}
            post={elem.post}
            pay={elem.salary}
            location={elem.location}
            role={elem.tag1}
            role2={elem.tag2}
            logo={elem.brandLogo}
          />
        )
      })}
    </div>

  </div>
)
}
export default App