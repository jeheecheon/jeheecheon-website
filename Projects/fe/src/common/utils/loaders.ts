import { LoaderFunction, redirect } from "react-router-dom";
import { HandleError, PropagateResponse, Throw404Response } from "@/common/utils/responses";

export const PostsLoader: LoaderFunction = async ({ params }) => {
    const { page, category, categories } = params;
    if (categories === undefined || categories === null
        || (categories !== 'categories' && categories !== 'recent-posts')
        || page !== undefined && parseInt(page) <= 0)
        return redirect('/blog')

    return fetch(`/api/blog/posts/categories/${category}/pages/${page}`, {
        method: "GET",
        credentials: "same-origin"
    })
        .then(res => {
            if (res.ok)
                return res.json();
            else if (res.status === 400)
                Throw404Response()
            else
                HandleError(res);
        })
        .catch(PropagateResponse);
}

export const PostLoader: LoaderFunction = async ({ params }) => {
    return fetch(`/api/blog/post/${params.uuid}`,
        {
            credentials: "same-origin"
        })
        .then(res => {
            if (res.ok)
                return res.json();
            else if (res.status === 400)
                Throw404Response();
            else
                HandleError(res);
        })
        .catch(PropagateResponse);
}

export const PostUploadLoader: LoaderFunction = async () => {
    return fetch("/api/blog/all-categories",
        {
            credentials: "same-origin"
        })
        .then((res) => {
            if (res.ok)
                return res.json();
            else
                HandleError(res);
        })
        .catch(PropagateResponse)
}