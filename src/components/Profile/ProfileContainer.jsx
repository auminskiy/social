import React from 'react';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/authRedirect';
import { compose } from 'redux';
import { authProfile } from '../../redux/authReducer';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class  ProfileContainer extends React.Component {

    componentDidMount() {
     let userId = this.props.match.params.userId;
        if (!userId) {userId=2}
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    } 
    render() {
        
    return (
        
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    );
}
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
   
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), 
    withRouter,
    
) (ProfileContainer);

