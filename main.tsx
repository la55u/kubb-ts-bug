import { useAddPet } from "./gen/hooks";

const add = useAddPet();

add.mutate(
  {
    category: { id: 1, name: "mammal" },
    name: "Lion",
    photoUrls: [],
  },
  {
    onSuccess: (data) => {
      //
    },
  }
);
