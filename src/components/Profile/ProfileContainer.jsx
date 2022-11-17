import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/authRedirect';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class  ProfileContainer extends React.Component {

    componentDidMount() {
     let userId = this.props.match.params.userId;
        if (!userId) {userId = 2;}
      this.props.getUserProfile(userId);
    } 
    render() {
        
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
}
}

let authRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
   
})

let withUrlDataContainerComponent = withRouter(authRedirectComponent);


export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);