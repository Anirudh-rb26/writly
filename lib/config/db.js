import mongoose from "mongoose";

const conntectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://anirudhjayakumarbusiness:hkvx7uYgygLKlN8v@writlyblogcluster.ejlrv.mongodb.net/?retryWrites=true&w=majority&appName=WritlyBlogCluster"
  );
};
