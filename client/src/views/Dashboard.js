import React, { Component } from "react";
import { compose } from "recompose";
import { Link } from "react-router-dom";

import {
  withAuthorization,
  withEmailVerification
} from "../containers/Sessions";
import axios from "axios";
import GroupCard from "../components/GroupCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }
  componentDidMount() {
    this.fetchGroups();
  }

  //Gets all groups from database
  fetchGroups = () => {
    let id = localStorage.getItem("uid");
    let fakeid = 2;
    axios
      .get(`localhost:9000/api/group/user/${fakeid}`)
      .then(res => {
        console.log(res);
        this.setState({ groups: res.data });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button className="waves-effect waves-light btn-large">
          New Group
        </button>
        <h2>My Family Groups</h2>

        <ul className="list">
          {this.state.groups
            .map(group => {
              return (
                <Link to={`/group/${group.id}`} key={group.id}>
                  <GroupCard name={group.name} id={group.id} key={group.id} />
                </Link>
              );
            })
            .reverse()}
        </ul>
      </div>
    );
  }
}

const condition = authUser => authUser && !!authUser.roles["ADMIN"];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(Dashboard);
