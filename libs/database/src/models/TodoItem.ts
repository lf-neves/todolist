const { Model, DataTypes } = require("sequelize");

class TodoItem extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        deadline: DataTypes.DATE,
        user_id: DataTypes.UUID,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = TodoItem;
