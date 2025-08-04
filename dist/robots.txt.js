import { config } from "./config.js";
const handler = (c) => {
    if (config.DISALLOW_ROBOT) {
        return c.text("User-agent: *\nDisallow: /");
    }
    else {
        c.status(404);
        return c.text("");
    }
};
export default handler;
