import {prefix} from '../Function';

export function repositoryInfoPrefix(url: string): string
{
    return prefix(`/repositoryInfo${url}`);
}

export const REPOSITORY = repositoryInfoPrefix('/repository');
export const BRANCH = repositoryInfoPrefix('/branch');
export const LAST_COMMIT = repositoryInfoPrefix('/lastCommit');
export const DIRECTORY = repositoryInfoPrefix('/directory');