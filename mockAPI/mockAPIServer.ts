import { createServer } from "miragejs";
import {UsernameSuggestion} from '../reducers/usernamesReducer';

const mockAPIServer = createServer({
  routes() {

    this.namespace = "api";
    this.timing = 2000;

    this.get("/usernamesuggestions/:emailid", (schema, request) => {
        let emailId:string = request.params.emailid;
        return {
            usernames: [
              <UsernameSuggestion>{ id: 1, name: "username1" },
              <UsernameSuggestion>{ id: 2, name: "username2" },
              <UsernameSuggestion>{ id: 3, name: "username3" },
            ]
        }
      },
      { timing: this.timing }
    );

  }
});

export default mockAPIServer;