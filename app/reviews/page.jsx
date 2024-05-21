import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { IoStar } from "react-icons/io5";


export const metadata = {
    title: 'Reviews',
    description: " Don't believe us, Hear from our students ",
    keywords: "midhafin reviews, frm reviews"
}
export default function Page() {
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }
    const data = [
        {
            "_id": "65f1635ab778e21b1aed83ea",
            "name": "aminoritse adedayo",
            "image": "https://files.midhafin.com/wp-content/uploads/Aminoritse-Adedayo.png",
            "country": "Ireland",
            "job": "FMS Wertmanagement ",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7151246725607747584/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/aminoritse-adedayo-frm%C2%AE-58386480/",
            "v_link": "",
            "course": "FRM part-2",
            "excerpt": "I am Super excited to share that I have passed FRM Part II Exam on Ist attempt. My heartfelt Gratitude to Micky Midha and team MidhaFin"
        },
        {
            "_id": "65f1635ab778e21b1aed83f8",
            "name": "Naresh Gaur",
            "image": "https://files.midhafin.com/wp-content/uploads/Naresh-Gaur.jpg",
            "country": "U.S.A.",
            "job": "Bank Of America",
            "p_link": "https://www.quora.com/Which-are-the-best-classes-for-FRM-GARP-in-Chennai/answer/Naresh-Gaur-17?ch=10&oid=155034217&share=979be00d&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/nareshgaur/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I started studying for FRM after clearing Levels 1 to 3 of CFA. I observed that FRM requires a different kind of mindset and with "
        },
        {
            "_id": "65f1635ab778e21b1aed83e1",
            "name": "vivek pradhan",
            "image": "https://files.midhafin.com/wp-content/uploads/Vivek-Pradhan.png",
            "country": "India",
            "job": "HUDCO Ltd.",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7150492009563090944/",
            "l_link": "https://www.linkedin.com/in/vivek-pradhan-b9a7b111b/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "Delighted to share that I have cleared the FRM Part-I Nov 23 Exam. Looking forward to conquering the Part II exam. I followed a self."
        },
        {
            "_id": "65f1635ab778e21b1aed83e3",
            "name": "chetan kumar",
            "image": "https://files.midhafin.com/wp-content/uploads/Chetan-Kumar.png",
            "country": "India",
            "job": "Au Small Finance Bank ",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148732289580003328/",
            "l_link": "https://www.linkedin.com/in/chetan-kumar-842779262/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I'm thrilled to share that I have successfully passed the Financial Risk Manager (FRM) Level 1 exam!.The journey was "
        },
        {
            "_id": "65f1635ab778e21b1aed83e4",
            "name": "manish upadhye",
            "image": "https://files.midhafin.com/wp-content/uploads/Manish-Upadhye.png",
            "country": "India",
            "job": "CLSA",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7149651651623124992/",
            "l_link": "https://www.linkedin.com/in/manish-upadhye-600901222/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I'm excited to share my educational milestone of passing FRM-1 exam by Global Association of Risk Professionals (GARP) in first attempt"
        },
        {
            "_id": "65f1635ab778e21b1aed83e5",
            "name": "avinaba Roy",
            "image": "https://files.midhafin.com/wp-content/uploads/Avinaba-Roy.png",
            "country": "India",
            "job": "CRISIL (S&P Global)",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148976624116412416/",
            "l_link": "https://www.linkedin.com/in/royavi/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "New year starts with some positive news, academically Glad to share that I have cleared the GARP FRM Part 1 exam in November 2023 "
        },
        {
            "_id": "65f1635ab778e21b1aed83e7",
            "name": "santosh kumar",
            "image": "https://files.midhafin.com/wp-content/uploads/Santosh-Kumar.png",
            "country": "India",
            "job": "Union Bank of India",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:6949775561451810817/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/santosh-kumar-certified-frm-b11912217/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I sincerely thanks Micky Midha sir and team Midhafin for their continuous support, guidance and unique study materials, which "
        },
        {
            "_id": "65f1635ab778e21b1aed83ef",
            "name": "Kayode Samuel",
            "image": "https://files.midhafin.com/wp-content/uploads/Kayode-Samuel.jpg",
            "country": "Nigeria",
            "job": "Stanbic IBTC Bank",
            "p_link": "https://www.linkedin.com/posts/kayode-samuel-akintola-fca-acma-cgma-cior-97132133_frm-2-november-2023-result-activity-7152685824839409665-Gpd_/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/kayode-samuel-akintola-fca-acma-cgma-cior-97132133/",
            "v_link": "",
            "course": "FRM part-2",
            "excerpt": "I would like to thank Micky Midha for his support through my FRM - part 1 and Part 2 at first attempt. At MidhaFin candidates "
        },
        {
            "_id": "65f1635ab778e21b1aed83f1",
            "name": "Palak Hasija",
            "image": "https://files.midhafin.com/wp-content/uploads/Palak-Hasija.png",
            "country": "India",
            "job": "Credit Suisse",
            "p_link": "https://www.linkedin.com/in/palak-hasija-94727116b/recent-activity/all/",
            "l_link": "https://www.linkedin.com/in/palak-hasija-94727116b/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "Extremely happy to share that I have cleared FRM level 1. Thanks alot Micky Midha sir for your constant support and guidance."
        },
        {
            "_id": "65f1635ab778e21b1aed83f4",
            "name": "Partha Nandy",
            "image": "https://files.midhafin.com/wp-content/uploads/Partha-Nandy.png",
            "country": "India",
            "job": "HSBC ",
            "p_link": "https://www.quora.com/What-is-the-best-course-for-FRM/answer/Partha-Nandy-12?ch=10&oid=116471644&share=34bb2e82&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/partha-nandy-1bb9871b/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I have attended MF instructor Micky Midha online classes. The way he explains concepts of duration , convexity , option Greeks is ."
        },
        {
            "_id": "65f1635ab778e21b1aed83f6",
            "name": "Mahak Bagaria",
            "image": "https://files.midhafin.com/wp-content/uploads/Mahak-Bagaria.png",
            "country": "India",
            "job": "Goldman Sachs",
            "p_link": "https://www.quora.com/Do-we-really-need-to-join-a-coaching-class-for-FRM/answer/Mahak-Bagaria?ch=10&oid=189992971&share=44351b2f&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/mahak-bagaria-98953416a/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I appeared for the November 2019 exam, and cleared the part 1 exam in the first attempt. Being from a non-finance background, "
        },
        {
            "_id": "65f1635ab778e21b1aed83fa",
            "name": "Lavnya Ajmera",
            "image": "https://files.midhafin.com/wp-content/uploads/Lavnya-Ajmera.jpg",
            "country": "India",
            "job": "NatWest Markets Plc",
            "p_link": "https://www.quora.com/Which-is-the-best-coaching-for-FRM-online-DTH/answer/Lavnya-Ajmera?ch=10&oid=327004727&share=032ee6fe&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/lavnya-ajmera-4b2a4a207/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I decided to give the FRM exam and took coaching from Micky Midha Sir and joined MidhaFin classes for the same in July 2020 with no "
        },
        {
            "_id": "65f1635ab778e21b1aed83fb",
            "name": "Dhruv Anand",
            "image": "https://files.midhafin.com/wp-content/uploads/Dhruv-Anand.png",
            "country": "India",
            "job": "",
            "p_link": "https://www.quora.com/Which-is-the-best-study-material-for-FRM-part-1/answer/Dhruv-Anand-24?ch=10&oid=268239359&share=d75e4494&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/dhruv-anand-a48a32120/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I cleared FRM part 1 in January 2021 as It was postponed due to Covid. I joined MidhaFin after going through their trial video's."
        },
        {
            "_id": "65f1635ab778e21b1aed83e6",
            "name": "amarjit singh",
            "image": "https://files.midhafin.com/wp-content/uploads/Amarjit-Singh.png",
            "country": "India",
            "job": "ACFCS",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7151874257638096896/",
            "l_link": "https://www.linkedin.com/in/amarjit-singh-67956216/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I am glad to share that I have cleared FRM PART I. I would like to thank Micky Midha Sir and MidhaFin (MF) team for their support."
        },
        {
            "_id": "65f1635ab778e21b1aed83ed",
            "name": "Ravikant Kumar",
            "image": "https://files.midhafin.com/wp-content/uploads/Ravikant-Kumar.png",
            "country": "India",
            "job": "Motor Haat",
            "p_link": "https://www.linkedin.com/posts/ravikant-kumar-frm-35881722_frm-part-1-result-letter-activity-6771809261392683009-LMck/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/ravikant-kumar-frm-35881722/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "Happy to share that i have cleared FRM Part -1 #Financialriskmanagement #GARP#. I would like to thanks Micky Midha sir for his guidance and support."
        },
        {
            "_id": "65f1635ab778e21b1aed83ee",
            "name": "Kayode Samuel",
            "image": "https://files.midhafin.com/wp-content/uploads/Kayode-Samuel.jpg",
            "country": "Nigeria",
            "job": "Stanbic IBTC Bank",
            "p_link": "https://www.linkedin.com/posts/kayode-samuel-akintola-fca-acma-cgma-cior-97132133_frm-2-november-2023-result-activity-7152685824839409665-Gpd_/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/kayode-samuel-akintola-fca-acma-cgma-cior-97132133/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I would like to thank @Micky Midha for his support through my FRM - part 1 and Part 2 at first attempt. At @MidhaFin candidates are "
        },
        {
            "_id": "65f1635ab778e21b1aed83f0",
            "name": "Saswata Chowdhury",
            "image": "https://files.midhafin.com/wp-content/uploads/Saswata-Chowdhury.jpg",
            "country": "India",
            "job": "Cognext AI",
            "p_link": "https://www.quora.com/Which-is-the-best-coaching-institute-for-a-financial-risk-management-FRM-certification-in-India/answer/Saswata-Chowdhury-18?ch=10&oid=316496156&share=7aa34051&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/saswata-chowdhury-frm-293844207/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I enrolled myself with GARP in the year 2020 to appear for 2021 jan exam. I decided to join MidhaFin online exam and I passed "
        },
        {
            "_id": "65f1635ab778e21b1aed83fd",
            "name": "aditya midha",
            "image": "https://files.midhafin.com/wp-content/uploads/Aditya-Midha.png",
            "country": "India",
            "job": "",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148855664960782336/",
            "l_link": "https://www.linkedin.com/in/aditya-midha-24713b1b7/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "Hi,I am happy to announce that I have cleared my FRM Part 1 Exam.Apart from the knowledge gained, discipline and time management are "
        },
        {
            "_id": "65f1635ab778e21b1aed83e2",
            "name": "vishwanath makela",
            "image": "https://files.midhafin.com/wp-content/uploads/Vishwanath-Makela.png",
            "country": "India",
            "job": "Bank of Maharashtra",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148727976786812929/",
            "l_link": "https://www.linkedin.com/in/viswanath-mekala-b694b976/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I'm happy to share that I've obtained a new certification: Financial Risk Manager - FRM (Part 1) from Global Association of Risk Professionals"
        },
        {
            "_id": "65f1635ab778e21b1aed83e8",
            "name": "santosh kumar",
            "image": "https://files.midhafin.com/wp-content/uploads/Santosh-Kumar.png",
            "country": "India",
            "job": "Union Bank of India",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7151531889516802048/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/santosh-kumar-certified-frm-b11912217/",
            "v_link": "",
            "course": "FRM part-2",
            "excerpt": "Elated to share that I have passed FRM level 2 with the consistent support and guidance from Micky Midha and team MidhaFin (MF)"
        },
        {
            "_id": "65f1635ab778e21b1aed83e9",
            "name": "aminoritse adedayo",
            "image": "https://files.midhafin.com/wp-content/uploads/Aminoritse-Adedayo.png",
            "country": "Ireland",
            "job": "FMS Wertmanagement",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7018880735616880640/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/aminoritse-adedayo-frm%C2%AE-58386480/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I am excited to share that I Passed FRM Level 1 exam. All Glory to GOD and my Sincere Appreciation and Thanks to MICKY MIDHA ."
        },
        {
            "_id": "65f1635ab778e21b1aed83eb",
            "name": "vikramjeet singh",
            "image": "https://files.midhafin.com/wp-content/uploads/Vikramjeet-Singh.png",
            "country": "New Zealand",
            "job": "Entain",
            "p_link": "https://www.linkedin.com/posts/vikramjeet-singh-frm-cgss-cams-pgdip-banking-mba-1394b421_frm-personaldevelopment-neverstoplearning-activity-7016529010700541952-HyqK/?utm_source=share&utm_medium=member_desktop",
            "l_link": "https://www.linkedin.com/in/vikramjeet-singh-frm-cgss-cams-pgdip-banking-mba-1394b421/",
            "v_link": "",
            "course": "FRM part-2",
            "excerpt": "I am overjoyed and delighted to announce the passing of Financial Risk Manager (FRM) part 1 exam. What a wonderful way to "
        },
        {
            "_id": "65f1635ab778e21b1aed83f2",
            "name": "Faizan Kousar",
            "image": "https://files.midhafin.com/wp-content/uploads/Faizan-Kousar.png",
            "country": "India",
            "job": "Credit Suisse",
            "p_link": "https://www.quora.com/Which-online-coaching-institute-is-best-for-the-FRM/answer/Faizan-Kousar?ch=10&oid=334785024&share=a4dc6e93&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/faizan-kousar1999/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I have cleared Nov'21 FRM Part 1 exam and MidhaFin had played a vital role in making sure that the candidate is able to tackle the kind."
        },
        {
            "_id": "65f1635ab778e21b1aed83f3",
            "name": "Shadma Khan",
            "image": "https://files.midhafin.com/wp-content/uploads/Shadma-Khan.png",
            "country": "India",
            "job": "Central Bank Of India",
            "p_link": "https://www.quora.com/Which-online-classes-are-best-for-FRM-Level-1/answer/Shadma-Khan-1?ch=10&oid=92851498&share=a67db2e2&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/shadma-khan-frm-17788a26/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I cleared FRM Part 2 in November 2018 and FRM Part 1 in May 2018 , BOTH under the supervision of Micky Midha. His institution "
        },
        {
            "_id": "65f1635ab778e21b1aed83f5",
            "name": "Upanshu Gaharana",
            "image": "https://files.midhafin.com/wp-content/uploads/Upanshu-Gaharana.png",
            "country": "India",
            "job": "Credit SuissE",
            "p_link": "https://www.quora.com/How-do-I-prepare-for-FRM-level-1/answer/Upanshu-Gaharana-1?ch=10&oid=191061013&share=ae8aa024&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/ug0607199/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "To make myself eligible for answering the question, i need to tell you that i had cleared FRM Part 1 in first attempt with quartiles 2222"
        },
        {
            "_id": "65f1635ab778e21b1aed83f7",
            "name": "Nikhil Nair",
            "image": "https://files.midhafin.com/wp-content/uploads/Nikhil-Nair.png",
            "country": "India",
            "job": "Bain & Co.",
            "p_link": "https://www.quora.com/Can-one-clear-FRM-level-1-and-2-without-coaching/answer/Nikhil-Nair-115?ch=10&oid=152284631&share=b0eb2c5c&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/ca-nikhil-nair/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I cleared FRM Part I without coaching in Nov 2017. I took Part II in May and Nov 2018 without coaching, and without success. I finally "
        },
        {
            "_id": "65f1635ab778e21b1aed83f9",
            "name": "Acchintya S Talwarr",
            "image": "https://files.midhafin.com/wp-content/uploads/Acchintya-S-Talwar.png",
            "country": "Canada ",
            "job": "EXL",
            "p_link": "https://www.quora.com/Can-anyone-help-me-choose-a-good-FRM-online-coaching/answer/Achintya-Talwar-1?ch=10&oid=151196357&share=6c505096&srid=q4YhH&target_type=answer",
            "l_link": "https://www.linkedin.com/in/acchintyastalwarr/",
            "v_link": "",
            "course": "FRM part-2",
            "excerpt": "I cleared FRM level 2 in the first attempt with Quartile 1 in all sections.I began reading the chapters and soon realised that many "
        },
        {
            "_id": "65f1635ab778e21b1aed83fc",
            "name": "nandhaa palanivel",
            "image": "https://files.midhafin.com/wp-content/uploads/Nandhaa-Palanivel.png",
            "country": "India",
            "job": "",
            "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7154105341046083584/",
            "l_link": "https://www.linkedin.com/in/nandhaa-palanivel-a80127261/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "I'm happy to share that I have completed my FRM PART 1 Examination.I would also like to convey my thanks to Micky Midha"
        },
        {
            "_id": "660679a39f43ce8bbe198b43",
            "name": "vikramjeet Singh",
            "image": "https://files.midhafin.com/wp-content/uploads/Vikramjeet-Singh.png",
            "country": "New Zealand",
            "job": "Entain",
            "p_link": "https://www.quora.com/What-is-the-best-online-course-for-the-Financial-Risk-Manager-FRM-part-1-and-part-2/answer/Vikramjeet-Singh-496?ch=15&oid=1477743750045464&share=93c43d6b&srid=upfbLO&target_type=answer",
            "l_link": "https://www.linkedin.com/in/vikramjeet-singh-frm-cgss-cams-pgdip-banking-mba-1394b421/",
            "v_link": "",
            "course": "FRM part-1",
            "excerpt": "The self-paced course offered for FRM exam preparation by Midha Fin is an excellent choice for individuals who prefer flexibility "
        }
    ]
    return (
        <>
            <div className="bg-Reviewsbg max-h-[300px] h-[100%] shadow-xl">
                <div className="max-w-[1200px] px-[20px] mg:px-[50px] mx-auto py-4 mg:py-9">
                    <h1 className="text-[30px] md:text-[40px] xl:text-[50px] my-2 mg:my-5 font-semibold text-[#6A1C1A]">Student <span className="text-[#BE4E1E]"> Reviews</span></h1>
                    <p className="text-[16px] lg:text-[20px] max-w-[800px] lg:leading-[32px]">Discover what our students and educators are saying about our transformative learning experiences.</p>
                </div>
            </div>
            <div className="max-w-[1400px] px-[10px] mg:px-[50px] mx-auto flex flex-wrap justify-center mt-[5%] gap-8">
                {data.map((review, index) => (
                    <div key={index} className="w-[330px] mg:w-[400px] aspect-square text-center justify-between  rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 mg:p-4 ">
                        <div className="flex text-left items-center justify-start  h-[120px]">
                            <Image width={120} height={120} src={review.image} alt={review.name} className='w-[100px] h-[100px] aspect-square flex-shrink-0  border-[#ffffff]   rounded-[50%] border shadow-lg' />
                            <div className="pl-[15px] mg:pl-[30px]">
                                <h1 className="text-[18px] mg:text-[24px] font-[500]">{capitalizeWords(review.name)}</h1>
                                <h1 className='text-[14px] mg:text-[16px] font-[400] text-[#081A31] my-1 max-w-[210px]'>{review.job ? `Financial Risk Manager at ${review.job}`: " "} </h1>
                                <p className='text-[#BE4E1E] text-[16px] font-[400] flex text-center '>{capitalizeWords(review.country)} <span className="text-slate-400">&nbsp;|&nbsp;</span> <Link target='_blank' href={review.l_link}><FaLinkedin className='text-[25px] text-[#0072b1] hover:cursor-pointer' /></Link></p>
                            </div>
                        </div>
                        <p className="text-[#BE4E1E] text-[16px] mg:text-[18px] bg-[#F9F8F5] rounded-full my-5 w-fit mx-auto px-7 py-1 flex items-center">{capitalizeWords(review.course)}&nbsp; :&nbsp;&nbsp;<span className="text-[#f3c35d] flex pb-[3px] gap-1"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span></p>
                        <h1 className=''> </h1>
                        <h1 className='text-center mg:text-left mx-auto text-[16px]  mg:text-[18px] max-w-[350px] leading-[30px]'>&quot; {`${review.excerpt}`}...<Link href={review.p_link} className='underline text-[#BE4E1E]'>(Read More)&quot;</Link> </h1>
                    </div>

                ))}
            </div>
        </>
    );
}



