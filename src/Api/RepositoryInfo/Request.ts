import {Account, Commit, Group, Repository as RepositoryClass, Repository, ResponseBody} from '../../Class';
import {notification} from 'antd';
import axios, {AxiosResponse} from 'axios';
import {
    ADD_TO_GROUP,
    BRANCH,
    COMMIT_COUNT,
    DIRECTORY,
    FILE_INFO,
    GROUPS,
    LAST_COMMIT,
    RAW_FILE,
    REPOSITORY,
    SET_DESCRIPTION,
    SET_IS_PUBLIC,
    SET_NAME,
} from './ROUTE';
import {ObjectType} from '../../CONSTANT';
import {errorHandler} from '../Function';

export async function repository(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<Readonly<RepositoryClass> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<RepositoryClass>> =
            await axios.get(REPOSITORY, {
                params: {
                    json: JSON.stringify({account, repository}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function branch(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<Readonly<Array<string>> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<string>>> =
            await axios.get(BRANCH, {
                params: {
                    json: JSON.stringify({account, repository}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function lastCommit(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>, commitHash: Readonly<string>, filePath?: Readonly<string>): Promise<Readonly<Commit> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Commit>> =
            await axios.get(LAST_COMMIT, {
                params: {
                    json: JSON.stringify({account, repository, commitHash, filePath}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function directory(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>, commitHash: Readonly<string>, directoryPath: Readonly<string>): Promise<Readonly<Array<Readonly<{ type: ObjectType, path: Readonly<string>, commit: Commit }>>> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<Readonly<{ type: ObjectType, path: Readonly<string>, commit: Commit }>>>> =
            await axios.get(DIRECTORY, {
                params: {
                    json: JSON.stringify({account, repository, commitHash, directoryPath}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function commitCount(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<Repository, 'name'>>, commitHash: Readonly<string>): Promise<Readonly<{ commitCount: number }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commitCount: number }>> =
            await axios.get(COMMIT_COUNT, {
                params: {
                    json: JSON.stringify({account, repository, commitHash}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function fileInfo(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<Repository, 'name'>>, filePath: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }>> =
            await axios.get(FILE_INFO, {
                params: {
                    json: JSON.stringify({account, repository, filePath, commitHash}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function rawFile(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<Repository, 'name'>>, filePath: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<Blob> | null>
{
    try
    {
        const {data}: AxiosResponse<Blob> =
            await axios.get(RAW_FILE, {
                params: {
                    json: JSON.stringify({account, repository, filePath, commitHash}),
                },
                responseType: 'blob',
                transformResponse: data => data,    // 明确告知 axios 不要对返回的数据做任何处理
            });
        return data;
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function setName(repository: Readonly<Pick<RepositoryClass, 'name'>>, newRepository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_NAME, {repository, newRepository});
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
        errorHandler(e);
        return null;
    }
}

export async function setDescription(repository: Readonly<Pick<Repository, 'name' | 'description'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_DESCRIPTION, {repository});
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
        errorHandler(e);
        return null;
    }
}

export async function setIsPublic(repository: Readonly<Pick<Repository, 'name' | 'isPublic'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_IS_PUBLIC, {repository});
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
        errorHandler(e);
        return null;
    }
}

export async function groups(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<Readonly<Group[]> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Group[]>> = await axios.get(GROUPS, {
            params: {
                json: {repository},
            },
        });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function addToGroup(repository: Readonly<Pick<Repository, 'username' | 'name'>>, group: Readonly<Pick<Group, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(ADD_TO_GROUP, {repository, group});
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
        errorHandler(e);
        return null;
    }
}