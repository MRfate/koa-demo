import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from "../conn";

interface IUserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface IngredientInput extends Optional<IUserAttributes, 'id'> {}
export interface IngredientOuput extends Required<IUserAttributes> {}


class User extends Model<IUserAttributes, IngredientInput> implements IUserAttributes {
    public id!: number
    public name!: string
    public email!: string
    public password!: string
}



User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "asdada"
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})



sequelizeConnection.sync({
    alter: true // force:为true时强制删除表 alter：为true时更新表字段
    // force: true // force:为true时强制删除表 alter：为true时更新表字段
}).then();


export default User