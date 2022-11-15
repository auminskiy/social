import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            
            this.props.setUserProfile(response.data);
            console.log(response.data)
          
        });
    }
    render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
}
}
let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let withUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);