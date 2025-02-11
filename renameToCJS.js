import fs from "fs";
import path from "path";

const distDir = "./dist";

fs.readdirSync(distDir).forEach((file) => {
  if (file.endsWith(".js")) {
    const oldPath = path.join(distDir, file);
    const newPath = path.join(distDir, file.replace(".js", ".cjs"));
    fs.renameSync(oldPath, newPath);
  }
});
