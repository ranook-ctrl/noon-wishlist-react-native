import { Retune } from "retune";
import CreateCollectionCard from "./components/CreateCollectionCard";

export default function App() {
  return (
    <>
      <div className="flex min-h-full w-full flex-col items-center justify-start bg-[#e9ebf0] py-8">
        <div className="flex w-[375px] flex-col items-center gap-6 px-3 py-6">
          <CreateCollectionCard variant="error" />
          <CreateCollectionCard variant="empty-default" />
          <CreateCollectionCard variant="empty-filled" />
          <CreateCollectionCard variant="default" />
          <CreateCollectionCard variant="filled" />
          <CreateCollectionCard variant="two-line" />
          <CreateCollectionCard variant="character-limit" />
        </div>
      </div>
      <Retune />
    </>
  );
}
