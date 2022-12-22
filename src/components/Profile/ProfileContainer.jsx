
import React from 'react';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
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

   refreshProfile() {
    let userId = this.props.match.params.userId;
      
      if (!userId) {  
         userId = this.props.authorizedUserId;
         if (!userId) { this.props.history.push("/login");
       }
   }
   if (!userId) { 
      console.error('ID should exists in URI params or in state authorizedUserId')
   } else {
   this.props.getUserProfile(userId);
   this.props.getUserStatus(userId);
   }
   }
         componentDidMount() {
         this.refreshProfile();
         } 

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
     } 
   }
    render() {
        
    return (
        
            <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
            savePhoto={this.props.savePhoto}/>
    );
}
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
     withAuthRedirect, withRouter
    
) (ProfileContainer);

/*
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {
   constructor(props) {
      super( props );
      this.state = {
         isShowMyProfile: true
      }
   }


   componentDidMount() {

      let userIdFromPath = this.props.router.params.userId;
      let authorisedUserId = this.props.authorisedUserId;

      if (userIdFromPath) {

         this.props.getUserProfile( userIdFromPath );
         this.props.getUserStatus( userIdFromPath );

      } else {

         if (this.props.isAuth) { debugger;
            this.props.getUserProfile( authorisedUserId );
            this.props.getUserStatus( authorisedUserId );
         }
      }
   }

   componentDidUpdate(prevProps, prevState, snapshot) {

      let userIdFromPath = +this.props.router.params.userId;
      let authorisedUserId = this.props.authorisedUserId;
      let isShowMyProfile = this.state.isShowMyProfile;

      if (isShowMyProfile) {

         if (userIdFromPath === authorisedUserId) {
            this.setState( {isShowMyProfile: false} )
         }

         if (!userIdFromPath && this.props.isAuth) {
            this.props.getUserProfile( authorisedUserId );
            this.props.getUserStatus( authorisedUserId );
            this.setState( {isShowMyProfile: false} )
         }
      }
   }

   render() {

      if (!this.props.isAuth && !this.props.router.params.userId) {
         return <Navigate to={'/login'} />
      }
      
      return (
         <div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
         </div>
      )
   }
}


// wrapper to use react router's v6 hooks in class component (to use HOC pattern, like in router v5)
function withRouter(Component) {

   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();

      return <Component
         {...props}
         router={{location, navigate, params}} />;
   }

   return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorisedUserId: state.auth.id,
   isAuth: state.auth.isAuth
})


const ProfileContainerCompose = compose(
   withRouter,
   connect( mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus} )
)( ProfileContainer );

export default ProfileContainerCompose;



*/ 