import { lessons2009To2012 } from "./lessons/2009-2012.js";
import { lessons2013To2018 } from "./lessons/2013-2018.js";
import { lessons2019To2022 } from "./lessons/2019-2022.js";
import { lessons2023To2025 } from "./lessons/2023-2025.js";

export const lessons = [
  ...lessons2009To2012,
  ...lessons2013To2018,
  ...lessons2019To2022,
  ...lessons2023To2025
].map((lesson, index) => ({
  id: index + 1,
  ...lesson
}));
