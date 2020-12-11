const cors = require("micro-cors");
const sgMail = require("@sendgrid/mail");

const origins = (process.env.CORS_ORIGINS || "").split(",").map((o) => {
  const t = o.trim();
  if (/^https?:\/\//.test(t)) {
    return t;
  }
  return `https://${t}`;
});

module.exports = async (req, res) => {
  const origin = /^https?:\/\/localhost(:\d+)?\/?$/.test(req.headers.origin)
    ? req.headers.origin
    : origins.find((o) => o === req.headers.origin);

  if (!origin) {
    return res.status(500).end();
  }
  return cors({ origin, allowMethods: ["POST", "OPTIONS"] })(handler)(req, res);
};

async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  let status = 500;
  let message = "mail not sent";
  const { body } = req;

  switch (true) {
    case req.method !== "POST":
      status = 500;
      message = "Accepts only POST requests";
      break;
    case !process.env.SENDGRID_KEY:
      status = 500;
      message = "Key not configured";
      break;
    case !body:
      status = 400;
      message = "Missing body";
      break;
    case !process.env.CONTACT_EMAIL:
      status = 500;
      message = "Email not configured";
      break;
    case !body.email:
      status = 422;
      message = "Missing email address";
      break;
    case !body.company || !body.project || !body.budget:
      status = 422;
      message = "Missing information";
      break;
    case !body.message:
      status = 422;
      message = "Missing message";
      break;
    default: {
      const { message: emailBody, ...others } = body;
      const msg = {
        to: process.env.CONTACT_EMAIL,
        from: process.env.CONTACT_EMAIL,
        subject: `${body.company} <> Giuseppe Gurgone | ${body.project}`,
        text: `${emailBody}\n\n${Object.entries(others)
          .map(([key, value]) => `- ${key}: ${value}`)
          .join("\n")}`,
      };
      try {
        sgMail.setApiKey(process.env.SENDGRID_KEY);
        await sgMail.send(msg);
        status = 200;
        message = "OK";
      } catch (error) {
        status = 500;
        message = "An error occurred while trying to send the mssage";
      }
      break;
    }
  }

  res.statusMessage = message;
  res
    .status(status)
    .json({ message })
    .end();
}
