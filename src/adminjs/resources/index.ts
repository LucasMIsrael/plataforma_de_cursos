import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";

//indica quais models que vai gerenciar e quais options que detalha como ele vai gerenciar esse model
export const adminjsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions,
  },
];
