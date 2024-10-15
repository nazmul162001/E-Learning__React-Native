import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.e-learning.app",
  projectId: "670ebde70030ec838b23",
  databaseId: "670ec384003735496209",
  userCollectionId: "670ec3d700178862ac00",
  videoCollectionId: "670ec44a0020bea8b758",
  storageId: "670ec742001275bd74bc",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

// Register User
export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
