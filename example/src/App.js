import React, { Component } from "react";

import Can from "pure-can-component";

export default class App extends Component {
  render() {
    const authorities1 = {
      user_read: "user_read",
      user_write: "user_write"
    };
    const authorities2 = {
      user_read: "user_read"
    };
    const authorities3 = {
      user_read: "user_read",
      user_write: "user_write"
    };
    return (
      <div>
        <p>
          <Can have={["user_read", "user_write"]} authorities={authorities1}>
            THIS IS CHILD SHOULD DISPLAY!
          </Can>
        </p>
        <p>
          <Can have={["user_write"]} authorities={authorities2}>
            THIS IS CHILD WILL NOT DISPLAY!
          </Can>
        </p>
        <p>
          <Can oneOf={["user_read", "user_write"]} authorities={authorities2}>
            THIS IS CHILD SHOULD DISPLAY!
          </Can>
        </p>
        <p>
          <Can oneOf={["wrong_authority"]} authorities={authorities2}>
            THIS IS CHILD WILL NOT DISPLAY!
          </Can>
        </p>
        <p>
          <Can
            oneOf={["user_read", "user_write"]}
            authorities={authorities3}
            veyahut={<p>THIS IS VEYAHUT COMPONENT WILL NOT DISPLAY</p>}
          >
            THIS IS CHILD SHOULD DISPLAY!
          </Can>
        </p>
        <p>
          <Can
            oneOf={["wrong_authority"]}
            authorities={authorities3}
            veyahut={<p>THIS IS VEYAHUT COMPONENT WILL DISPLAY</p>}
          >
            THIS IS CHILD WILL NOT DISPLAY!
          </Can>
        </p>
      </div>
    );
  }
}
