import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";

Category.hasMany(Course); //1 categorias para vários cursos
Course.belongsTo(Category); // 1 curso para 1 categoria
Course.hasMany(Episode);
Episode.belongsTo(Course);

export { Category, Course, Episode, User };
