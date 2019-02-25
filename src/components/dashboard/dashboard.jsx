import React from "react";
import Notifacations from "./notifacation/notifacation";
import PojectList from "../pojects/poject_list/poject_list";
import { connect } from "react-redux";

const Dashboard = props => {
  const { projects } = props;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6 ">
          <PojectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifacations />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);