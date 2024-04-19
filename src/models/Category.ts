import { Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Category {
  id: number;
  name: string;
  position: number;
}

//deixando o Id opcional pois ainda n temo os id, só vai ter o ID depois de criar a cetegoria pq o BD que coloca o ID
export interface CartegoryCreationAttributes extends Optional<Category, "id"> {}

//instancia de uma categoria
//vai possuir todas as prop e metodos que os models do sequelize possuem
//tipos genericos pra ficar mais restrita e correta
//e também estende a interface Category
export interface CategoryInstace extends Model<Category, CartegoryCreationAttributes>, Category {} //

//definindo o model dentro da instância do sequelize
export const Category = sequelize.define<CategoryInstace, Category>("Category", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  position: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
});
