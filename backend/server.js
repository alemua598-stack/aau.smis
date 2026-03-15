const cors = require("cors");

// Replace this with your exact Vercel URL
const allowedOrigins = ["https://aau-smis.vercel.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allows requests with no origin (like mobile apps)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
