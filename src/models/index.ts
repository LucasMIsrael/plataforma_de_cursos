import { Category } from "./Category";
import { Course } from "./Course";

Category.hasMany(Course); //1 categorias para vários cursos
Course.belongsTo(Category); // 1 curso para 1 categoria

export { Category, Course };
