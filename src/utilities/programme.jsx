import { nanoid } from "nanoid";

export const subjectCombination = [
  "biology",
  "chemistry",
  "mathematics",
  "physics",
  "geography",
  "economics",
  "government",
  "crs",
  "business management",
  "english",
  "literature",
  "french",
  "history",
  "commerce",
  "accounting",
];
// create an array of objects from above
export const subjectCombinationWithId = subjectCombination.map((state) => {
  return { id: nanoid(), state };
});

export const entryMode = ["IJMB", "JUPEB", "IJMB/JUPEB"];
// create an array of objects from above
export const entryModeWithId = entryMode.map((state) => {
  return { id: nanoid(), state };
});

export const department = ["science", "social sciences", "art"];
// create an array of objects from above
export const departmentWithId = department.map((state) => {
  return { id: nanoid(), state };
});
