import React from 'react'
import PropTypes from 'prop-types'
import Notifacations from './notifacation/notifacation';
import PojectList from '../pojects/poject_list/poject_list';

const Dashboard = props => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                <PojectList/>
                </div>
                <div className="col s12 m5 offset-m1">
                <Notifacations/>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
