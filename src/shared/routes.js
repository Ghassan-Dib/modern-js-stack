// @flow
/* eslint-disable import/prefer-default-export */

export const HOME_PAGE_ROUTE = '/';
export const HELLO_PAGE_ROUTE = '/hello';
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

export const helloEndpointRoute: any = (num: number) => {
    console.log(`number = ${num}`);
    return `/ajax/hello/${num || ':num'}`;
};
