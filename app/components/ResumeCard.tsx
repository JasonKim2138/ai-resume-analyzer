import {Link} from "react-router";

//this is a component resume is a prop
//: {resume:Resume}) is TypeScript syntax that checks the Type. In plain English, it means "The thing inside these parentheses must have the shape { resume: Resume }."
const ResumeCard = ({resume : {id,companyName,jobTitle,feedback}}: {resume:Resume}) => {
    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="flex flex-col gap-2">
                <h2 className="text-black! font-bold wrap-break-word">{companyName}</h2>
                <h3 className="text-lg wrap-break-word text-gray-500">{jobTitle}</h3>
            </div>
        </Link>
    )
}
export default ResumeCard
