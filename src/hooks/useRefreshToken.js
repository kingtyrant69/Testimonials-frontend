import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();
    console.log(auth)
    const refresh = async () => {
        const response = await axios.post('/v1/users/refresh-token',{}, {
            withCredentials: true
        });
        setAuth(() => {
            return {user:auth?.user, accessToken: response.data.data.accessToken }
        });
        return response.data.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;