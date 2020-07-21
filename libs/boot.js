module.exports = (app) => {
  app.db.sequelize.sync().then(() => {
    app.listen(app.get("port"), () => {
      console.log(`NTask API - Port ${app.get("port")}`);
    });
  })
};
