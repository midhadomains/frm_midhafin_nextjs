import Link from "next/link"
import { FaAngleRight } from "react-icons/fa";
import CourseCard from "../Common/CourseCard";

export default function Courses() {
    const Frm_p1 = [
        {
            "_id": "65dee4781c34e4d5d691626d",
            "name": "FRM® Part-1 Sample Course",
            "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-Sample-Course.png",
            "price": "",
            "other": "free",
            "instructor": "Micky Midha",
            "details": [
                "12 Hrs of Videos",
                "Available On Web,IOS & Android",
                "Access Until You Pass",
                "Lecture PDFs ",
                "class notes"
            ],
            "link": "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
            "rating": 4.5,
            "tp": "SC-1",
            "category": "frm",
            "sub_category": "part-1_sample_course"
        },
        {
            "_id": "65deec862a8308b4a242d3ce",
            "name": "FRM® Part-1 Self Paced Course",
            "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-Self-paced-course.png",
            "price": "",
            "other": "",
            "instructor": "Micky Midha",
            "details": [
                "257 Hrs Of Videos",
                "Available On Web,IOS & Android",
                "Access Until You Pass",
                "Complete Study Material",
                "Quizzes,Question Bank & Mock tests"
            ],
            "link": "https://edu.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f",
            "rating": 4.5,
            "tp": "TP-1",
            "category": "frm",
            "sub_category": "part-1_self_paced_course"
        },
        {
            "_id": "65df31c3c5e4ac767387dc92",
            "name": "FRM® Part-1 Live Online Classes",
            "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-part-1-live-online-class.png",
            "price": "",
            "other": "",
            "instructor": "Micky Midha",
            "details": [
                "90 Hrs Of Live Class & 200+ Hrs Of Videos",
                "Available On Web,IOS & Android",
                "Access Until You Pass",
                "Complete Study Material",
                "Quizzes,Question Bank & Mock tests"
            ],
            "link": "https://edu.midhafin.com/courses/FRM-Part-1-Live-Online-Classes-6297a9960cf2923982ee9e72",
            "rating": 4.5,
            "tp": "TP-2",
            "category": "frm",
            "sub_category": "part-1_live_online_classes"
        }
    ]

    return (
        <div className="max-w-[1400px] mx-auto mt-[70px]">
            <div className="flex justify-between px-6">
                <h2 className="text-[40px] font-semibold">Courses Offered</h2>
                <Link href='https://edu.midhafin.com/s/store' className="flex text-[24px] font-semibold text-[#BE4E1E] my-auto">View More Courses <FaAngleRight className="mt-2" /></Link>
            </div>
            <div className="flex justify-around flex-wrap ">
                {
                    Frm_p1.map((a, index) => (
                        <CourseCard a={a} key={index} />
                    ))
                }
            </div>
        </div>
    );
}
