import { useGetLikedPlaces, useGetLikedPlacesInfinite } from "./gen/hooks";

function Test() {
  const { data } = useGetLikedPlacesInfinite(undefined, {
    query: {
      select: (data) => ({
        ...data,
        pages: data.pages.flatMap((p) => p.content),
      }),
    },
  });

  if (!data) return null;

  type A = typeof data.pages;
}
