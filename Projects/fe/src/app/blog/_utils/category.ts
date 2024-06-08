import { Dispatch } from "@reduxjs/toolkit";
import CategoryInfo from "@/blog/_types/Category";
import { setLeafCategories } from "@/_redux/categorySlice";
import { handleError, throwResponse } from "@/_utils/responses";

export function flattenOutCategoriesV1(
    category: CategoryInfo | undefined
): string {
    if (category === undefined || category === null) return "";
    else if (
        category.ParentCategory === undefined ||
        category.ParentCategory === null
    )
        return category.Id;
    else
        return (
            flattenOutCategoriesV1(category.ParentCategory) +
            " > " +
            category.Id
        );
}

export function flattenOutCategoriesV2(
    category: CategoryInfo | undefined
): string {
    if (category === undefined || category === null) return "";
    else if (
        category.ParentCategory === undefined ||
        category.ParentCategory === null
    )
        return category.Id;
    else
        return (
            flattenOutCategoriesV2(category.ParentCategory) + ", " + category.Id
        );
}

export async function fetchLeafCategoriesAsync(
    dispatch: Dispatch
): Promise<void> {
    return fetch("/api/blog/categories/leaf", {
        credentials: "same-origin",
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throwResponse(res);
        })
        .then((res) => {
            if (res && Array.isArray(res))
                dispatch(setLeafCategories(res));
        })
        .catch(handleError);
}
