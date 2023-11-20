import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: 'yfol1ok2',
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sk1rUaEws5AoEwo2nd8RRtEGpEmKcKK1RX8VnsOCGIIgyaqJNBKSesCaPKFLq2wM1tQ0l7RKfrJMaZ6iMLbK8mTJoh4CanVsv8MzLNIyRTHSB88TIrYdrf5UDJImFJWXk7YnLBsvASTVeSYxmL3KopFn7uH74Ljgdeyq0vRqc3oUuBEw2FlH", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
