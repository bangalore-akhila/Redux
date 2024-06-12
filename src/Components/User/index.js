import {useEffect} from 'react';
import { actions } from '../Store/store';
//import { fetchUser } from '../Actions/userAction';
import { useSelector, useDispatch } from 'react-redux';

// other way to call a action is to useDispatch

const UserDetails = () => {
  const userData = useSelector(state => state.user);
  //const dispatch = useDispatch();
    useEffect(()=>{
        actions.fetchUser() ; // using actionBinder concept
        // dispatch(fetchUser()) using useDispatch hook
    },[])
    return <div>
{userData?.loading ? "Loading" : userData?.usersList?.length > 0 ? userData?.usersList[0].name : "" }
    </div>
}

export default UserDetails