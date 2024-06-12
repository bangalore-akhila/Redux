import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../Store/empStore';
import { fetchEmpDetails } from '../Actions/employeeAction';


class Employee extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    componentDidMount () {
        //actions.fetchEmpDetails();
        this.props.fetchEmpDetails();
    }

    render(){
        return(<div>
            EmployeeDetails
            {this.props.loading ? <div>Loading</div> : 
            <div>{this.props.data[0]?.name}</div>}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        loading : state.emp.empLoading,
        data : state.emp.empData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmpDetails : () => dispatch(fetchEmpDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);