import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

//this is a component resume is a prop
//: {resume:Resume}) is TypeScript syntax that checks the Type. In plain English, it means "The thing inside these parentheses must have the shape { resume: Resume }."
const ResumeCard = ({resume : {id,companyName,jobTitle,feedback,imagePath}}: {resume:Resume}) => {
    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="text-black! font-bold wrap-break-word">{companyName}</h2>
                    <h3 className="text-lg wrap-break-word text-gray-500">{jobTitle}</h3>
                </div>
                <div className= "flex shrink-0">
                    <ScoreCircle score={feedback.overallScore}></ScoreCircle>
                </div>
            </div>
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={imagePath}
                        alt="resume"
                        className="w-full h-87.5 max-sm:h-50 object-cover object-top"
                    />
                </div>
            </div>
        </Link>
    )
}
export default ResumeCard
