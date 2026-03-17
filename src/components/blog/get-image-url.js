const REFINE_CDN = "https://refine.ams3.cdn.digitaloceanspaces.com";

export const getBlogImageUrl = (image, sizeQuery = "h=256") => {
    if (!image) {
        return undefined;
    }

    if (image.startsWith(REFINE_CDN)) {
        return `https://refine-web.imgix.net${image.replace(
            REFINE_CDN,
            "",
        )}?${sizeQuery}`;
    }

    return image;
};
