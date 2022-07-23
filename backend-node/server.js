import server from "./app";
import { PORT } from "./config/appConfig";

server.listen(PORT, () => {
  console.log(`Listening To Port:${PORT}`);
});
