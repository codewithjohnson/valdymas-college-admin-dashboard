import { nanoid } from "nanoid";

export const waecSubjects = [
  "Biology",
  "Chemistry",
  "Physics",
  "Mathematics",
  "English Language",
  "Economics",
  "Agricultural Science",
  "Commerce",
  "Animal Husbandry",
  "Basic Electricity/Applied Electricity",
  "Auto Body Repairs and Spray Painting",
  "Auto Electrical Work",
  "Auto Mechanical Work",
  "Auto Mechanics",
  "Auto Parts Merchandising",
  "Basketry",
  "Block Laying, Brick Laying and Concrete Works",
  "Book Keeping",
  "Building Construction",
  "Business Management",
  "Carpentry and Joinery",
  "Catering Craft Service",
  "Ceramics",
  "Christian Religious Studies (CRS)",
  "Civic Education",
  "Clerical Office Duties",
  "Clothing and Textiles",
  "Computer Studies",
  "Cosmetology",
  "Crop Husbandry and Horticulture",
  "Data Processing",
  "Dyeing and Bleaching",
  "Edo Language",
  "Efik",
  "Electrical Installation and Maintenance Work",
  "Basic Electronics",
  "Financial Accounting",
  "Financial Accounts",
  "Fisheries",
  "Food and Nutrition",
  "Forestry",
  "French",
  "Furniture Making",
  "Further Mathematics",
  "Garment Making",
  "General Agriculture",
  "General Knowledge in Art",
  "Geography",
  "Government",
  "Graphic Design",
  "GSM Phones Maintenance and Repairs",
  "Hausa",
  "Health Education",
  "History",
  "Home Management",
  "Ibibio",
  "Igbo",
  "Information and Communication Technology",
  "Insurance",
  "Integrated Science",
  "Islamic Religious Studies (IRS)",
  "Jewellery",
  "Leather Goods Manufacturing",
  "Leather Work",
  "Literature in English",
  "Machine Woodworking",
  "Marketing",
  "Metal Work",
  "Mining",
  "Music",
  "Office Practice",
  "Painting and Decorating",
  "Photography",
  "Physical Education",
  "Picture Making",
  "Plumbing and Pipe Fitting",
  "Principles of Cost Accounting",
  "Printing Craft Practice",
  "Radio, Television and Electronics Works",
  "Refrigeration and Air Conditioning",
  "Salesmanship",
  "Sculpture",
  "Shorthand",
  "Social Studies",
  "Store Keeping",
  "Store Management",
  "Technical Drawing",
  "Textiles",
  "Tourism",
  "Typewriting",
  "Upholstery",
  "Visual Art",
  "Welding and Fabrication Engineering Craft",
  "West African Traditional Religion",
  "Wood Work",
  "Yoruba",
];
// convert the array above to array of objects with id
export const waecSubjectsWithId = waecSubjects.map((state) => {
  return { id: nanoid(), state };
});

// ----------------- O LEVEL GRADES -----------------
export const olevelGrades = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9", "AR"];

// convert the array above to array of objects with id
export const olevelGradesWithId = olevelGrades.map((state) => {
  return { id: nanoid(), state };
});

export const examTypes = ["waec", "neco", "gce", "nabteb", "AR"];
// convert the array above to array of objects with id
export const examTypesWithId = examTypes.map((state) => {
  return { id: nanoid(), state };
});

export const exams = ["private canditate results", "public canditate results", "AR"];

// convert the array above to array of objects with id
export const examsWithId = exams.map((state) => {
  return { id: nanoid(), state };
});

export const examYears = [...Array(24).keys()].map((i) => 2000 + i);
// convert the array above to array of objects with id
export const examYearsWithId = examYears.map((state) => {
  return { id: nanoid(), state };
});
