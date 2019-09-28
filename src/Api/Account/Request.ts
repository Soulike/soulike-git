import axios, {AxiosResponse} from 'axios';
import {ResponseBody} from '../../Class';
import {LOGIN, REGISTER} from './ROUTE';
import {notification} from 'antd';

export namespace Account
{
    export async function login(username: string, hash: string): Promise<true | null>
    {
        try
        {
            const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(LOGIN, {
                username,
                hash,
            });
            if (isSuccessful)
            {
                return true;
            }
            else
            {
                notification.warn({message});
                return null;
            }
        }
        catch (e)
        {
            console.error(e);
            notification.error({message: '网络异常'});
            return null;
        }
    }

    export async function register(username: string, hash: string, email: string): Promise<true | null>
    {
        try
        {
            const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(REGISTER, {
                username,
                hash,
                email,
            });
            if (isSuccessful)
            {
                return true;
            }
            else
            {
                notification.warn({message});
                return null;
            }
        }
        catch (e)
        {
            console.error(e);
            notification.error({message: '网络异常'});
            return null;
        }
    }
}