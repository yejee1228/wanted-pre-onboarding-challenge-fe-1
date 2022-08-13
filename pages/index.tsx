import { Auth, Todo } from "components";
import { getToken } from "lib/util/token";

const Index = () => {
  const token = getToken()

  return (
    <>
      {
        token
          ?
          <Todo />
          :
          <Auth />
      }
    </>
  );
};

export default Index;