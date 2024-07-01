import { notFound } from 'next/navigation';
import Module_Details from '@/components/Common/Module_Details';

const modulesData = [
    {
        title: "Foundations of Risk Management (FRM)",
        module_no: 1,
        image: "https://www.frm.midhafin.com/part-1/desc_frm.svg",
        desc: "A proprietary book for FRM candidates has been created to cover these broad knowledge points. While detailed learning objectives associated with these readings are presented in the 2024 FRM Learning Objectives document, a summary of how to relate these readings to the knowledge points follows.",

        chapters: [
            {
                id: 1,
                ques: "The Building Blocks of Risk Management",
                ans: "Identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities.",
                free: true,
                slug: "/",
            },
            {
                id: 2,
                ques: "How Do Firms Manage Financial Risk?",
                ans: "How risks can arise in an organization, and how firms manage financial risks.",
                free: true,
                slug: "/",
            },
            {
                id: 3,
                ques: "The Governance of Risk Management",
                ans: "Describes the role of corporate governance in risk management, including the role of the board of directors and other areas of an organization. The concept of risk appetite and how it is translated into a risk appetite framework and communicated throughout an organization is presented as well in this chapter.",
                free: true,
                slug: "/",
            },
            {
                id: 4,
                ques: "Credit Risk Transfer Mechanisms",
                ans: "Presents an overview of credit risk transfer mechanisms, including credit derivatives and securitization, and discusses issues with the securitization of subprime mortgages.",
                free: true,
                slug: "/",
            },
            {
                id: 5,
                ques: "Modern Portfolio Theory and Capital Asset Pricing Model",
                ans: "Presents Modern Portfolio Theory (MPT) and the CAPM, one of the foundational developments in risk-adjusted pricing and valuation",
                free: true,
                slug: "/",
            },
            {
                id: 6,
                ques: "The Arbitrage Pricing Theory and Multifactor Models of Risk and Return",
                ans: "Explains how the Arbitrage Pricing Theory (APT) and factor models can be used to model returns on investment assets.",
                free: true,
                slug: "/",
            },
            {
                id: 7,
                ques: "Principles for Effective Data Aggregation and Risk Reporting",
                ans: "Addresses Data is the lifeblood of many large financial organizations and aggregating and reporting risk data have become increasingly important.",
                free: true,
                slug: "/",
            },
            {
                id: 8,
                ques: "Enterprise Risk Management and Future Trends",
                ans: "Introduces enterprise risk management (ERM), a common and important method for assessing and managing risk in an organizational context and discusses its future trends.",
                free: true,
                slug: "/",
            },
            {
                id: 9,
                ques: "Learning from Financial Disasters",
                ans: "Describes the importance of learning from the historical experience of various financial disasters from the past.",
                free: true,
                slug: "/",
            },
            {
                id: 10,
                ques: "Anatomy of the Great Financial Crisis of 2007-2009",
                ans: "Focuses on the financial crisis of 2007-2009.",
                free: true,
                slug: "/",
            },
            {
                id: 11,
                ques: "GARP Code of Conduct",
                ans: "Contains GARP's Code of Conduct, a code to help ensure ethical standards are upheld in the risk management profession.",
                free: true,
                slug: "/",
            },
        ]
    },
];

const ModulePage = ({ params }) => {
    const { module_no } = params;
    const currentModule = modulesData.find(m => m.module_no.toString() === module_no);

    if (!currentModule) {
        notFound();
    }

    return (
        <Module_Details data={currentModule} />
    );
}

export default ModulePage;
