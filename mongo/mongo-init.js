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

db = new Mongo().getDB("sensors");

db.createCollection("realtime", { capped: false });

db.realtime.insert([
  {"time": Date.now(), "location": "RDHS 312 (SCD30 TEST 1)","tvoc": 0, "co2": 807.117, "temperature": 27.0268, "humidity": 28.1662}
])
