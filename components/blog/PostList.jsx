"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function PostList() {
    const [searchTerm, setSearchTerm] = useState('');

    const Part1 = {
        title: "FRM Part-1",
        data: [
            {
                title: "Foundations of Risk Management",
                data: [
                    { title: "The Building Blocks of Risk Management", slug: "the-building-blocks-of-risk-management" },
                    { title: "How Do Firms Manage Financial Risk?", slug: "how-do-firms-manage-financial-risk" },
                    { title: "The Governance of Risk Management", slug: "the-governance-of-risk-management" },
                    { title: "Credit Risk Transfer Mechanisms", slug: "credit-risk-transfer-mechanisms" },
                    { title: "Modern Portfolio Theory (MPT) and the Capital Asset Pricing Model (CAPM)", slug: "modern-portfolio-theory-and-capital-asset-pricing-model" },
                    { title: "The Arbitrage Pricing Theory and Multifactor Models of Risk and Return", slug: "arbitrage-pricing-theory-and-multifactor-models-of-risk-and-return" },
                    { title: "Principles for Effective Data Aggregation and Risk Reporting", slug: "principles-for-effective-data-aggregation-and-risk-reporting" },
                    { title: "Enterprise Risk Management and Future Trends", slug: "enterprise-risk-management-and-future-trends" },
                    { title: "Learning from Financial Disasters", slug: "learning-from-financial-disasters" },
                    { title: "Anatomy of the Great Financial Crisis of 2007-2009", slug: "anatomy-of-the-great-financial-crisis-of-2007-2009" },
                    { title: "GARP Code of Conduct", slug: "garp-code-of-conduct" }
                ]
            },
            {
                title: "Quantitative Analysis",
                data: [
                    { title: "Fundamentals of Probability", slug: "fundamentals-of-probability" },
                    { title: "Random Variables", slug: "random-variables" },
                    { title: "Common Univariate Random Variables", slug: "common-univariate-random-variables" },
                    { title: "Multivariate Random Variables", slug: "multivariate-random-variables" },
                    { title: "Sample Moments", slug: "sample-moments" },
                    { title: "Hypothesis Testing", slug: "hypothesis-testing" },
                    { title: "Linear Regression", slug: "linear-regression" },
                    { title: "Regression with Multiple Explanatory Variables", slug: "regression-with-multiple-explanatory-variables" },
                    { title: "Regression Diagnostics", slug: "regression-diagnostics" },
                    { title: "Stationary Time Series", slug: "stationary-time-series" },
                    { title: "Non-Stationary Time Series", slug: "non-stationary-time-series" },
                    { title: "Measuring Returns, Volatility, and Correlation", slug: "measuring-returns-volatility-and-correlation" },
                    { title: "Simulation and Bootstrapping", slug: "simulation-and-bootstrapping" },
                    { title: "Machine Learning Methods", slug: "machine-learning-methods" },
                    { title: "Machine Learning and Prediction", slug: "machine-learning-and-prediction" }
                ]
            },
            {
                title: "Financial Markets and Products",
                data: [
                    { title: "Banks", slug: "banks" },
                    { title: "Insurance Companies and Pension Plans", slug: "insurance-companies-and-pension-plans" },
                    { title: "Fund Management", slug: "fund-management" },
                    { title: "Introduction to Derivatives", slug: "introduction-to-derivatives" },
                    { title: "Exchanges and OTC Markets", slug: "exchanges-and-otc-markets" },
                    { title: "Central Clearing", slug: "central-clearing" },
                    { title: "Futures Markets", slug: "futures-markets" },
                    { title: "Using Futures for Hedging", slug: "using-futures-for-hedging" },
                    { title: "Foreign Exchange Markets", slug: "foreign-exchange-markets" },
                    { title: "Pricing Financial Forwards and Futures", slug: "pricing-financial-forwards-and-futures" },
                    { title: "Commodity Forwards and Futures", slug: "commodity-forwards-and-futures" },
                    { title: "Options Markets", slug: "options-markets" },
                    { title: "Properties of Options", slug: "properties-of-options" },
                    { title: "Trading Strategies", slug: "trading-strategies" },
                    { title: "Exotic Options", slug: "exotic-options" },
                    { title: "Properties of Interest Rates", slug: "properties-of-interest-rates" },
                    { title: "Corporate Bonds", slug: "corporate-bonds" },
                    { title: "Mortgages and Mortgage-Backed Securities", slug: "mortgages-and-mortgage-backed-securities" },
                    { title: "Interest Rate Futures", slug: "interest-rate-futures" },
                    { title: "Swaps", slug: "swaps" }
                ]
            },
            {
                title: "Valuation and Risk Models",
                data: [
                    { title: "Measures of Financial Risk", slug: "measures-of-financial-risk" },
                    { title: "Calculating and Applying VaR", slug: "calculating-and-applying-var" },
                    { title: "Measuring and Monitoring Volatility", slug: "measuring-and-monitoring-volatility" },
                    { title: "External and Internal Credit Ratings", slug: "external-and-internal-credit-ratings" },
                    { title: "Country Risk", slug: "country-risk" },
                    { title: "Measuring Credit Risk", slug: "measuring-credit-risk" },
                    { title: "Operational Risk", slug: "operational-risk" },
                    { title: "Stress Testing", slug: "stress-testing" },
                    { title: "Pricing Conventions, Discounting, and Arbitrage", slug: "pricing-conventions-discounting-and-arbitrage" },
                    { title: "Interest Rates", slug: "interest-rates" },
                    { title: "Bond Yields and Return Calculations", slug: "bond-yields-and-return-calculations" },
                    { title: "Applying Duration, Convexity, and DV01", slug: "applying-duration-convexity-and-dv01" },
                    { title: "Modeling Non-Parallel Term Structure Shifts and Hedging", slug: "modeling-non-parallel-term-structure-shifts-and-hedging" },
                    { title: "Binomial Trees", slug: "binomial-trees" },
                    { title: "The Black-Scholes-Merton Model", slug: "the-black-scholes-merton-model" },
                    { title: "Option Sensitivity Measures: The “Greeks”", slug: "option-sensitivity-measures-the-greeks" }
                ]
            }
        ]
    };

    const Part2 = {
        title: "FRM Part-2",
        data: [
            {
                title: "Market Risk Measurement and Management",
                data: [
                    { title: "Estimating Market Risk Measures: An Introduction and Overview", slug: "estimating-market-risk-measures" },
                    { title: "Non-parametric Approaches", slug: "non-parametric-approaches" },
                    { title: "Parametric Approaches (II): Extreme Value", slug: "parametric-approaches-extreme-value" },
                    { title: "Backtesting VaR", slug: "backtesting-var" },
                    { title: "VaR Mapping", slug: "var-mapping" },
                    { title: "Lessons on VaR Implementation", slug: "lessons-on-var-implementation" },
                    { title: "Correlation Basics: Definitions, Applications, and Terminology", slug: "correlation-basics" },
                    { title: "Empirical Properties of Correlation", slug: "empirical-properties-of-correlation" },
                    { title: "Financial Correlation Modeling — Bottom-Up Approaches", slug: "financial-correlation-modeling" },
                    { title: "Empirical Approaches to Risk Metrics and Hedging", slug: "empirical-approaches-to-risk-metrics-and-hedging" },
                    { title: "The Science of Term Structure Models", slug: "the-science-of-term-structure-models" },
                    { title: "The Evolution of Short Rates and the Shape of the Term Structure", slug: "evolution-of-short-rates-and-term-structure" },
                    { title: "The Art of Term Structure Models: Drift", slug: "the-art-of-term-structure-models-drift" },
                    { title: "The Art of Term Structure Models: Volatility and Distribution", slug: "the-art-of-term-structure-models-volatility-and-distribution" },
                    { title: "Volatility Smiles", slug: "volatility-smiles" },
                    { title: "Fundamental Review of the Trading Book", slug: "fundamental-review-of-the-trading-book" }
                ]
            },
            {
                title: "Credit Risk Measurement and Management",
                data: [
                    { title: "Fundamentals of Credit Risk", slug: "fundamentals-of-credit-risk" },
                    { title: "Governance", slug: "governance" },
                    { title: "Credit Risk Management", slug: "credit-risk-management" },
                    { title: "Capital Structure in Banks", slug: "capital-structure-in-banks" },
                    { title: "Introduction to Credit Risk Modeling and Assessment", slug: "introduction-to-credit-risk-modeling-and-assessment" },
                    { title: "Credit Scoring and Rating", slug: "credit-scoring-and-rating" },
                    { title: "Credit Scoring and Retail Credit Risk Management", slug: "credit-scoring-and-retail-credit-risk-management" },
                    { title: "Country Risk: Determinants, Measures, and Implications", slug: "country-risk-determinants-measures-and-implications" },
                    { title: "Estimating Default Probabilities", slug: "estimating-default-probabilities" }
                ]
            },
            {
                title: "Operational Risk and Resilience",
                data: [
                    { title: "Introduction to Operational Risk", slug: "introduction-to-operational-risk" },
                    { title: "Operational Risk Frameworks and Regulations", slug: "operational-risk-frameworks-and-regulations" },
                    { title: "Operational Risk Measurement and Management Techniques", slug: "operational-risk-measurement-and-management-techniques" },
                    { title: "Business Continuity Management", slug: "business-continuity-management" },
                    { title: "Cyber Risk Management", slug: "cyber-risk-management" },
                    { title: "Third-Party Risk Management", slug: "third-party-risk-management" },
                    { title: "Emerging Risks in Operational Risk and Resilience", slug: "emerging-risks-in-operational-risk-and-resilience" }
                ]
            },
            {
                title: "Liquidity and Treasury Risk Measurement and Management",
                data: [
                    { title: "Introduction to Liquidity Risk", slug: "introduction-to-liquidity-risk" },
                    { title: "Liquidity Risk Measurement Techniques", slug: "liquidity-risk-measurement-techniques" },
                    { title: "Treasury Risk Management", slug: "treasury-risk-management" },
                    { title: "Managing Funding Liquidity Risk", slug: "managing-funding-liquidity-risk" },
                    { title: "Contingency Funding Plans", slug: "contingency-funding-plans" },
                    { title: "Liquidity Stress Testing", slug: "liquidity-stress-testing" }
                ]
            },
            {
                title: "Risk Management and Investment Management",
                data: [
                    { title: "Portfolio Construction and Management", slug: "portfolio-construction-and-management" },
                    { title: "Performance Measurement and Attribution", slug: "performance-measurement-and-attribution" },
                    { title: "Asset Allocation Strategies", slug: "asset-allocation-strategies" },
                    { title: "Risk Budgeting and Risk Allocation", slug: "risk-budgeting-and-risk-allocation" },
                    { title: "Risk Management Techniques in Investment Management", slug: "risk-management-techniques-in-investment-management" }
                ]
            },
            {
                title: "Current Issues in Financial Markets",
                data: [
                    { title: "Trends in Financial Regulation", slug: "trends-in-financial-regulation" },
                    { title: "Impact of Technology on Financial Markets", slug: "impact-of-technology-on-financial-markets" },
                    { title: "Climate Risk and Sustainability", slug: "climate-risk-and-sustainability" },
                    { title: "Geopolitical Risks and Financial Markets", slug: "geopolitical-risks-and-financial-markets" },
                    { title: "Market Structure and Liquidity", slug: "market-structure-and-liquidity" },
                    { title: "Future Developments in Risk Management", slug: "future-developments-in-risk-management" }
                ]
            }
        ]
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = (section) => {
        return section.data.map((chapter) => {
            const filteredChapters = chapter.data.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return { ...chapter, data: filteredChapters };
        }).filter(chapter => chapter.data.length > 0);
    };

    return (
        <div className='max-w-[500px] m-5 border' style={{ resize: 'horizontal', overflow: 'hidden', minWidth: '300px', maxWidth: '800px' }}>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <div className='px-5'>
                <h1 className='font-bold text-3xl'>{Part1.title}</h1>
                <ul className='list-disc list-outside pl-5'>
                    {filteredData(Part1).map((section) => (
                        <li key={section.title}>
                            <h2 className='font-bold text-xl'>{section.title}</h2>
                            <ul className='list-decimal pl-5'>
                                {section.data.map((item) => (
                                    <Link key={item.slug} href={`/${item.slug}`}>
                                        <li>{item.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='px-5 '>
                <h1 className='font-bold text-3xl'>{Part2.title}</h1>
                <ul className='list-disc list-outside pl-5'>
                    {filteredData(Part2).map((section) => (
                        <li key={section.title}>
                            <h2 className='font-bold text-xl'>{section.title}</h2>
                            <ul className='list-decimal '>
                                {section.data.map((item) => (
                                    <Link key={item.slug} href={`/${item.slug}`}>
                                        <li >{item.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}