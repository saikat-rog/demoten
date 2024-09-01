const content = [
  {
    id: 1,
    title: "Book Keeping",
    slug: "bookkeeping",
    about: "Bookkeeping involves maintaining accurate and up-to-date records of all your company's financial activities. This includes bank records, tax filings, payroll records, purchase and sale records, and regulatory filings.",
    content: [
      "Ensures compliance with regulatory requirements.",
      "Provides accurate financial data for informed decision-making.",
      "Simplifies the audit process.",
      "Enhances financial transparency and accountability.",
      "Reduces the risk of financial discrepancies and fraud.",
      "Facilitates timely and accurate tax filings."
    ]
  },
  {
    id: 2,
    title: "Management Accounting",
    slug: "managementaccounting",
    about: "Management accounting involves presenting financial information for internal use by management to aid in decision-making.",
    content: [
      "Helps in strategic planning and decision-making.",
      "Provides insights into financial performance and trends.",
      "Aids in budget preparation and monitoring.",
      "Identifies cost-saving opportunities.",
      "Enhances financial control and resource allocation.",
      "Supports performance evaluation and management."
    ]
  },
  {
    id: 3,
    title: "Payroll",
    slug: "payroll",
    about: "Payroll management involves handling all aspects of employee compensation and benefits.",
    content: [
      "Ensures timely and accurate payment of salaries.",
      "Maintains compliance with employment laws and regulations.",
      "Reduces administrative burden on the business.",
      "Enhances employee satisfaction and retention.",
      "Streamlines benefit management and processing.",
      "Provides detailed payroll reports for financial analysis."
    ]
  },
  {
    id: 4,
    title: "Tax Preparation",
    slug: "taxpreparation",
    about: "Tax preparation involves compiling necessary documentation and filing tax returns accurately and timely.",
    content: [
      "Minimizes the risk of tax liabilities and penalties.",
      "Ensures compliance with current tax laws and regulations.",
      "Identifies potential tax deductions and credits.",
      "Reduces the time and stress associated with tax filing.",
      "Provides expert advice on complex tax matters.",
      "Enhances financial planning and cash flow management."
    ]
  },
  {
    id: 5,
    title: "Tax Consulting",
    slug: "taxconsulting",
    about: "Tax consulting provides specialized advice to minimize tax liabilities and ensure compliance.",
    content: [
      "Reduces overall tax burden through strategic planning.",
      "Ensures compliance with ever-changing tax regulations.",
      "Identifies and leverages tax-saving opportunities.",
      "Provides guidance on tax-efficient business structuring.",
      "Enhances financial predictability and stability.",
      "Offers proactive solutions to avoid potential tax issues."
    ]
  },
  {
    id: 6,
    title: "Internal Auditing",
    slug: "internalauditing",
    about: "Internal auditing provides an objective assessment of your company's operations and controls.",
    content: [
      "Identifies and mitigates risks and inefficiencies.",
      "Enhances operational effectiveness and control.",
      "Ensures compliance with internal policies and regulations.",
      "Provides independent assurance to stakeholders.",
      "Supports continuous improvement initiatives.",
      "Strengthens governance and accountability."
    ]
  },
  {
    id: 7,
    title: "Financial Consulting",
    slug: "financialconsulting",
    about: "Financial consulting provides expert analysis and advice on strategic financial decisions.",
    content: [
      "Offers insights into the financial impact of business decisions.",
      "Supports investment analysis and valuation.",
      "Assists in financial forecasting and budgeting.",
      "Identifies opportunities for financial growth and improvement.",
      "Provides guidance on mergers, acquisitions, and partnerships.",
      "Enhances overall financial strategy and planning."
    ]
  }
];

export const getBookkeepingData = async (slug: string) => {
  return content.find(item => item.slug === slug);
};
