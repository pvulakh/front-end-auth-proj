import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

//don't need to map state bc session does not depend on it
const mdp = dispatch => {
    return {
        createNewUser: user => dispatch(createNewUser(user))
    };
};
export default connect(null, mdp)(Signup);