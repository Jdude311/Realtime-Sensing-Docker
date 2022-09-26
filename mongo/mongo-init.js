db.createUser(
  {
    user: "mqtt",
    pwd: "mqttpassword",
    roles: [
      {
        role: "readWrite",
        db: "sensors"
      }
    ]
  }
);

db.createUser(
  {
    user: "web",
    pwd: "webpassword",
    roles: [
      {
        role: "read",
        db: "sensors"
      }
    ]
  }
);
