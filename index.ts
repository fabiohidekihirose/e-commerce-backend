import { serverEndpoints } from "./src/server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const server = serverEndpoints();

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
