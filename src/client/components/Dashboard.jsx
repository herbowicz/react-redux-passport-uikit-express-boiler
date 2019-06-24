import React, { Component } from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="uk-header-medium uk-text-center">Dashboard</h1>
        <ul className="uk-list uk-list-divider">
          {this.props.auth ? ( // waiting for async data
            this.props.auth == mutations.WAITING ? (
              <p>Loading...</p>
            ) : this.props.data.people ? ( // listing out people (if data contains people to list)
              this.props.data.people.map((person, index) => {
                return <li key={index}>{person.name}</li>;
              })
            ) : null
          ) : (
            // showing non-auth notice
            <p>Log in to view data.</p>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, data }) => ({
  auth,
  data
});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
