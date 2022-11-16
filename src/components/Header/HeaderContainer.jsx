import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authProfile } from '../../redux/authReducer';


class HeaderContainer extends React.Component {
   
    componentDidMount() {
       
       this.props.authProfile();
    }
   
    render(){
    return (
        
            <Header {...this.props}/>
    )
}
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {authProfile}) (HeaderContainer);