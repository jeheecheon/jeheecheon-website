import { CreateDummyPromiseAwaiter, wrapPromise } from "@/common/utils/promiseWrapper";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../error/ErrorBoundary";
import Posts from "@/pages/blog/posts/page";
import ErrorMessageWrapper from "../ErrorMessageWrapper";
import { Helmet } from "react-helmet";
import { image, name, url } from "@/common/utils/siteInfo";
import LoadingSpinner from "../LoadingSpinner";

const PostsWrapper = () => {
    const { category, page } = useParams();

    const fetchUrl = useMemo(
        () => {
            if (category === undefined)
                return `/api/blog/recent-posts/pages/${page}`
            else
                return `/api/blog/categories/${category}/pages/${page}`
        },
        [category, page]
    )

    const [postsAwaiter, setPostsAwaiter] = useState(CreateDummyPromiseAwaiter());
    useEffect(() => {
        setPostsAwaiter(wrapPromise(fetch(fetchUrl)));
    }, [fetchUrl])

    return (
        <>
            <div className="m-auto max-w-[800px] min-h-[35vh] mb-[70px]">
                <h1 className="inline-block max-w-[800px] w-full text-xl md:text-3xl font-medium  
                mt-[30px] text-left text-orange-400 dark:text-orange-400 mb-[30px] md:mb-[50px]">
                    {category
                        ? `Posts under "${category}"`
                        : "Recently published"}
                </h1>
                <ErrorBoundary fallback={<ErrorMessageWrapper>Error occured while fetching posts...</ErrorMessageWrapper>}>
                    <Suspense
                        fallback={<LoadingSpinner>Posts Loading..!</LoadingSpinner>}>
                        <Posts postsAwaiter={postsAwaiter} />
                    </Suspense>
                </ErrorBoundary>
            </div>


            {/* Business logic */}
            <Helmet>
                <title>{category ? category : 'Recent posts'} | {name}</title>
                <link rel="canonical" href={`${url}/blog/${category ? 'categories/' + category : 'recent-posts'}/pages/${page}`} />
                <meta name="description" content={`${category ? category + ' posts' : 'Recent posts'}`} />
                <meta name="keywords" content={`jeheecheon, tech, blog, posts, ${category}`} />
                <meta name="author" content="jeheecheon" />

                <meta property="og:title" content={`${category ? category + ' posts' : 'Recent posts'} | ${name}`} />
                <meta property="og:description" content={`${category ? category + ' posts' : 'Recent posts'} | ${name}`} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="jeheecheon" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:url" content={`${url}/blog/${category ? 'categories/' + category : 'recent-posts'}/pages/${page}`} />

                <meta name="twitter:title" content={category ? category : 'Recent posts' + ` | ${name}`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={`${category ? category + ' posts' : 'Recent posts'}`} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        </>
    )
};

export default PostsWrapper