// @flow

export default const HOME_PAGE_ROUTE = '/';
export default const HELLO_PAGE_ROUTE = '/hello';
export default const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
export default const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

// eslint-disable-next-line import/prefer-default-export
export default const helloEndpointRoute: any = (num: number) => {
    console.log(`number = ${num}`);
    return `/ajax/hello/${num || ':num'}`;
};
