const Sequelize = require("sequelize");

class MyModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      { myField: DataTypes.STRING },
      { sequelize, tableName: "myModels" }
    );
  }

  // Association
  static associate(models) {
    this.myAssociation = this.belongsTo(models.OtherModel);
    // or this.myAssociation = models.MyModel.belongsTo(models.OtherModel);
  }

  // Query
  static getId(where) {
    return this.findOne({
      where,
      attributes: ["id"],
      order: [["createdAt", "DESC"]]
    });
  }

  // Instance methods
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = MyModel;
