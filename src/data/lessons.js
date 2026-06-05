import { yearlyLessons } from "./lessons/index.js";

export const lessons = yearlyLessons.map((lesson, index) => ({
  id: index + 1,
  ...lesson
}));
